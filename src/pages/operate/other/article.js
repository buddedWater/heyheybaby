import React, { Fragment } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './article.less';
import AddArticleModal from './addArticleModal';
import { Row, Col, Table, Divider, Button, Popconfirm } from 'antd';

const Article = ({ article, dispatch }) => {

  article.columns[2].render = (text, record) => {
    return <span title={text} className="text_span">{text}</span>
  }

  article.columns[5].render = (text, record) => (
    <span>
      <a href="javascript:;" onClick={()=>handleModify(record)}>修改</a>
      <Divider type="vertical" />
      <Popconfirm title="确认删除吗？" onConfirm={()=>handleDelete(record)}>
        <a href="javascript:;">删除</a>
      </Popconfirm>
    </span>
  )

  const paginationProps = {
    pageSize: article.pageSize,
    current: article.current,
    total: article.total,
    showQuickJumper: true
  }

  const tableProps = {
    pagination: paginationProps,
    dataSource: article.dataSource,
    columns: article.columns,
    scroll: { x: true },
    onChange: (pagination, filters, sorter,)=>onTableChange(pagination, filters, sorter)
  }

  const onTableChange = (pagination, filters, sorter) => {
    dispatch({type:"article/updateState", payload:{current:pagination.current, orderBy:sorter.field, order:sorter.order === "descend"?-1:1}})
    dispatch({type:"article/query_article"})
  }

  const handleModify = (record) => {
    dispatch({type:"article/updateState", payload:{modalVisible:true, modalTitle:"修改", modifyData:record}})
  }

  const handleDelete = (record) => {
    dispatch({type:"article/delete", payload:{_id:record._id}})
  }

  const handleAdd = (show, title, num) => {
    dispatch({type:"article/updateState", payload:{modalVisible:show, modalTitle:title}})  
  }

  const onCancel = () =>{
    dispatch({type:"article/updateState", payload:{modalVisible:false, modifyData:{}}})  
  }

  const addData = {
    modalVisible: article.modalVisible,
    modalTitle: article.modalTitle,
    modifyData: article.modifyData,
    onCancel: ()=>onCancel(),
    dispatch
  }

  return (    
    <Fragment>
      <Row className={styles.article}>
        <Col span={24} className={styles.new_col}>
          <Button type="primary" onClick={()=>handleAdd(true,"新增",1)}>新增</Button>
        </Col>
        <Col span={24} style={{padding: '10px 0'}}>
          <Table {...tableProps}></Table>
        </Col>
      </Row>
      <AddArticleModal addData={addData}/>
    </Fragment>
  );
}

Article.propTypes = {
  article: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ article }) => ({ article }))(Article);