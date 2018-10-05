import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.less';
import AddModal from './other/addModal';
import { Row, Col, Tabs, Table, Divider, Button, Popconfirm } from 'antd';

const TabPane = Tabs.TabPane;

const Operate = ({ operate, dispatch }) => {

  operate.columns[2].render = (text, record) => {
    return <span title={text} className="text_span">{text}</span>
  }

  operate.columns[5].render = (text, record) => (
    <span>
      <a href="javascript:;" onClick={()=>handleModify(record)}>修改</a>
      <Divider type="vertical" />
      <Popconfirm title="确认删除吗？" onConfirm={()=>handleDelete(record)}>
        <a href="javascript:;">删除</a>
      </Popconfirm>
    </span>
  )

  const paginationProps = {
    pageSize: operate.pageSize,
    current: operate.current,
    total: operate.total,
    showQuickJumper: true
  }

  const tableProps = {
    pagination: paginationProps,
    dataSource: operate.dataSource,
    columns: operate.columns,
    scroll: { x: true },
    onChange: (pagination, filters, sorter,)=>onTableChange(pagination, filters, sorter)
  }

  const onTableChange = (pagination, filters, sorter) => {
    dispatch({type:"operate/updateState", payload:{current:pagination.current, orderBy:sorter.field, order:sorter.order === "descend"?-1:1}})
    dispatch({type:"operate/query_article"})
  }

  const onTabChange = (key) => {
   
  }

  const handleModify = (record) => {
    dispatch({type:"operate/updateState", payload:{modalVisible:true, modalTitle:"修改", modifyData:record}})
  }

  const handleDelete = (record) => {
    dispatch({type:"operate/delete", payload:{_id:record._id}})
  }

  const handleAdd = (show, title) => {
    dispatch({type:"operate/updateState", payload:{modalVisible:show, modalTitle:title}})
  }

  const onCancel = () =>{
    dispatch({type:"operate/updateState", payload:{modalVisible:false, modifyData:{}}})  
  }


  const addData = {
    modalVisible: operate.modalVisible,
    modalTitle: operate.modalTitle,
    modifyData: operate.modifyData,
    onCancel: ()=>onCancel(),
    dispatch
  }

  return (    
    <Fragment>
      <Row className={styles.operate}>
        <Col span={24}>
          <Tabs onChange={(key)=>onTabChange(key)} type="card">
            <TabPane tab="文章列表" key="1">
              <Row>
                <Col span={24} className={styles.new_col}>
                  <Button type="primary" onClick={()=>handleAdd(true,"新增")}>新增</Button>
                </Col>
                <Col span={24} style={{padding: '10px 0'}}>
                  <Table {...tableProps}></Table>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="图片列表" key="2"></TabPane>
          </Tabs>
        </Col>        
      </Row>
      <AddModal addData={addData}/>
    </Fragment>
  );
}

Operate.propTypes = {
  operate: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ operate }) => ({ operate }))(Operate);