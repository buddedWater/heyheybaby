import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Helmet } from 'react-helmet';
import logo from '../assets/Orange.png';
import Link from 'umi/link';

function IndexPage() {
  return (    
    <div className={styles.normal}>
      <Helmet>
        <title>heyheybaby</title>
        <link rel="icon" href={logo} type="image/x-icon" />
      </Helmet>
      <h1 className={styles.title}>Yay! Welcome to hey hey baby!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>Someone Must Shout That We Will Build The Pyramids.</li>
      </ul>
      <Link to="/first" className={styles.nav}>Gooooooooooooo!</Link>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
