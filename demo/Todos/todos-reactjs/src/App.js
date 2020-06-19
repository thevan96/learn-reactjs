import React from 'react'

import TodoList from './components/TodoList'
import Footer from './components/Footer'
import store from './store';
import * as actionCreator from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => {
          e.preventDefault()

          const input = this.myRef.current;
          if (!input.value.trim()) return;
          store.dispatch(
            actionCreator.addToDo(input.value)
          )

          input.value = '';
          input.focus();
        }}>

          <input type="text" ref={this.myRef} autoFocus />
          {' '}
          <button type="submit">Add Task</button>

        </form>

        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;