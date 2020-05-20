import axios from "axios";

let id = 0;
export const addToDo = (text) => ({
  type: "ADD_TODO",
  id: id++,
  text,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const visibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const fetchTodos = () => {
//   let data = await getTodoApi("http://localhost:3002/todos");
//   console.log(data);
  return {
    type: "FETCH_TODOS",
    todos: getTodoApi("http://localhost:3002/todos")
  }
};

export const FIlTER = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

const getTodoApi =  url => {
  return axios
    .get(url)
    .then((rs) => {
      return rs.data;
    })
    .catch((err) => {
      return null;
    });
};
