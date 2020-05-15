import React from 'react';
import { Row, Form, FormGroup } from 'reactstrap';
import { Col, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import add from '../images/add.svg';
import setting from '../images/setting.svg';
import { styleIcon } from '../style';

import { contactApi } from '../api';
import { switchUser } from '../actions';

import store from '../store';

const contactStyle = {
  display: 'flex',
  flexDirection: 'row',
  margin: '10px 0px'
}

const colStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '20px 5px'
}


class PageContact extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      contacts: contactApi.all()
    }
  }

  liveSearch(text) {
    const contacts = contactApi.all();
    if (text === '') return contacts
    return contacts.filter(e => e.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
  }

  changeHandler = event => {
    const inputValue = event.target.value;
    const contacts = this.liveSearch(inputValue)

    this.setState({
      inputValue: inputValue,
      contacts: contacts
    })
  }

  render() {
    const { inputValue, contacts } = this.state;

    return (
      <Col xs='4' className='PageContact'>
        <Row>
          <Col style={colStyle} >
            <Link to='/'>
              <img src={setting} alt='setting' style={styleIcon} />
            </Link>
            <b>Messenger</b>

            <Link to='/'>
              <img src={add} alt='add' style={styleIcon} />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col style={{ margin: '20px 5px' }}>
            <Form >
              <FormGroup>
                <Input
                  type="text"
                  value={inputValue}
                  onChange={this.changeHandler}
                  placeholder='Search Messages'
                  style={{ textAlign: 'center' }}
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row
          style={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            maxHeight: 500
          }}
        >
          <Col>
            {
              contacts.map((e, index) => (
                <Link key={index} to={'/'} onClick={() => {
                  store.dispatch(switchUser(e.id))
                  console.log(store.getState());
                }}>
                  <Row >
                    <Col
                      style={contactStyle}
                    >

                      <div style={{ marginRight: 5 }}>
                        <img
                          src={e.avatar}
                          alt='setting'
                          style={{ width: 60, height: 60, borderRadius: 30 }}
                        />
                      </div>
                      <div>
                        <b>{e.name}</b>
                        <p>Lorem Ipsum is simply dummy...</p>
                      </div>
                    </Col>
                  </Row>
                </Link>
              ))
            }
          </Col>
        </Row>
      </Col>
    )
  }
}

export default PageContact;