import { connect } from "react-redux";
import { switchUser } from "../actions";
import Contact from "../components/Contact";

const mapStateToProps = (state, ownProps) => ({
  active: state.userConversation === ownProps.contact.id,
  lastMessage: getMessage(state, ownProps),
});

const getMessage = (state, ownProps) => {
  const lastMessage = state.messages
    .filter((message) => message.idRoom === ownProps.contact.id)
    .slice(-1)[0];
  if (lastMessage)
    return lastMessage.content.split(" ").slice(0, 5).join(" ") + "...";
  return "";
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(switchUser(ownProps.contact.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
