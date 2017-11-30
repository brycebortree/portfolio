import React, { Component } from 'react';

import About from './About';
import Footer from './Footer';
import Splash from './Splash';
import Work from './Work';
import Writing from './Writing';


import { Row, Col } from 'react-bootstrap';

class App extends Component {
  render(){
    return(
      <Row>
        <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={8} lgOffset={2} >
          <Splash />
          <Writing />
          <Work />
          <About />     
          <Footer />
        </Col>
      </Row>
      )
  }

}

export default App;