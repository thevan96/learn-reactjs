import { Col, Input, Row } from "reactstrap";
import React from "react";
import { connect } from "react-redux";
import { filterInput } from "../actions";
import messages from "../reducers/messages";

const style = {
  margin: "20px 20px",
  overflowY: "scroll",
};

const inputStyle = {
  textAlign: "center",
};

class ContactInput extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <Row>
        <Col style={{ style }}>
          <Input
            type="text"
            placeholder="Search Contact"
            style={inputStyle}
            onChange={(e) =>  onChange(e)}
          />
        </Col>
      </Row>
    );
  }
}



const mapDispatchToProps = (dispatch, ownProsp) => ({
  onChange: (e) => dispatch(filterInput(e.target.value.trim())),
});

export default connect(null, mapDispatchToProps)(ContactInput);
