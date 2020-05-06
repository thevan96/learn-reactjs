import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const {onClick} = this.props.item;
    const className = `Button Button-${this.props.item.name}`

    return (
      <button className={className} onClick={onClick}>
          {this.props.item.display}
      </button>
    )
  }
};

export default Button;
