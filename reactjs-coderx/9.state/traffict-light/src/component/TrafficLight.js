import React from 'react';
import ClassNames from 'classnames'
import './TrafficLight.css'
import { BLUE, YELLOW, RED } from '../Constant';


class TrafficLight extends React.Component {

  render() {
    const { currentColor } = this.props;

    return (
      <div className="TrafficLight">
        <div className={ClassNames('bulb', 'red', {
          active: currentColor === RED
        })}></div>
        <div className={ClassNames('bulb', 'blue', {
          active: currentColor === BLUE
        })}></div>
        <div className={ClassNames('bulb', 'yellow', {
          active: currentColor === YELLOW
        })}></div>
      </div>
    )
  }
};

export default TrafficLight;
