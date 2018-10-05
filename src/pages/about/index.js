import React, { Fragment } from 'react';
import styles from './index.less';
import { Row, Col } from 'antd';

const About = () => {

  const info = [/*{
    title: '电话',
    content: 'xxxxxxxxxx'
  },{
    title: '地址',
    content: 'xxxxxxx路xxx街'
  },{
    title: '邮箱',
    content: 'xxxxxxx@xxx.com'
  }*/]

  return (    
    <Fragment>
      <Row className={styles.about}>       
        {info.map((item, key)=>{
          return <Col span={24} key={key} className={styles.info}>{`${item.title}：${item.content}`}</Col>
        })}
        <Col span={24} className={styles.desc}>这里没有你需要的东西，你需要去你心里寻找。</Col>
      </Row>
    </Fragment>
  );
}

export default About;