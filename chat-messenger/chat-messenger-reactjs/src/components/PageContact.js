import { Col } from 'reactstrap';
import React from 'react';

import ContactHeader from './ContactHeader';
import ContactInput from '../containers/ContactInput';
import ListContactContainer from '../containers/ListContactContainer';

class PageContact extends React.Component {
  render () {
    return (
      <Col xl="4" lg="12" md="12" sm="12" className='PageContact'>
        <ContactHeader />
        <ContactInput />
        <ListContactContainer />
      </Col>
    );
  }
}

export default PageContact;
