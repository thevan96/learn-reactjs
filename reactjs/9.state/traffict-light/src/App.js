import React from 'react';
import TrafficLight from './component/TrafficLight';
import { RED, BLUE, YELLOW } from './Constant';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return BLUE;

      case BLUE:
        return YELLOW;

      case YELLOW:
        return RED;

      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return (
      <div className="App">
        <TrafficLight currentColor={currentColor} />
      </div>
    )
  }
};

export default App;