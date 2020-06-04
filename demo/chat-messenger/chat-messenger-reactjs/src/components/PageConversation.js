import { Col } from "reactstrap";
import React from "react";
import {connect } from 'react-redux'
import * as action from '../actions/index'
import ConversationHeader from "./ConversationHeader";
import ConversationInput from "../containers/ConversationInput";
import ConversationContainer from "../containers/ConversationContainer";

class PageConversation extends React.Component {
  render() {
    return (
      <Col xl="9" lg="12" md="12" sm="12" className="PageConversation" onClick={()=> this.props.blurInput()}>
        <ConversationHeader />
        <ConversationContainer />
        <ConversationInput  />
      </Col>
    );
  }
}

export default connect(null, action)(PageConversation);

// export default PageConversation;
