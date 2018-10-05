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
import Link from 'umi/link';
require('../utils/iconfont.js');

const { Header, Footer, Content } = Layout;

const App = ({
  children, dispatch, app, loading, location,
}) => {

  const offset = (location.pathname === "/" || location.pathname === "/owner" || location.pathname === "/operate") ? {xs:2, sm:4, md:4, lg:4, xl:5, xxl:6} : {xs:2, sm:4, md:4, lg:4, xl:4, xxl:1}
  const content = (location.pathname === "/" || location.pathname === "/owner" || location.pathname === "/operate") ? {xs:20, sm:16, md:16, lg:16, xl:14, xxl:12} : {xs:20, sm:14, md:12, lg:10, xl:9, xxl:8}

  const handleLogout = () => {
    window.sessionStorage.clear()
    dispatch(routerRedux.push('/owner'))
  }

  const renderNavHeader = () => {
    return (
      <Header style={{borderBottom: '1px solid rgba(0, 0, 0, 0.65)'}}>
        <Row>
          <Col span={24}> 
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-hey"></use>
            </svg>
          </Col>
        </Row>      
        <Row>
          <Col {...offset}></Col>
          <Col {...content} className="navs">
            {location.pathname === "/operate"?
              <span className="user">{JSON.parse(window.sessionStorage.getItem('user'))}<Divider type="vertical"/><a href="javascript:;" onClick={()=>handleLogout()}>Log out</a></span>
            :<span className="user"><Link to='/'>首页</Link><Divider type="vertical"/><Link to='/first'>1</Link><Divider type="vertical"/><Link to='/second'>2</Link><Divider type="vertical"/><Link to='/third'>3</Link><Divider type="vertical"/><Link to='/about'>关于</Link></span>}
          </Col>
        </Row>   
      </Header>
    )
  }

	return (
		<Fragment>
      <Helmet>
        <title>heyheybaby</title>
        <link rel="icon" href={logo} type="image/x-icon" />
      </Helmet>
      { location.pathname === "/" || location.pathname === "/owner" ? <Header></Header> : renderNavHeader() }			
			<Content className={styles.content}>
				<Row>
					<Col {...offset}></Col>
					<Col {...content} >{ children }</Col>
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