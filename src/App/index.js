import React, { Component } from 'react';
import './index.css';
import image from './outreachio_logo.png'

import Menu from '../Menu/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <header className="App-header">
          <img src={image} alt={image} />
          <img src={image} alt={image} />
          <img src={image} alt={image} />
          <img src={image} alt={image} />
          <img src={image} alt={image} />
          <img src={image} alt={image} />
          <img src={image} alt={image} />
        </header>
      </div>
    );
  }
}

export default App;
