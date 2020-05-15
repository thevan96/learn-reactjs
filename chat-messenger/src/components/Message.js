import React from 'react';
import { Row, Col } from 'reactstrap';
import { DEFAULT_USER } from '../actions';

class Message extends React.Component {
  render() {
    const { idSender, content } = this.props.message;

    if (idSender === DEFAULT_USER.id) {
      return (
        <Row >
          <Col xs={{ offset: 3 }}></Col>
          <Col>
            <div style={{ backgroundColor: "#f5f2f8", borderRadius: 15, marginBottom: 20, padding: 10 }}>
              {content}
            </div>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>
            <div style={{ backgroundColor: '#1300fe', borderRadius: 15, marginBottom: 20, padding: 10 }}>
              {content}
            </div>
          </Col>
          <Col xs={{ offset: 3 }}></Col>
        </Row>
      )
    }
  }

}

export default Message;