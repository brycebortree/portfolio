import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import resume from './assets/Bortree2017.pdf'
import microsoft from './assets/microsoft.png';
import iunu from './assets/iunu.png';
import outreach from './assets/outreach.png';

class Work extends Component {
  render(){
    return(
       <div className="darkBg blue-border">
         <Row className="spacer" />
         <Row>
            <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1}>
              <h1 className="bigboy" id="work">work</h1>
            </Col>
          </Row>

         <Row>
          <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1}>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Image src={outreach} className="work-image center-block" alt="Outreach" responsive />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Image src={microsoft} className="work-image center-block" alt="MSFT" responsive />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Image src={iunu} className="work-image center-block" alt="IUNU" responsive />
            </Col>
           </Col>
          </Row>

          <Row className="spacer" />
          <Row className="spacer" />


           <Row>
            <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
              <p className="bold">Software Engineer at Outreach, 2017</p>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <p>• Build new features in React JS for single page web app using ES6, Babel, and Webpack. </p>
                  <p>• Develop backend functionality in Ruby on Rails.</p>
                </Col>
              </Row>
            </Col>
          </Row>

           <Row>
            <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
              <p className="bold">LEAP Apprentice at Microsoft, 2017</p>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <p>• Five weeks in classroom being mentored by senior Microsoft engineers. </p>
                  <p>• Covered topics including maintainable coding techniques, test driven development, object oriented programming, and learning a new codebase.</p>
                </Col>
              </Row>
            </Col>
          </Row>


          <Row>
            <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
              <p className="bold">Web Developer at IUNU LLC, 2016-2017</p>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <p>• Delivered client facing React.js web application using Mongo, Redux, HTML, CSS, and JavaScript. </p>
                  <p>• Redesigned a second iteration of the same tool over two weeks incorporating a Redux feature for the app. </p>
                </Col>
              </Row>
            </Col>
          </Row>
         <Row className="spacer" />

        <Row className="resumebuttons center">
          <a target="_blank" href={resume} className="btn btn-green"> View Resume</a>
        </Row>
        <Row className="spacer" />

      </div>


    )
  }
}
     


export default Work;