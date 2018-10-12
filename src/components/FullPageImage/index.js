import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Row, Col } from 'antd'
import './index.less'

class FullPageImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: props.url,
      visible: props.visible
    }    
  }

  onCancel () {
    this.setState({
      visible: false,
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({...nextProps});
  }

  render () {
    const { visible, url } = this.state
    const modalProps = {
      visible: visible,
      footer: null,
      width: 700,
      wrapClassName: 'full-page-image',
      onCancel: ()=>this.onCancel()
    }

    return (
      <Row>
        <Col span={24}>
          <Modal {...modalProps}>
            <img alt={url} src={url}/>
          </Modal>
        </Col>
      </Row>     
    )
  }
}

FullPageImage.propTypes = {
  visible: PropTypes.bool,
  url: PropTypes.string,
}

export default FullPageImage
