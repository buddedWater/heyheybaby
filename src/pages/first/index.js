import React, { Fragment } from 'react';
import { connect } from 'dva';
import styles from './index.less';

function First() {
  return (    
    <Fragment>
      first page
    </Fragment>
  );
}

First.propTypes = {
};

export default connect()(First);