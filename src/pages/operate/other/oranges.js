import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './oranges.less';
import AddOrangeModal from './addOrangeModal';
import { Row, Col, Table, Divider, Button, Popconfirm } from 'antd';
import { FullPageImage } from '../../../components'

const Oranges = ({ oranges, dispatch }) => {

  oranges.columns[1].render = (text, record) => {
    return <a href="javascript:;" onClick={()=>handleView(text)}>预览</a>
  }

  oranges.columns[2].render = (text, record) => {
    return <span title={text} className="text_span">{text}</span>
  }

  oranges.columns[5].render = (text, record) => (
    <span>
      <a href="javascript:;" onClick={()=>handleModify(record)}>修改</a>
      <Divider type="vertical" />
      <Popconfirm title="确认删除吗？" onConfirm={()=>handleDelete(record)}>
        <a href="javascript:;">删除</a>
      </Popconfirm>
    </span>
  )

  const paginationProps = {
    pageSize: oranges.pageSize,
    current: oranges.current,
    total: oranges.total,
    showQuickJumper: true
  }

  const tableProps = {
    pagination: paginationProps,
    dataSource: oranges.dataSource,
    columns: oranges.columns,
    scroll: { x: true },
    onChange: (pagination, filters, sorter,)=>onTableChange(pagination, filters, sorter)
  }

  const onTableChange = (pagination, filters, sorter) => {
    dispatch({type:"oranges/updateState", payload:{current:pagination.current, orderBy:sorter.field, order:sorter.order === "descend"?-1:1}})
    dispatch({type:"oranges/query_oranges"})
  }

  const handleView = (text) => {
    dispatch({type:"oranges/updateState", payload:{fullVisible:true, url:text}})
  }

  const handleModify = (record) => {
    dispatch({type:"oranges/updateState", payload:{modalVisible:true, modalTitle:"修改", modifyData:record}})
  }

  const handleDelete = (record) => {
    dispatch({type:"oranges/delete", payload:{_id:record._id}})
  }

  const handleAdd = (show, title, num) => {
    dispatch({type:"oranges/updateState", payload:{modalVisible:show, modalTitle:title}})  
  }

  const onCancel = () =>{
    dispatch({type:"oranges/updateState", payload:{modalVisible:false, modifyData:{}}})  
  }

  const addData = {
    modalVisible: oranges.modalVisible,
    modalTitle: oranges.modalTitle,
    modifyData: oranges.modifyData,
    onCancel: ()=>onCancel(),
    dispatch
  }

  return (    
    <Fragment>
      <Row className={styles.oranges}>
        <Col span={24} className={styles.new_col}>
          <Button type="primary" onClick={()=>handleAdd(true,"新增",1)}>新增</Button>
        </Col>
        <Col span={24} style={{padding: '10px 0'}}>
          <Table {...tableProps}></Table>
        </Col>
      </Row>
      <AddOrangeModal addData={addData}/>
      <FullPageImage visible={oranges.fullVisible} url={oranges.url}/>
    </Fragment>
  );
}

Oranges.propTypes = {
  oranges: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ oranges }) => ({ oranges }))(Oranges);