const defaultState = 'SHOW_ALL';

const visibilityFilter = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state;
  }
}

export default visibilityFilter;