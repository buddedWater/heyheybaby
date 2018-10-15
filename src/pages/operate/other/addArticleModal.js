import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './addArticleModal.less';
import moment from 'moment';
import { Row, Col, Input, Form, Modal, notification } from 'antd';

const FormItem = Form.Item;
const TextArea = Input.TextArea

const AddArticleModal = ({ addData, form }) => {

  const modalProps = {
    title: addData.modalTitle,
    visible: addData.modalVisible,
    onOk: (e)=>onOK(e),
    onCancel: ()=>onCancel()
  }

  const onCancel = () => {
    addData.onCancel()
    form.resetFields()
  }

  const onOK = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        handleSubmit(values)
      }
    });
  }

  const handleSubmit = (values) => {
    if(values._id){
      values.modifyTime = moment().format('YYYY-MM-DD HH:mm:ss')
      addData.dispatch({type:"article/update", payload:{values}}).then((data)=>{
        if(data.code === 1){
          onCancel();
          notification['success']({
            message: '修改成功',
          })
        }else{
          notification['error']({
            message: '修改失败',
            description: ''
          })
        }
      })
    }else{
      delete values['_id']
      values.createTime = moment().format('YYYY-MM-DD HH:mm:ss')
      values.modifyTime = moment().format('YYYY-MM-DD HH:mm:ss')
      addData.dispatch({type:"article/add", payload:{values}}).then((data)=>{
        if(data.code === 1){
          onCancel();
          notification['success']({
            message: '新增成功',
          })
        }else{
          notification['error']({
            message: '新增失败',
            description: ''
          })
        }
      })
    }   
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  return (    
    <Fragment>
      <Row className={styles.operate}>
        <Col span={24}>
          <Modal {...modalProps}>
            <Form>
              <FormItem {...formItemLayout} label="_id" style={{display:'none'}}>
                {form.getFieldDecorator('_id', {
                  initialValue: addData.modifyData._id ? addData.modifyData._id : "",
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="题目">
                {form.getFieldDecorator('title', {
                  initialValue: addData.modifyData.title ? addData.modifyData.title : "",
                  rules: [{ required: true, message: '请输入题目!' }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="作者">
                {form.getFieldDecorator('author', {
                  initialValue: addData.modifyData.author ? addData.modifyData.author : "",
                  rules: [{ required: true, message: '请输入作者!' }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="内容">
                {form.getFieldDecorator('text', {
                  initialValue: addData.modifyData.text ? addData.modifyData.text : "",
                  rules: [{ required: true, message: '请输入内容!' }],
                })(
                  <TextArea rows={6}/>
                )}
              </FormItem>
            </Form>
          </Modal>
        </Col>
      </Row>
    </Fragment>
  );
}

AddArticleModal.propTypes = {
  addData: PropTypes.object,
  dispatch: PropTypes.func,
  form: PropTypes.object
};

export default Form.create()(AddArticleModal)