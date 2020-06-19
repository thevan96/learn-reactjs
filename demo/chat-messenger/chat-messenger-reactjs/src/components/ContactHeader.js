import { Row } from 'reactstrap';
import React from 'react';

import Button from './Button';
import IMAGES from '../constans/images';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 5px'
};

class ContactHeader extends React.Component {
  render () {
    return (
      <Row style={style}>
        <Button img={IMAGES.SETTING} width={20} height={20} />
        <h4>
          <b>Messenger</b>
        </h4>
        <Button img={IMAGES.ADD} width={20} height={20}/>
      </Row>
    );
  }
}
export default ContactHeader;
