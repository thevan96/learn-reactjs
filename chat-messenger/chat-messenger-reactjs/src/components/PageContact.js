import { Col } from 'reactstrap';
import React from 'react';

import ContactHeader from './ContactHeader';
import ContactInput from '../containers/ContactInput';
import ListContact from '../components/ListContact';

class PageContact extends React.Component {
  render () {
    return (
      <Col xl="3" lg="12" md="12" sm="12" className='PageContact'>
        <ContactHeader />
        <ContactInput />
        <ListContact />
      </Col>
    );
  }
}

export default PageContact;
