import React from 'react';
import Display from './component/Display/Display';
import Button from './component/Button/Button';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      value1: null,
      operator: null,
      value2: null,
    }
    this.clearSettingAC = this.clearSettingAC.bind(this);
  }

  clearSettingAC() {
    console.log('Run AC');
    this.setState({
      result: 0
    });
  }

  getValue(e) {
    console.log('Running');
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <Display />
        <div className="Board">

        </div>
      </div>
    )
  }
}
export default App;
