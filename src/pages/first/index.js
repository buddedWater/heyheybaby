import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col } from 'antd';
import TextScroll from 'react-textscroll';

const First = ({ first }) => {
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
      				<div className={styles.mask}></div>
      			</Col>
      		)
      	})}
      </Row>
    </Fragment>
  );
}

First.propTypes = {
	first: PropTypes.object,
};

export default connect(({ first }) => ({ first }))(First);