import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col } from 'antd';
import TextScroll from 'react-textscroll';
import { routerRedux } from 'dva/router';

const First = ({ first, dispatch }) => {

  const toAnother = (to) => {
    dispatch(routerRedux.push(`/${to}`));
  }


  return (    
    <Fragment>
      <Row>
      	<Col span={24} className={styles.text_scrolling}>
      	 <TextScroll mode='horizontal' text={first.text} speed={10000} />
      	</Col>
      </Row>
      <Row gutter={24}>
      	{first.cardList.map((item, key)=>{
      		return(            
      			<Col key={key} span={8} className={styles.single}>     				     				
      				<img alt={key} src={item.url}/>
              {"to" in item?<div className={styles.mask} style={{backgroundColor:"#5F9EA0"}}>
                  <span onClick={()=>toAnother(item.to)} className={styles.active_card}>GO!</span></div>:<div className={styles.mask}></div>               
              }
      			</Col>
      		)
      	})}
      </Row>
    </Fragment>
  );
}

First.propTypes = {
	first: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ first }) => ({ first }))(First);