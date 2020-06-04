import axios from "axios";

export const addToDo = (text) => async (dispatch) => {
  await axios
    .post("http://localhost:3002/todos", { text })
    .then((res) => {
      const { status } = res.data;

      if (status) {
        dispatch({
          type: "ADD_TODO",
          text,
        });
      } else {
        console.log("Error");
      }
    })
    .catch((err) => console.log(err));
};


export const toggleTodo = (id) => async (dispatch) => {
  await axios
    .patch("http://localhost:3002/todos/" + id)
    .then((res) => {
      const { status } = res.data;

      if (status) {
        dispatch({
          type: "TOGGLE_TODO",
          id,
        });
      } else {
        console.log("Error");
      }
    })
    .catch((err) => console.log(err));
};


export const visibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});


export const fetchApiTodos = () => async (dispatch) => {
  await axios
    .get("http://localhost:3002/todos")
    .then((res) => {
      const { todos } = res.data.data;

      dispatch({
        type: "FETCH_TODOS",
        todos,
      });
    })
    .catch((err) => console.log(err));
};

export const FIlTER = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
