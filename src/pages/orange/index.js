import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col, Icon, Modal } from 'antd';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.css';
import LimitedInfiniteScroll from 'react-limited-infinite-scroll'

const Orange = ({ orange, dispatch }) => {

  const swiperProps = {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  const changeLayoutModal = () => {
    dispatch({type:'orange/updateState',payload:{swiperModel:!orange.swiperModel}})
  }

  const swiperModel = () => {
    return (
      <Swiper {...swiperProps} >
        {orange.imgList.map((item ,key)=>{
         return (<div key={key} className={styles.single_item}><img alt={key} src={item.url}/>
          <div className={styles.desc} title={item.title}>{item.title}</div></div>)
        })}
      </Swiper>
    )
  }

  const handleImageClick = (url) => {
    dispatch({type:'orange/updateState',payload:{showImageUrl:url, modalVisible: true}})
  }

  const loadNext = (page) => {
    //dispatch({type:'orange/queryMore',payload:{page:page}}) 
    console.log(page)
    dispatch({type:'orange/updateState',payload:{page:page}}) 
  }

  const scrollProps = {
    limit: 5,
    hasMore: true,
    spinLoader: <div className="loader">Loading...</div>,
    mannualLoader: <span style={{fontSize: 20, lineHeight: 1.5, marginTop: 20, marginBottom: 20, display: 'inline-block'}}>Load More</span>,
    noMore: <div className="loader">No More Items</div>,
    loadNext: (page)=>loadNext(page)
  }

  const renderItem = ()=> {
      {orange.imgList.slice((orange.page-1)*orange.pageSize,(orange.page-1)*orange.pageSize + orange.pageSize).map((item, key)=>{
        return  <div key={key}><img alt={key} src={item.url} style={{width:"300px"}}/><div>{item.title}</div></div>
      })}
  }

  const squaredModel = () => {
    return (
      <div>
        <LimitedInfiniteScroll {...scrollProps}>{renderItem()}</LimitedInfiniteScroll>
      </div>
    )
  }

  {/*const squaredMdoel = () => {
    return (
      <Row gutter={18}>
        {orange.imgList.map((item ,key)=>{
         return (<Col span={8} key={key} className={styles.single_item}><img alt={key} onClick={()=>handleImageClick(item.url)} src={item.url}/>
          <div className={styles.desc} title={item.title}>{item.title}</div></Col>)
        })}
      </Row>
    )
  }*/}

  const onCancel = () => {
    dispatch({type:'orange/updateState',payload:{modalVisible: false}})
  }

  const modalProps = {
    visible: orange.modalVisible,
    footer: null,
    width: 700,
    onCancel: ()=>onCancel()
  }

  return (    
    <Fragment>
      <Row className={styles.orange} >
        <Col span={24} className={styles.btn}><Icon onClick={()=>changeLayoutModal()} type={orange.swiperModel === true?"appstore":"border"}/></Col>
        <Col span={24}>
          { orange.swiperModel ? swiperModel() : squaredModel() }          
        </Col> 
        <Col span={24}>
          <Modal {...modalProps}>
            <img src={orange.showImageUrl}/>
          </Modal>
        </Col>   
      </Row>      
    </Fragment>
  );
}

Orange.propTypes = {
  orange: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ orange }) => ({ orange }))(Orange);