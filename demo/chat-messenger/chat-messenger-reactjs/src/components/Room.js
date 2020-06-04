import React from "react";
import { connect } from "react-redux";

import { getUserById } from "../API/UserAPI";

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

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userConversation: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    const { room, myUser } = this.props;
    const idUser = room.member.find((e) => e !== myUser.id);
    getUserById(idUser).then((rs) => {
      this.setState({
        userConversation: rs.data.result,
        isLoaded: true,
      });
    });
  }

  render() {
    if (this.state.isLoaded) {
      const { userConversation } = this.state;
      const { myUser } = this.props;
      return (
        <div
          style={
            userConversation._id === this.props.userConversation
              ? { ...contactStyle, backgroundColor: "#f5f2f9" }
              : contactStyle
          }
          onClick={() =>
            this.props.checkIsRoom(myUser.id, userConversation._id)
          }
        >
          <div style={logoStyle}>
            <img src={userConversation.avatar} alt="" style={imageStyle} />
          </div>
          <div>
            <h5>{userConversation.name}</h5>
            <div>
              {
                "There are many variations of passages of Lorem Ipsum available, but the majorit..."
              }
            </div>
          </div>
        </div>
      );
    }
    return <div>Loading ....</div>;
  }
}
const mapStateToProps = (state, ownProps) => ({
  myUser: state.user,
  userConversation: state.userConversation,
});

export default connect(mapStateToProps, { checkIsRoom })(Room);
