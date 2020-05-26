import React from "react";
import { connect } from "react-redux";
import { checkIsRoom } from "../actions";

const contactStyle = {
  display: "flex",
  margin: "20px 0px",
  padding: 10,
  borderRadius: 10,
};

const imageStyle = {
  width: 60,
  height: 60,
};

const logoStyle = {
  border: "solid 1px black",
  width: 61,
  height: 61,
  borderRadius: 30,
  margin: "5px 5px",
};

class Contact extends React.Component {
  render() {
    const { myUser, contact, userConversation } = this.props;
    const { avatar, name, _id } = contact;

    return (
      <div
        style={
            _id === userConversation
              ? { ...contactStyle, backgroundColor: "#f5f2f9" }
              : contactStyle
          }
        onClick={() => this.props.checkIsRoom(myUser.id, _id)}
      >
        <div style={logoStyle}>
          <img src={avatar} alt="" style={imageStyle} />
        </div>
        <div>
          <h5>{name}</h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myUser: state.user,
  userConversation: state.userConversation
});

export default connect(mapStateToProps, { checkIsRoom })(Contact);
