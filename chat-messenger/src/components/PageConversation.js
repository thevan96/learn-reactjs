import React from 'react';

import { Row, Col, Input } from 'reactstrap';

import store from '../store';
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
      idConversation: store.getState().idConversation
    }
  }

  render() {
    const messages = messagesApi.getMessageByRoom(store.getState().idConversation)

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
        <Row style={{ minHeight: "530px" }}>
          <Col>
            {
              messages.map((e, index) => <Message key={index} message={e} />)
            }
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={{ flexWrap: "nowrap" }}>
              <Input placeholder='Type a message' style={{ marginRight: 8 }} />

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

export default PageConversation;