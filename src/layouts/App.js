import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Layout } from 'antd';
import styles from './App.less'
import { Helmet } from 'react-helmet';
import logo from '../assets/Orange.png';

const { Header, Footer, Content } = Layout;

const App = ({
  children, dispatch, app, loading, location,
}) => {

  const offset = {xs:2, sm:4, md:4, lg:4, xl:5, xxl:7}
  const content = {xs:20, sm:16, md:16, lg:16, xl:12, xxl:10}

	return (
		<Fragment>
      <Helmet>
        <title>heyheybaby</title>
        <link rel="icon" href={logo} type="image/x-icon" />
      </Helmet>
			<Header></Header>
			<Content>
				<Row className={styles.content}>
					<Col {...offset}></Col>
					<Col {...content}>{ children }</Col>
					<Col {...offset}></Col>
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