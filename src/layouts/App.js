import React, { Fragment } from 'react';
import { Row, Col, Divider } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Layout } from 'antd';
import styles from './App.less'
import { Helmet } from 'react-helmet';
import logo from '../assets/Orange.png';
import { routerRedux } from 'dva/router';
require('../utils/iconfont.js');

const { Header, Footer, Content } = Layout;

const App = ({
  children, dispatch, app, loading, location,
}) => {

  const offset = (location.pathname === "/" || location.pathname === "/owner" || location.pathname === "/operate") ? {xs:2, sm:4, md:4, lg:4, xl:5, xxl:6} : {xs:2, sm:2, md:2, lg:2, xl:2, xxl:1}
  const content = (location.pathname === "/" || location.pathname === "/owner" || location.pathname === "/operate") ? {xs:20, sm:16, md:16, lg:16, xl:14, xxl:12} : {xs:20, sm:14, md:12, lg:10, xl:9, xxl:8}

  const handleLogout = () => {
    window.sessionStorage.clear()
    dispatch(routerRedux.push('/owner'))
  }

	return (
		<Fragment>
      <Helmet>
        <title>heyheybaby</title>
        <link rel="icon" href={logo} type="image/x-icon" />
      </Helmet>
			<Header>
        <Row>
          <Col {...offset}></Col>
          <Col {...content} style={{textAlign: 'right'}}>
            {location.pathname === "/operate"?<span className="user">{JSON.parse(window.sessionStorage.getItem('user'))}<Divider type="vertical"/><a href="javascript:;" onClick={()=>handleLogout()}>Log out</a></span>:null}
          </Col>
        </Row>   
      </Header>
			<Content className={styles.content}>
				{(location.pathname === "/" || location.pathname === "/owner") ? null : <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-hey"></use>
        </svg>}
				<Row>
					<Col {...offset}></Col>
					<Col {...content} >{ children }</Col>
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