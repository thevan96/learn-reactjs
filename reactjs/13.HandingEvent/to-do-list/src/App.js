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

  onClickItem(index) {
    return e => {
      let { todoItems } = this.state;
      todoItems[index].isComplete = !todoItems[index].isComplete;
      this.setState({
        'todoItems': todoItems
      })
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) =>
            <Todoitem key={index}
              item={item}
              onClick={this.onClickItem(index)}
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