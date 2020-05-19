const filterTextDefault = "";

const filterText = (state = filterTextDefault, action) => {
  switch (action.type) {
    case "FILTER_INPUT":
      return action.filterText;
    default:
      return state;
  }
};

export default filterText;