import React from 'react';
import Link from './Link';

import * as actionCreator from '../actions'

class Footer extends React.Component {

  render() {
    return (
      <div>
        Show:
        {"  "}
        <Link filter={actionCreator.FIlTER.SHOW_ALL} >All</Link>

        {" . "}
        <Link filter={actionCreator.FIlTER.SHOW_ACTIVE} >Active</Link>

        {" . "}
        <Link filter={actionCreator.FIlTER.SHOW_COMPLETED}>Complete</Link>
      </div>

    )
  }
}
export default Footer;