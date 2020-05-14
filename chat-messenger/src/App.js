import { Row, Col, Container, Input } from 'reactstrap';
import React from 'react';

import { styleIcon } from './style';

import add from './images/add.svg';
import camera from './images/camera.svg';
import images from './images/images.svg';
import infor from './images/info.svg';
import laugh from './images/laugh.svg';
import micro from './images/micro.svg';
import phone from './images/phone.svg';
import setting from './images/setting.svg';
import video from './images/video.svg';

class App extends React.Component {
  render() {
    return (
      <Container fluid className='App'>
        <Row>
          <Col xs='4' className='PageContact'>
            <Row>
              <Col
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: '20px 5px'
                }}
              >
                <a href='#'>
                  <img src={setting} alt='setting' style={styleIcon} />
                </a>
                <b>Messenger</b>
                <a href='#'>
                  <img src={add} alt='add' style={styleIcon} />
                </a>
              </Col>
            </Row>
            <Row>
              <Col style={{ margin: '20px 5px' }}>
                <Input
                  placeholder='Search Messages'
                  style={{ textAlign: 'center' }}
                />
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
                {/* For loop contact */}
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: '10px 0px'
                    }}
                  >
                    <div style={{ marginRight: 5 }}>
                      <img
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        alt='setting'
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                      />
                    </div>
                    <div>
                      <b>Your name</b>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: '10px 0px'
                    }}
                  >
                    <div style={{ marginRight: 5 }}>
                      <img
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        alt='setting'
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                      />
                    </div>
                    <div>
                      <b>Your name</b>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: '10px 0px'
                    }}
                  >
                    <div style={{ marginRight: 5 }}>
                      <img
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        alt='setting'
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                      />
                    </div>
                    <div>
                      <b>Your name</b>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: '10px 0px'
                    }}
                  >
                    <div style={{ marginRight: 5 }}>
                      <img
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        alt='setting'
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                      />
                    </div>
                    <div>
                      <b>Your name</b>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: '10px 0px'
                    }}
                  >
                    <div style={{ marginRight: 5 }}>
                      <img
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        alt='setting'
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                      />
                    </div>
                    <div>
                      <b>Your name</b>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: '10px 0px'
                    }}
                  >
                    <div style={{ marginRight: 5 }}>
                      <img
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        alt='setting'
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                      />
                    </div>
                    <div>
                      <b>Your name</b>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: '10px 0px'
                    }}
                  >
                    <div style={{ marginRight: 5 }}>
                      <img
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        alt='setting'
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                      />
                    </div>
                    <div>
                      <b>Your name</b>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: '10px 0px'
                    }}
                  >
                    <div style={{ marginRight: 5 }}>
                      <img
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        alt='setting'
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                      />
                    </div>
                    <div>
                      <b>Your name</b>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: '10px 0px'
                    }}
                  >
                    <div style={{ marginRight: 5 }}>
                      <img
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        alt='setting'
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                      />
                    </div>
                    <div>
                      <b>Your name</b>
                      <p>Lorem Ipsum is simply dummy...</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sx='8' className='PageConversation'>
            <Row>
              <Col>
                <Row>
                  <Col style={{ textAlign: "center", margin: '20px 5px' }}>
                    <b>Conversation Title</b>
                    <div style={{ display: "inline", marginRight: 0, position: "absolute", right: 20 }}>
                      <a style={{ marginRight: 15 }}>
                        <img src={phone} alt='phone' style={styleIcon} />
                      </a>
                      <a style={{ marginRight: 15 }}>
                        <img src={video} alt='video' style={styleIcon} />
                      </a>
                      <a style={{ marginRight: 15 }}>
                        <img src={infor} alt='infor' style={styleIcon} />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ minHeight: "100%" }}>
              <Col>
                {/* Forloop chat by me */}
                <Row>
                  <Col>
                    <div style={{ backgroundColor: '#1300fe', borderRadius: 15, marginBottom: 20, padding: 10 }}>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us</div>
                  </Col>
                  <Col xs={{ offset: 3 }}></Col>
                </Row>

                <Row >
                  <Col xs={{ offset: 3 }}></Col>
                  <Col>
                    <div style={{ backgroundColor: "#f5f2f8", borderRadius: 15, marginBottom: 20, padding: 10 }}>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us</div>
                  </Col>
                </Row>
                <Row >
                  <Col xs={{ offset: 3 }}></Col>
                  <Col>
                    <div style={{ backgroundColor: "#f5f2f8", borderRadius: 15, marginBottom: 20, padding: 10 }}>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us</div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div style={{ backgroundColor: '#1300fe', borderRadius: 15, marginBottom: 20, padding: 10 }}>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us</div>
                  </Col>
                  <Col xs={{ offset: 3 }}></Col>
                </Row>

                <Row>
                  <Col>
                    <div style={{ backgroundColor: '#1300fe', borderRadius: 15, marginBottom: 20, padding: 10 }}>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us</div>
                  </Col>
                  <Col xs={{ offset: 3 }}></Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row style={{ flexWrap: "nowrap" }}>
                  <Input placeholder='Type a message' style={{ marginRight: 8 }} />
                  <a style={{ marginRight: 8 }}>
                    <img src={camera} alt='camera' style={styleIcon} />
                  </a>
                  <a style={{ marginRight: 8 }}>
                    <img src={images} alt='images' style={styleIcon} />
                  </a>
                  <a style={{ marginRight: 8 }}>
                    <img src={micro} alt='micro' style={styleIcon} />
                  </a>
                  <a style={{ marginRight: 8 }}>
                    <img src={laugh} alt='laugh' style={styleIcon} />
                  </a>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
