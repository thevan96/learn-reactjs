import React from 'react';
import './App.css';
import Todoitem from './component/Todoitem'

class App extends React.Component {
  constructor() {
    super();
    this.onClickItem = this.onClickItem.bind(this);
    this.state = {
      todoItems: [
        { title: 'learn js', isComplete: true },
        { title: 'learn html', isComplete: false },
        { title: 'learn css', isComplete: false }
      ]
    }
  }

  onClickItem(item) {
    return e => {
      let { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      if (index !== -1) {
        this.setState(
          {
            todoItems:
              [
                ...todoItems.slice(0, index),
                {
                  ...item, isComplete: !item.isComplete
                },
                ...todoItems.slice(index + 1)
              ]
          }
        )
      }
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) =>
            <Todoitem key={index}
              item={item}
              onClick={this.onClickItem(item)}
            />
          )
        }
        {
          this.state.todoItems.length === 0 && "Nothing in here"
        }
      </div>
    )
  }
}

export default App;
