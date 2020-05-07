import React from 'react';
import Display from './component/Display/Display';
import Button from './component/Button/Button';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      operator: null,
      result: "0",
      value: "0",
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  caculator(a, b, operator) {

    if (operator === '=') {
      return -1;
    }

    const calc = {
      '+': a + b,
      '-': a - b,
      '/': a / b,
      '*': a * b,
    }

    return calc[operator];
  }

  handleOnClick(e) {
    const button = e.target.value.trim();
    let { result, value, operator } = this.state;

    if (/[0-9]/.test(button)) {
      if (!operator) {
        this.setState({
          result: result === '0' ? '' + button : result + button
        })
      } else {
        this.setState({
          value: value === '0' ? '' + button : value + button
        })
      }
    } else {
      if (operator !== null) {
        const temp = this.caculator(parseInt(result), parseInt(value), operator);
        if (temp !== -1) {
          this.setState({
            result: this.caculator(parseInt(result), parseInt(value), operator),
            value: "0"
          })
        } else {
          this.setState({
            value: "0"
          })
        }
      }
      this.setState({
        operator: button
      })
    }

  }

  handleOnChange(e) {
    const button = e.target.value.trim();
    this.setState({
      // value: this.state.value + button
    })
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <Display
          result={result}
          onChange={this.handleOnChange}
        />
        <table className="Board">
          <tbody>
            <tr>
              <td>
                <Button label={7}
                  onClick={this.handleOnClick}
                />
              </td>
              <td>
                <Button label={8} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={9} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={"/"} onClick={this.handleOnClick} />
              </td>
            </tr>
            <tr>
              <td>
                <Button label={4} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={5} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={6} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={"*"} onClick={this.handleOnClick} />
              </td>
            </tr>
            <tr>
              <td>
                <Button label={1} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={2} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={3} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={"-"} onClick={this.handleOnClick} />
              </td>
            </tr>
            <tr>
              <td>
                <Button label={0} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={"."} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={"="} onClick={this.handleOnClick} />
              </td>
              <td>
                <Button label={"+"} onClick={this.handleOnClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
