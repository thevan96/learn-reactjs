import { Col } from "reactstrap";
import React from "react";

import ConversationHeader from "./ConversationHeader";
import ConversationInput from "../containers/ConversationInputContainer";
import ConversationContainer from "../containers/ConversationContainer";

class PageConversation extends React.Component {
  render() {
    return (
      <Col xl="8" lg="12" md="12" sm="12" className="PageConversation">
        <ConversationHeader />
        <ConversationContainer />
        <ConversationInput />
      </Col>
    );
  }
}

export default PageConversation;
