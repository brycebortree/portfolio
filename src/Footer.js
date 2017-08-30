import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class Footer extends Component{
  render(){
    return(
      <div className="footer center blue-border">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
          <p> related ephemera: </p>
            <a href="http://www.github.com/brytree"><i className="fa fa-github"></i></a>
            <a href="http://www.linkedin.com/in/brycebortree"><i className="fa fa-linkedin"></i></a>
            <a href="mailto:brycebortree@gmail.com"><i className="fa fa-envelope"></i></a>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer;