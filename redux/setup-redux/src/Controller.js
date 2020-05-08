import React from 'react'
import { connect } from 'react-redux'

class Controller extends React.Component {
  clickDown() {
    this.props.dispatch({
      type: 'DOWN'
    })
  }

  clickUp() {
    this.props.dispatch({
      type: 'UP'
    })
  }

  render() {
    return (
      <div className="Controller">
        <button onClick={() => {
          this.clickUp()
        }} style={{ margin: 5 }}> + </button>
        <button onClick={() => {
          this.clickDown()
        }} style={{ margin: 5 }}> - </button>
      </div>
    )
  }
}

export default connect()(Controller)
