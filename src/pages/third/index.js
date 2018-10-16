import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import { Row, Col } from 'antd';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

const Third = ({ third, dispatch }) => {

  return (    
    <Fragment>
      <Row className={styles.third} type="flex" align="middle">
      	<Col span={24} className={styles.wait}>
          <Player>
            <source src="https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_video/tianqiao.mp4" />
          </Player>
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