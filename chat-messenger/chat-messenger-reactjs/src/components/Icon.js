import React from 'react';

class Icon extends React.Component {
  render () {
    const {img, size, margin} = this.props;
    return (
      <div className="Icon">
        <img src={`${img}`} alt='camera' style={{ width: size, height: size, margin: margin}} />
      </div>
    );
  }
}
export default Icon;
