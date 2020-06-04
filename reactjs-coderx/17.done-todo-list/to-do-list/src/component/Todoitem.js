import React from 'react';
import classNames from 'classnames'
import './Todoitem.css';
import check from '../img/check.svg'
import checkComplete from '../img/checkComplete.svg';

class Todoitem extends React.Component {

  render() {
    const { item, onClick } = this.props;
    const isCheck = item.isComplete ? checkComplete : check;

    return (
      <div className={classNames('Todoitem', { 'Todoitem-complete': item.isComplete })}
        onClick={onClick}>
        <img src={isCheck} alt="" srcSet="" />
        <p>{item.title}</p>
      </div>
    )
  }
}

export default Todoitem; s