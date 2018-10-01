import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Layout } from 'antd';
import styles from './App.less'
import { Helmet } from 'react-helmet';
import logo from '../assets/Orange.png';
require('../utils/iconfont.js');

const { Header, Footer, Content } = Layout;

const App = ({
  children, dispatch, app, loading, location,
}) => {

  const offset = location.pathname === "/" ? {xs:2, sm:4, md:4, lg:4, xl:6, xxl:7} : {xs:2, sm:2, md:2, lg:2, xl:2, xxl:1}
  const content = location.pathname === "/" ? {xs:20, sm:16, md:16, lg:16, xl:12, xxl:10} : {xs:20, sm:14, md:12, lg:10, xl:9, xxl:8}

	return (
		<Fragment>
      <Helmet>
        <title>heyheybaby</title>
        <link rel="icon" href={logo} type="image/x-icon" />
      </Helmet>
			<Header></Header>
			<Content className={styles.content}>
				<svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-hey"></use>
        </svg>
				<Row>
					<Col {...offset}></Col>
					<Col {...content}>{ children }</Col>
				</Row>
			</Content>
			<Footer></Footer>					
		</Fragment>
	)
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))