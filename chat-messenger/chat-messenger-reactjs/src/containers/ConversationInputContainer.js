import React from "react";
import { Row, Input, Form, FormGroup, Col } from "reactstrap";
import { connect } from "react-redux";

import Button from "../components/Button";
import IMAGES from "../constans/images";
import { sendMessage } from "../actions";

const inputStyle = {
  textAlign: "center",
};

const rowStyle = {
  padding: 10,
};

const listButtonStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "0px 20px",
};

class ConversationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    const { handleSubmit, userConversation } = this.props;
    return (
      <Row style={rowStyle}>
        <Col xl="9" lg="12" md="12" sm="12">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(this.state.value, userConversation);
              this.setState({
                value: "",
              });
            }}
          >
            <FormGroup>
              <Input
                type="text"
                placeholder="Type a message"
                style={inputStyle}
                value={this.state.value}
                onChange={(e) => {
                  this.setState({
                    value: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col style={listButtonStyle} xl="3" lg="12" md="12" sm="12">
          <Button img={IMAGES.CAMERA} width={20} height={20} margin={15} />
          <Button img={IMAGES.IMAGE} width={20} height={18} margin={15} />
          <Button img={IMAGES.MICRO} width={15} height={20} margin={15} />
          <Button img={IMAGES.LAUGH} width={18} height={19} margin={15} />
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = (state) => ({
  userConversation: state.userConversation,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (value, idRoom) => dispatch(sendMessage(value, idRoom)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationInput);
