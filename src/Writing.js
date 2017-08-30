import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class Writing extends Component{
  render(){
    return(
      <div className="darkBg blue-border">
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
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <p>
              God Appears Only to Disapprove | poetry | November 2016
            </p>
            <p>
              <a target="_blank" href="/assets/chapbooks/godappears.pdf">
                PDF
              </a> | 
              <a target="_blank" href="/godappears">
                 story view
              </a> 
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <p>
              cartographies | poetry | May 2013
            </p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="/assets/chapbooks/cartographies.pdf">
                PDF
              </a> 
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <p>
              A Momentary Flash of Roger & Another Story | fiction | November 2012
            </p>
            <p >
              <a target="_blank" href="/assets/chapbooks/momentaryflash.pdf">
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
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2} lg={8} lgOffset={2}>
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

      </div>
    )
  }
}
      

export default Writing;