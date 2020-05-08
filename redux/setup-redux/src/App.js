import React from 'react';
import Controller from './Controller';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <span
        >
          {this.props.value}
        </span>

        <hr />

        <Controller />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  console.log(state.value)
  return {
    value: state.value,
  }
}

export default connect(mapStateToProps)(App)
// function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)