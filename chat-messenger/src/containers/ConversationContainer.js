import { connect } from "react-redux";
import Conversation from "../components/Conversation";

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages.filter(message => message.idRoom === state.userConversation )
});

export default connect(mapStateToProps, null)(Conversation);
