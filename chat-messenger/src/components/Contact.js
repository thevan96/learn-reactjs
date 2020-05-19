import React from "react";

const contactStyle = {
  display: "flex",
  margin: "20px 0px",
  padding: 10,
  borderRadius: 10
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
    const { avatar, name } = this.props.contact;
    const { active, onClick, lastMessage } = this.props;

    return (
      <div
        style={
          active
            ? { ...contactStyle, backgroundColor: "#f5f2f9" }
            : contactStyle
        }
        onClick={onClick}
      >
        <div style={logoStyle}>
          <img src={avatar} alt="" style={imageStyle} />
        </div>
        <div>
          <h5>{name}</h5>
          <div>{lastMessage}</div>
        </div>
      </div>
    );
  }
}

export default Contact;
