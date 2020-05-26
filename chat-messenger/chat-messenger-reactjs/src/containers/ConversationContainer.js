import { connect } from "react-redux";
import Conversation from "../components/Conversation";

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
  myUser: state.user
});

export default connect(mapStateToProps, null)(Conversation);
