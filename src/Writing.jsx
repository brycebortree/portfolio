import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import cartographies from './assets/chapbooks/cartographies.pdf';
import godappears from './assets/chapbooks/godappears.pdf';
import momentaryflash from './assets/chapbooks/momentaryflash.pdf';

class Writing extends Component{
  render(){
    return(
      <div className="blue-border">
        <Row className="spacer" />
        <Row>
          <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1}>
            <h1 className="bigboy" id="writing">writing</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
            <p className="bold">Chapbooks</p>
          </Col>
        </Row>

        <Row>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
            <p>
              God Appears Only to Disapprove | poetry | November 2016
            | <a target="_blank" href={godappears}>
                PDF
              </a> 
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
            <p>
              cartographies | poetry | May 2013 | <a target="_blank" rel="noopener noreferrer" href={cartographies}>
                PDF
              </a> 
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
            <p>
              A Momentary Flash of Roger & Another Story | fiction | November 2012 | <a target="_blank" href={momentaryflash}>
                PDF 
              </a>
            </p>
          </Col> 
        </Row>

        <br />
        <br />

        <Row>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
            <p className="bold">Online Publications</p>
          </Col>
        </Row>
  

        <Row>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
            <p>
              <a href="http://plainchina.bennington.edu/pieces/ceelie/">
                Ceelie
              </a> 
              <span className="breather">at</span> 
              <a href="http://plainchina.bennington.edu"> 
                plain china
              </a>
            </p>

            <p>
              <a href="https://womeninourlives.wordpress.com/category/poetry/page/2/">
                winter
              </a> 
              <span className="breather">at</span>
              <a href="https://womeninourlives.wordpress.com/">
                Women In Our Lives
              </a>
            </p>
          </Col>
        </Row>
        <Row className="spacer" />

      </div>
    )
  }
}
      

export default Writing;