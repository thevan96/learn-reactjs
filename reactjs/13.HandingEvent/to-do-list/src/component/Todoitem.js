import React from 'react';
import './Todoitem.css'

class Todoitem extends React.Component {

  render() {
    const { item, onClick } = this.props;
    const className = item.isComplete ? 'Todoitem Todoitem-complete' : 'Todoitem';
    return (
      <div className={className}
        onClick={onClick}>
        <p>{item.title}</p>
      </div>
    )
  }
}

export default Todoitem;