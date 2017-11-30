import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import bryce from './assets/bryce.jpg';

class About extends Component{
  render(){
    return(
        <div>
          <Row className="spacer" />
          <Row className="about-container container">
            <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1}>
              <p className="bigboy" color="black" id="about-text">about</p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Image src={bryce} id="about-pic" alt="picture of bryce" className="center-block" responsive />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="about-text">
              <ul> 
                <li>
                  I live in Seattle, 
                </li>
                <li>
                  where I <a href="#writing" title="see some writing">write poems and short stories</a>,
                </li>
                <li>
                  & work as a <a href="#work" title="see my resume">hungry craftsperson</a>,
                </li>
                <li>
                  But you knew that already.
                </li>
              </ul>      
            </Col>
          </Row>
          <Row className="spacer" />

        </div>
    )
  }
}

export default About;
