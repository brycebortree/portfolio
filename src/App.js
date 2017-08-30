import React, { Component } from 'react';

import About from './About';
import Footer from './Footer';
import Work from './Work';
import Writing from './Writing';

class App extends Component {
  render(){
    return(
        <div>
          <About />     
          <Writing />
          <Work />
          <Footer />
        </div>
      )
  }

}

export default App;