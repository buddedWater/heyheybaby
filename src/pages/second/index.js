import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col, List, Icon } from 'antd';
import orange from '../../assets/Orange.svg';
import TweenOne from 'rc-tween-one';
import { routerRedux } from 'dva/router';
import QueueAnim from 'rc-queue-anim';

const Second = ({ second, dispatch }) => {

  const listProps = {
    bordered: false,
    dataSource: second.dataList,
    renderItem: item => renderItem(item)
  }

  const renderItem = (item) => {
    return(
      <List.Item key={item.key}>
        <Row onClick={()=>showDetail(item)}>
          <Col span={24}>{item.content}</Col>
          <Col span={12}>{item.name}</Col>
          <Col span={12} className={styles.date}>{item.date}</Col>
        </Row>
      </List.Item>
    )    
  }

  const detailContent = () => {
    return (
      <Fragment>
        {second.activeRow?<Row>
          <Col span={24} className={styles.title}><h2>{second.activeRow.title}</h2></Col>       
          <QueueAnim className="demo-content"
            key="demo"
            type={['right', 'left']}
            ease={['easeOutQuart', 'easeInOutQuart']}>
              {second.activeRow.content.trim().split(" ").map((item, key)=>{
                return <Col className={styles.text_col} key={key} span={24} >{item}</Col>
              })}                    
          </QueueAnim>
        </Row>:null}
      </Fragment>     
    )
  }

  const showDetail = (item) => {
    dispatch({type:"second/updateState",payload:{show:false, activeRow:item}})
    //dispatch({type:"second/query_detail",payload:{activeKey:item.key}})
  }

  const hideDetail = () => {
    dispatch({type:"second/updateState",payload:{show:true}})
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
          <QueueAnim className="demo-content"
            key="demo"
            type={['right', 'left']}
            ease={['easeOutQuart', 'easeInOutQuart']}>
            {second.show?[<List {...listProps}/>]:detailContent()}           
          </QueueAnim>
        </Col> 
        <Col span={12} style={{padding:"30px 0"}}>
          {second.show?null:<span className={styles.back} onClick={()=>hideDetail()}><Icon type="left" ></Icon>Back</span>}
        </Col>
        <Col span={12} className={styles.rotate_image}>
          <TweenOne style={{ display:'inline-block'}} paused={second.paused} animation={{   
              x: -400,           
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
  dispatch: PropTypes.func,
};

export default connect(({ second }) => ({ second }))(Second);