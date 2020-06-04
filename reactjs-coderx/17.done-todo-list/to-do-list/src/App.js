import React from 'react';
import './App.css';
import Todoitem from './component/Todoitem'
import add from './img/add.svg'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'learn js', isComplete: true },
        { title: 'learn html', isComplete: false },
        { title: 'learn css', isComplete: false }
      ]
    };
    this.handleKeyUpInput = this.handleKeyUpInput.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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

  handleKeyUpInput(e) {
    const value = e.target.value.trim();
    if (!value) {
      return;
    }

    if (e.keyCode === 13) {
      this.setState({
        todoItems: [
          {
            title: value,
            isComplete: false
          },
          ...this.state.todoItems
        ],
        newItem: ''
      });
      console.log(this.state.newItem)
    } else {
      this.setState({
        newItem: value
      });
    }
  }

  handleOnChange(e) {
    this.setState({
      newItem: e.target.value.trim()
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <img src={add} alt="" srcSet="" />
          <input type="text"
            placeholder="Add item"
            onKeyUp={this.handleKeyUpInput}
            onChange={this.handleOnChange}
            value={this.state.newItem}
          />
        </div>
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