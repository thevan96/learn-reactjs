import React from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import * as actionCreator from '../actions'

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {
          todos.map((todo, index) =>
            <Item todo={todo} key={index}>{todo.text}</Item>
          )
        }
      </ul>
    )
  }
}

const filterTodos = (todos, status) => {
  switch (status) {
    case actionCreator.FIlTER.SHOW_COMPLETED:
      return todos.filter(e => e.completed)
    case actionCreator.FIlTER.SHOW_ACTIVE:
      return todos.filter(e => !e.completed)
    default:
      return todos;
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: filterTodos(state.todos, state.visibilityFilter)
})

export default connect(mapStateToProps, null)(TodoList)