import React from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../actions'

class Item extends React.Component {
  render() {
    const { todo, toggleTodo } = this.props;

    return (
      <li
        onClick={() => toggleTodo(todo.id)}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: (id) => dispatch(actionCreator.toggleTodo(id))
})

export default connect(null, mapDispatchToProps)(Item);