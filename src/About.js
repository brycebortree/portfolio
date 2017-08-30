import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import bryce from './assets/bryce.jpg';

class About extends Component{
  render(){
    return(
        <div className="blue-border">
          <Row className="about-container container">
            <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1}>
              <h1 className="bigboy" color="black" id="about-text">hello there</h1>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Image src={bryce} id="about-pic" alt="picture of bryce" className="center-block" responsive />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="about-text">
              <h1 className="center">
                bryce bortree.
              </h1>
              <ul className="emphatic"> 
                <li>
                  I live in Seattle, 
                </li>
                <li>
                  where I <a href="#writing" title="see some writing">write poems and short stories</a>,
                </li>
                <li>
                  & work as a <a href="#work" title="see my resume">hungry craftsperson</a>,
                </li>
              </ul>      
            </Col>
          </Row>
        </div>
    )
  }
}

export default About;
