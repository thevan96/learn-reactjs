const myUser = {
  name: "",
  id: "",
  status: -2
};

if(localStorage.length !== 0) {
  myUser.name = localStorage.getItem('name');
  myUser.id = localStorage.getItem('id');
  myUser.status = localStorage.getItem('status') === 'true';
}

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
