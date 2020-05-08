const { createStore } = require('redux');

const defautlState = {
  value: 0
};

// Function up - down

const reducer = (state = defautlState, action) => {
  if (action.type === 'UP') {
    return {
      value: state.value + 1
    }
  }

  if (action.type === 'DOWN') {
    return {
      value: state.value - 1
    }
  }
  return state;
}

const store = createStore(reducer);


// Lay gia tri state
const  myState = store.getState();
console.log(myState)

store.dispatch({
  type: 'UP'
})


console.log(store.getState())


