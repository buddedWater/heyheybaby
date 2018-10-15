import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col, Icon, BackTop } from 'antd';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.css';
import InfiniteScroll from "react-infinite-scroller";
import { FullPageImage } from '../../components'

const Orange = ({ orange, dispatch }) => {

  const swiperProps = {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    lazy: true,
    rebuildOnUpdate: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  const changeLayoutModel = () => {
   // dispatch({type:'orange/updateState',payload:{swiperModel:!orange.swiperModel}})
  }

  const swiperModel = () => {
    let node = orange.imgList?
      (<Swiper {...swiperProps} >
        {orange.imgList.map((item ,key)=>{
         return (<div key={key} className={styles.single_item}><img alt={key} src={item.url}/>
          <div className={styles.desc} title={item.title}>{item.title}</div></div>)
        })}
      </Swiper>):null
    return node
  }

  const handleImageClick = (url) => {
    dispatch({type:'orange/updateState',payload:{showImageUrl:url, modalVisible: true}})
  }

  const loadMore = (page) => {
    dispatch({type:'orange/queryMore', payload:{current:orange.current+1}})
  }

  const scrollProps = {
    pageStart: 0,
    hasMore: orange.hasMore,
    loader: <div key='loader' style={{textAlign: 'center'}}><Icon type='loading'/></div>,
    loadMore: (page)=>loadMore(page)    
  }

  const renderItem = () => {
    let items = []
    items = orange.records.map((item, index)=>{
      return (<Col key={index} span={8}>
        <Row className={styles.single_item}>
          <Col span={24}><img alt={index} src={item.url} onClick={()=>handleImageClick(item.url)} style={{width:"100%"}}/></Col>
          <Col span={24} className={styles.desc}>{item.title}</Col>
        </Row>
      </Col>)
    })
    return items
  }

  const handleCancel = () => {
    dispatch({type:'orange/updateState',payload:{showImageUrl:"", modalVisible: false}})
  }

  const fullPageData = {
    visible: orange.modalVisible,
    url: orange.showImageUrl,
    handleCancel: ()=>handleCancel(),
  }

  return (    
    <Fragment>
      <Row className={styles.orange} >
        <Col span={24} className={styles.btn}><Icon onClick={()=>changeLayoutModel()} type={orange.swiperModel === true?"appstore":"border"}/></Col>
        <Col span={24}>
          { orange.swiperModel ? swiperModel() : <InfiniteScroll {...scrollProps}><Row gutter={18}>{renderItem()}</Row></InfiniteScroll> }          
        </Col> 
        <Col span={24}>
          <FullPageImage {...fullPageData}/> 
        </Col>
      </Row>      
      <BackTop />    
    </Fragment>
  );
}

Orange.propTypes = {
  orange: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ orange }) => ({ orange }))(Orange);