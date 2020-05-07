import React from 'react';
import './Display.css';

class Display extends React.Component {
  render() {
    const {result, onChange} = this.props;
    return (
      <div className="Display">
        <input type="text"
          name=""
          value={result}
          onChange={onChange}
        />
      </div>
    )
  }
}

export default Display;
