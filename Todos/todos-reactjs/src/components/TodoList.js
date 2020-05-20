import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Item from "./Item";
import * as actionCreator from "../actions";

class TodoList extends React.Component {
  componentDidMount() {
    // this.props.getApiTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => (
          <Item todo={todo} key={index}>
            {todo.text}
          </Item>
        ))}
      </ul>
    );
  }
}

const filterTodos = (todos, status) => {
  switch (status) {
    case actionCreator.FIlTER.SHOW_COMPLETED:
      return todos.filter((e) => e.completed);
    case actionCreator.FIlTER.SHOW_ACTIVE:
      return todos.filter((e) => !e.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: filterTodos(state.todos, state.visibilityFilter),
});

// const mapDispatchToProps = (dispatch, ownPros) => ({
//   getApiTodos: (dispatch) =>
// });
export default connect(mapStateToProps, actionCreator.fetchTodos())(TodoList);
