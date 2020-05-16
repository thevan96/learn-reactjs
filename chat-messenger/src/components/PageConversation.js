import React from 'react';

import { Row, Col, Input, Form } from 'reactstrap';
import { connect } from 'react-redux';

import Message from './Message';
import { messagesApi } from '../api';
import { styleIcon } from '../style';



import camera from '../images/camera.svg';
import images from '../images/images.svg';
import infor from '../images/info.svg';
import laugh from '../images/laugh.svg';
import micro from '../images/micro.svg';
import phone from '../images/phone.svg';
import video from '../images/video.svg';
import { Link } from 'react-router-dom';


class PageConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  handleOnChange = e => {
    const text = e.target.value.trim()
    this.setState({
      message: text
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    console.log(this.state.message);
    this.setState({
      messages: ''
    })
    console.log(this.state.message);
  }


  render() {
    const { idConversation } = this.props;
    const messages = messagesApi.getMessageByRoom(idConversation)

    return (
      <Col sx='8' className='PageConversation'>
        <Row>
          <Col>
            <Row>
              <Col style={{ textAlign: "center", margin: '20px 5px' }}>
                <b>Conversation Title</b>
                <div style={{ display: "inline", marginRight: 0, position: "absolute", right: 20 }}>
                  <Link to='/' style={{ marginRight: 15 }}>
                    <img src={phone} alt='phone' style={styleIcon} />
                  </Link>
                  <Link to='/' style={{ marginRight: 15 }}>
                    <img src={video} alt='phone' style={styleIcon} />
                  </Link>
                  <Link to='/' style={{ marginRight: 15 }}>
                    <img src={infor} alt='phone' style={styleIcon} />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ minHeight: "600px" }}>
          <Col>
            {
              messages.map((e, index) => <Message key={index} message={e} />)
            }
          </Col>
        </Row>

        <Row>
          <Col>
            <Row style={{ flexWrap: "nowrap" }}>
              <Form onSubmit={this.handleOnSubmit} >
                <Input placeholder='Type a message'
                  style={{ marginRight: 8 }}
                  value={this.state.message}
                  onChange={this.handleOnChange} />
              </Form>

              <Link to='/' style={{ marginRight: 8 }} >
                <img src={camera} alt='camera' style={styleIcon} />
              </Link>

              <Link to='/' style={{ marginRight: 8 }} >
                <img src={images} alt='camera' style={styleIcon} />
              </Link>

              <Link to='/' style={{ marginRight: 8 }} >
                <img src={micro} alt='camera' style={styleIcon} />
              </Link>

              <Link to='/' style={{ marginRight: 8 }} >
                <img src={laugh} alt='camera' style={styleIcon} />
              </Link>
            </Row>
          </Col>
        </Row>
      </Col>
    )
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    idConversation: state.idConversation
  }
)

export default connect(mapStateToProps, null)(PageConversation);