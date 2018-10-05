import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col, Divider } from 'antd';
import wait from '../../assets/thirdImage/wait.jpg';

const Third = ({ third, dispatch }) => {

  return (    
    <Fragment>
      <Row className={styles.third} type="flex" align="middle">
      	<Col span={24} className={styles.wait}>
          <span>敬请期待<Divider type="vertical"/>请期待<Divider type="vertical"/>期待<Divider type="vertical"/>待</span>   
          <img src={wait} alt="wait!" style={{width:'100%'}}/>  
        </Col>    
      </Row>
    </Fragment>
  );
}

Third.propTypes = {
	third: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ third }) => ({ third }))(Third);