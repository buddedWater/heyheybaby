import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col, List, Icon, Pagination } from 'antd';
import orange from '../../assets/Orange.svg';
import TweenOne from 'rc-tween-one';
import { routerRedux } from 'dva/router';
import QueueAnim from 'rc-queue-anim';
//import Swiper from 'react-id-swiper';
//import 'swiper/dist/css/swiper.css';

//let currentSwiper;
const Second = ({ second, dispatch }) => {

  const listProps = {
    bordered: false,
    dataSource: second.dataList,
    renderItem: item => renderItem(item)
  }

  /*const swiperProps = {
    effect: 'flip',
    speed: 1500,
    allowTouchMove: false,
  }*/

  const paginationProps = {
     pageSize: second.pageSize,
     current: second.current,
     total: second.total,
     onChange: (page, pageSize)=>onPageChange(page, pageSize)
  } 

  const onPageChange = (page, pageSize) => {
    dispatch({type:"second/query",payload:{current:page}})
  }

  const renderItem = (item) => {
    return(
      <List.Item>
        <Row key={item.key} style={{width:'100%'}}>
          <Col span={24} ><span className={styles.article_content}>{item.text.replace(/\s+/g,"")}</span></Col>
          <Col span={4}></Col>
          <Col span={20} className={styles.article_title} ><span onClick={()=>showDetail(item)}>{item.title}</span></Col>
        </Row>
      </List.Item>
    )    
  }

  const detailContent = () => {
    return (
      <div>
        {"text" in second.activeRow?<Row className={styles.detail_content}>
          <Col span={24} className={styles.title}><h3>{second.activeRow.title}</h3></Col>       
          <QueueAnim className="demo-content"
            key="demo"
            type={['right', 'left']}
            ease={['easeOutQuart', 'easeInOutQuart']}>
              {second.activeRow.text.trim().split('\n').map((item, key)=>{
                return <Col className={styles.text_col} key={key} span={24} >{item.trim()}</Col>
              })}                
          </QueueAnim>
        </Row>:null}
      </div>     
    )
  }

  const showDetail = (item) => {
    //currentSwiper.slideNext()
    dispatch({type:"second/updateState",payload:{show:false, basicDistance:-1500, detailDistance:0}})
    setTimeout(()=>{
      dispatch({type:"second/updateState",payload:{activeRow:item}})
    },1000)
    
    //dispatch({type:"second/query_detail",payload:{activeKey:item.key}})
  }

  const hideDetail = () => {
    //currentSwiper.slidePrev()
    dispatch({type:"second/updateState",payload:{show:true,activeRow:{},basicDistance:0, detailDistance:1500}})
  }

  const handleTouch = (flag) => {
    dispatch({type:"second/updateState",payload:{paused:flag}})
  }

  const toThird = () => {
    dispatch(routerRedux.push('/third'));
  }

  return (    
    <Fragment>
      <Row className={styles.second}> 
        <Col span={24}>
          <Row>
            <Col span={12} className={styles.theme_title}><h2>夏宇诗选</h2></Col>
            <Col span={12} className={styles.pagination}>
              {second.show?<Pagination simple {...paginationProps} />:null}
            {/*second.show?<Row><Col span={24}><Button>Prev</Button><Button>Next</Button></Col></Row>:null*/}
            </Col>
          </Row>
        </Col>   
      	<Col span={24}>
          {/*<QueueAnim className="demo-content"
            key="demo"
            type={['right', 'left']}
            ease={['easeOutQuart', 'easeInOutQuart']}>
            {second.show?<List {...listProps}/>:detailContent()}           
          </QueueAnim>*/}
          {/*<Swiper {...swiperProps}  ref={node => {if(node) currentSwiper = node.swiper}} >
            <List {...listProps}/>
            {detailContent()}
          </Swiper>  */}
          <TweenOne paused={false} animation={{   
              x: second.basicDistance,
              repeat: 0,           
              duration: 1000
            }} >
             <List {...listProps}/>
          </TweenOne> 
          <TweenOne style={{position:"absolute", top:"0"}} paused={false} animation={{   
              x: second.detailDistance, 
              repeat: 0,          
              duration: 1000
            }} >
             {detailContent()}
          </TweenOne> 
        </Col> 
       {/* <Col span={24} className={styles.pagination}><Pagination {...paginationProps} /></Col>*/}
        <Col span={12} className={styles.back_col}>
          {second.show?null:<span className={styles.back} onClick={()=>hideDetail()}><Icon type="left" ></Icon>Back</span>}
        </Col>
        <Col span={12} className={styles.rotate_image}>
          <TweenOne style={{ display:'inline-block'}} paused={second.paused} animation={{   
              x: -100,         
              rotate: 360, 
              yoyo: true, 
              repeat: -1, 
              duration: 1000
            }} >
            <img alt="pick me!" src={orange} onClick={()=>toThird()} onMouseEnter={()=>handleTouch(true)} onMouseOut={()=>handleTouch(false)}/>
          </TweenOne>              
        </Col>    
      </Row>
    </Fragment>
  );
}

Second.propTypes = {
	second: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ second }) => ({ second }))(Second);