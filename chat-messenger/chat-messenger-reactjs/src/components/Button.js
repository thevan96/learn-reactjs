import React from "react";

const style = (img, width, height, margin) => ({
  backgroundImage: `url(${img})`,
  width: width,
  height: height,
  outline: "none",
  margin: margin,
  border: "none",
  backgroundColor: "white",
});

class Button extends React.Component {
  render() {
    const { img, width, height, margin = 0 } = this.props;
    return (
      <div className="Button">
        <button style={style(img, width, height, margin)} />
      </div>
    );
  }
}
export default Button;
