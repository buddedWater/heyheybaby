import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col } from 'antd';
import wait from '../../assets/thirdImage/wait.jpg';

const Third = ({ third, dispatch }) => {

  return (    
    <Fragment>
      <Row className={styles.third} type="flex" align="middle">
      	<Col span={24} className={styles.wait}>
          敬请期待   
          <img src={wait} alt="wait!" style={{width:'100%'}}/>  
        </Col>    
      </Row>
    </Fragment>
  );
}

Third.propTypes = {
	third: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(({ third }) => ({ third }))(Third);