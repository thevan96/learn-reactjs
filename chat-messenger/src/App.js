import React from 'react';
import { Row, Container } from 'reactstrap';

import PageContact from './components/PageContact';
import PageConversation from './components/PageConversation';

export default class App extends React.Component {
  render() {
    return (
      <Container fluid className='App'>
        <Row>
          <PageContact />
          <PageConversation />
        </Row>
      </Container>
    );
  }
}

