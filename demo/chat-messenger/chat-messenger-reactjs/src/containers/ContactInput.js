import { Col, Input, Row } from "reactstrap";
import React from "react";
import { connect } from "react-redux";
import { filterInput, focusInput } from "../actions";

const style = {
  margin: "20px 20px",
  overflowY: "scroll",
};

const inputStyle = {
  textAlign: "center",
};

class ContactInput extends React.Component {
  render() {
    const { onFocus, onBlur, onChange } = this.props;

    return (
      <Row>
        <Col style={{ style }}>
          <Input
            type="text"
            placeholder="Search Contact"
            style={inputStyle}
            onFocus={(e) => onFocus(e)}
            onClick={(e) => onBlur(e)}
            onChange={(e) => onChange(e)}
          />
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProsp) => ({
  onFocus: (e) => dispatch(focusInput()),
  onBlur: (e) => {
    dispatch(focusInput());
  },
  onChange: (e) => dispatch(filterInput(e.target.value.trim())),
});

export default connect(null, mapDispatchToProps)(ContactInput);
