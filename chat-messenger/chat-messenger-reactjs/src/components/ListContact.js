import { Col, Row } from "reactstrap";

import React from "react";

import { getUsers } from "../API/UserAPI";

import { getRoomByUser } from "../API/RoomAPI";

import ContactContainer from "../containers/ContactContainer";
import Room from "../components/Room";

import { connect } from "react-redux";
import axios from "axios";

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
  constructor(props) {
    super(props);
    this.state = {
      listContact: [],
      listRoom: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.user;
    axios.all([getUsers(), getRoomByUser(id)]).then(
      axios.spread((obj1, obj2) => {
        this.setState({
          listContact: obj1.data.result,
          listRoom: obj2.data.result,
          isLoading: true,
        });
      })
    );
  }

  render() {
    if (this.state.isLoading) {
      const { filterText, focusInput, user } = this.props;
      const { listContact, listRoom } = this.state;

      if (focusInput) {
        const contacts = listContact.filter(
          (contact) =>
            contact.name.toLowerCase().indexOf(filterText.toLowerCase()) !==
              -1 && contact._id !== user.id
        );

        return (
          <Row>
            <Col style={scrollStyle}>
              <hr />
              <ul style={listStyle}>
                {contacts.map((contact, index) => (
                  <li key={index}>
                    <ContactContainer contact={contact} />
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        );
      }

      return (
        <Row>
          <Col style={scrollStyle}>
            <hr />
            <ul style={listStyle}>
              {listRoom.map((room, index) => (
                <li key={index}>
                  <Room room={room} />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      );
    }
    return <div>Loading ...</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  filterText: state.filterText,
  focusInput: state.focusInput,
  user: state.user,
});

export default connect(mapStateToProps)(ListContact);
