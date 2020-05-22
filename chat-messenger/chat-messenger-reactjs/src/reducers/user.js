const myUser = {
  name: "",
  id: "",
  status: -2
};

const user = (state = myUser, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        name: action.user.name,
        id: action.user._id,
        status: action.status
      };
    default:
      return state;
  }
};

export default user;
