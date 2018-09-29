import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import Link from 'umi/link';

function IndexPage() {
  return (    
    <div className={styles.normal}>
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
