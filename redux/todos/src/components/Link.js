import React from 'react';
import { connect } from 'react-redux';

import * as actionCreator from '../actions'

import './Link.css';

class Link extends React.Component {
  render() {
    const { filterTodos, active, children } = this.props

    if (active) {
      return <span>{children}</span>
    }


    return (
      <a href='#' onClick={filterTodos} className="Link">{children}</a>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterTodos: () => dispatch(actionCreator.visibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)