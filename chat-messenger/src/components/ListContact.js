import { Col, Row } from "reactstrap";

import React from "react";

import ContactContainer from "../containers/ContactContainer";

const scrollStyle = {
  overflowY: "scroll",
  height: 520,
  margin: "20px 0px",
};

const listStyle = {
  listStyle: "none",
  paddingLeft: 5,
};

class ListContact extends React.Component {
  render() {
    const { listContact } = this.props;

    return (
      <Row>
        <Col style={scrollStyle}>
          <ul style={listStyle}>
            {listContact.map((contact, index) => (
              <li key={index}>
                <ContactContainer contact={contact} />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    );
  }
}

export default ListContact;
