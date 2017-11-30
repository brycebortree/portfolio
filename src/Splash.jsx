import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Splash extends Component{
  render(){
    return(
      <div className="darkBg">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Row className="spacer" />
             <p className="emphatic center">bryce bortree</p>
            <Row className="spacer" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Splash;
