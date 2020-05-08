import React from 'react';
import './Display.css';

class Display extends React.Component {
  render() {
    const {result, onChange, width} = this.props;
    return (
      <div className="Display">
        <input type="text"
          name=""
          value={result}
          onChange={onChange}
          width={width}
        />
      </div>
    )
  }
}

export default Display;
