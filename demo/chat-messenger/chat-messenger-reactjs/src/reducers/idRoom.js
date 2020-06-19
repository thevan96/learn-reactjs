const idRoom = (state = '', action) => {
  switch (action.type) {
    case "SET_IDROOM":
      return action.idRoom
    default:
      return state;
  }
};

export default idRoom;
