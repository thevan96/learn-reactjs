import React from 'react';

class Todoitem extends React.Component {
  render() {
    return (
      <div className="Todoitem">
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Todoitem;