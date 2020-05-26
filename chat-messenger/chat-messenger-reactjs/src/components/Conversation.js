import React from "react";
import { Col, Row } from "reactstrap";

const rowStyle = {
  display: "flex",
};

const scrollStyle = {
  overflowY: "scroll",
  height: 540,
};

const messageStyle = {
  padding: 10,
  maxWidth: 500,
  margin: "10px 20px",
  borderRadius: 20,
  backgroundColor: "#f5f2f9",
};

class Conversation extends React.Component {
  render() {
    const { messages, myUser } = this.props;

    return (
      <Row>
        <Col style={scrollStyle}>
          {messages.map((e, index) => (
            <Row
              key={index}
              style={
                e.idSender === myUser.id
                  ? rowStyle
                  : { ...rowStyle, justifyContent: "flex-end" }
              }
            >
              <div
                key={index}
                style={
                  e.idSender === myUser.id
                    ? { ...messageStyle, backgroundColor: "#1900ff" }
                    : messageStyle
                }
              >
                {e.content}
              </div>
            </Row>
          ))}
        </Col>
      </Row>
    );
  }
}

export default Conversation;