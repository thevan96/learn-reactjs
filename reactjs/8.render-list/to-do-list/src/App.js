import React from 'react';
import './App.css';
import Todoitem from './component/Todoitem'

class App extends React.Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'learn js', isComplete: true },
      { title: 'learn html', isComplete: false },
      { title: 'learn css', isComplete: false }
    ]
  }

  render() {
    return (
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) =>
            <Todoitem key={index} item={item} />
          )
        }
        {
          this.todoItems.length === 0 && "Nothing in here"
        }
      </div>
    )
  }
}

export default App;