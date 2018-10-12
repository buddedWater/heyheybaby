import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col, Icon, Modal, BackTop } from 'antd';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.css';
import InfiniteScroll from "react-infinite-scroller";
import { FullPageImage } from '../../components'

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

  const changeLayoutModel = () => {
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

  return (    
    <Fragment>
      <Row className={styles.orange} >
        <Col span={24} className={styles.btn}><Icon onClick={()=>changeLayoutModel()} type={orange.swiperModel === true?"appstore":"border"}/></Col>
        <Col span={24}>
          { orange.swiperModel ? swiperModel() : <InfiniteScroll {...scrollProps}><Row gutter={18}>{renderItem()}</Row></InfiniteScroll> }          
        </Col> 
        <Col span={24}>
          <FullPageImage visible={orange.modalVisible} url={orange.showImageUrl}/> 
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