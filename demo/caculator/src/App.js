import React from 'react';
import Display from './component/Display/Display';
import Button from './component/Button/Button';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      input: '0',
      width: 30
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  calc () {
    const numbers = this.state.input.split(/\+|\-|\x|\÷/g);
    const operators = this.state.input.replace(/[0-9]|\./g, '').split('');

    let posDiv = operators.indexOf('÷');
    while (posDiv !== -1) {
      if (numbers[posDiv + 1] === '0') {
        this.setState({
          input: 'Error not div zero'
        });
        return;
      }
      numbers.splice(posDiv, 2, numbers[posDiv] / numbers[posDiv + 1]);
      operators.splice(posDiv, 1);
      posDiv = operators.indexOf('÷');
    }

    let postMul = operators.indexOf('x');
    while (postMul !== -1) {
      numbers.splice(postMul, 2, numbers[postMul] * numbers[postMul + 1]);
      operators.splice(postMul, 1);
      postMul = operators.indexOf('x');
    }

    let posAdd = operators.indexOf('+');
    while (posAdd !== -1) {
      numbers.splice(
        posAdd,
        2,
        parseFloat(numbers[posAdd]) + parseFloat(numbers[posAdd + 1])
      );
      operators.splice(posAdd, 1);
      posAdd = operators.indexOf('+');
    }

    let posSub = operators.indexOf('-');
    while (posSub !== -1) {
      numbers.splice(posSub, 2, numbers[posSub] - numbers[posSub + 1]);
      operators.splice(posSub, 1);
      posSub = operators.indexOf('-');
    }

    this.setState({
      input: '' + numbers[0]
    });
  }

  clear () {
    this.setState({
      input: '0'
    });
  }

  parternInsertNumber () {
    const partern = new RegExp(
      '([+-]*)(0.)([0-9]*)|([+-]*)([1-9]*)(.*)([0-9]+)([+-÷x]*)'
    );
    return partern.test(this.state.input);
  }

  parternInsertOperator () {
    const partern = new RegExp('[0-9]');
    return partern.test(this.state.input[this.state.input.length - 1]);
  }

  isNumber (item) {
    const partern = new RegExp('[0-9]');
    return partern.test(item);
  }

  isOperator (operator) {
    const partern = new RegExp('[+-÷x]');
    return partern.test(operator);
  }

  delete () {
    if (this.isNumber(this.state.input) && this.state.input.length > 1) {
      this.setState({
        input: this.state.input.substring(0, this.state.input.length - 1)
      });
    }
  }

  handleOnClick (e) {
    const { input } = this.state;
    const button = e.target.value.trim('');
    const lastItem = input[input.length - 1];

    const posDot = input.indexOf('.');
    console.log(posDot);


    if (button === 'C') {
      this.delete();
      return;
    }

    if (button === 'AC') {
      this.clear();
      return;
    }

    if (button === '=' && this.isNumber(lastItem)) {
      this.calc();
      return;
    }

    if (button === '.' && posDot === -1 && this.isNumber(lastItem)) {
      this.setState({
        input: input + button
      });
    }

    if (this.isNumber(button) && this.parternInsertNumber()) {
      this.setState({
        input: input === '0' ? button : input + button
      });
      return;
    }

    if (this.isOperator(button) && this.parternInsertOperator()) {
      this.setState({
        input: input + button
      });
    }
  }

  handleOnChange (e) {}

  render () {
    const { input, width } = this.state;
    return (
      <div className='App'>
        <Display result={input} onChange={this.handleOnChange} width={width} />
        <hr />
        <div className='Board'>
          <div className='Board-row'>
            <Button label='AC' onClick={this.handleOnClick} />
            <Button label='C' onClick={this.handleOnClick} />
          </div>
          <div className='Board-row'>
            <Button label='7' onClick={this.handleOnClick} />
            <Button label='8' onClick={this.handleOnClick} />
            <Button label='9' onClick={this.handleOnClick} />
            <Button label='+' onClick={this.handleOnClick} />
          </div>
          <div className='Board-row'>
            <Button label='4' onClick={this.handleOnClick} />
            <Button label='5' onClick={this.handleOnClick} />
            <Button label='6' onClick={this.handleOnClick} />
            <Button label='-' onClick={this.handleOnClick} />
          </div>
          <div className='Board-row'>
            <Button label='1' onClick={this.handleOnClick} />
            <Button label='2' onClick={this.handleOnClick} />
            <Button label='3' onClick={this.handleOnClick} />
            <Button label='÷' onClick={this.handleOnClick} />
          </div>
          <div className='Board-row'>
            <Button label='0' onClick={this.handleOnClick} />
            <Button label='.' onClick={this.handleOnClick} />
            <Button label='=' onClick={this.handleOnClick} />
            <Button label='x' onClick={this.handleOnClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
