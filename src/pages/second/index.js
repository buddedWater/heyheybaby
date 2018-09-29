import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col, List } from 'antd';
import orange from '../../assets/Orange.svg';
import TweenOne from 'rc-tween-one';
import { routerRedux } from 'dva/router';

const Second = ({ second, dispatch }) => {

  const listProps = {
    bordered: false,
    dataSource: second.dataList,
    renderItem: item => renderItem(item)
  }

  const renderItem = (item) => {
    return(
      <List.Item>
        <Row>
          <Col span={24}>{item.content}</Col>
          <Col span={12}>{item.name}</Col>
          <Col span={12} className={styles.date}>{item.date}</Col>
        </Row>
      </List.Item>
    )    
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
          <List {...listProps}></List>
        </Col> 
        <Col span={24} className={styles.rotate_image}>
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