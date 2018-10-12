import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import Article from './other/article';
import Oranges from './other/oranges';
import { Row, Col, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

const Operate = ({ operate, dispatch }) => {

  const onTabChange = (key) => {

  }

  return (    
    <Fragment>
      <Row className={styles.operate}>
        <Col span={24}>
          <Tabs onChange={(key)=>onTabChange(key)} type="card">
            <TabPane tab="文章列表" key="1">
              <Article />
            </TabPane>
            <TabPane tab="图片列表" key="2">
              <Oranges />
            </TabPane>
          </Tabs>
        </Col>        
      </Row>   
    </Fragment>
  );
}

Operate.propTypes = {
  operate: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ operate }) => ({ operate }))(Operate);