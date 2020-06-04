import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <button className="Button"
        onClick={onClick}
        value={label}>
        {label}
      </button>
    )
  }
};

export default Button;
