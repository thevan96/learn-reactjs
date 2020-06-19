import React from 'react';
import './Todoitem.css'

class Todoitem extends React.Component {
  render() {
    const item = this.props.item;
    let className = item.isComplete ? 'Todoitem Todoitem-complete' : 'Todoitem';

    return (
      <div className={className}>
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}

export default Todoitem;