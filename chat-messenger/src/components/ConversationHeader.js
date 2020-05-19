import { Row, Col } from "reactstrap";
import React from "react";

import Button from "./Button";
import IMAGES from "../constans/images";

const colStyle = {
  display: "flex",
  justifyContent: "flex-end",
  margin: '10px 0px'
};

class ConversationHeader extends React.Component {
  render() {
    return (
      <Row >
        <Col xl="6" lg="12" md="12" sm="12" style={colStyle}>
          <h4>
            <b>Conversation Title</b>
          </h4>
        </Col>
        <Col xl="6" lg="12" md="12" sm="12" style={colStyle}>
          <Button img={IMAGES.VIDEO} width={20} height={20} margin={10} />
          <Button img={IMAGES.CAMERA} width={20} height={20} margin={10} />
          <Button img={IMAGES.INFO} width={20} height={20} margin={10} />
        </Col>
      </Row>
    );
  }
}
export default ConversationHeader;
