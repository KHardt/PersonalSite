import React, { Component } from 'react';
import pic from './art1.JPG';
import pic2 from './art2.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pic} className="App-logo" alt="logo" />
        </header>
        <h1>Klaus Hardt <br></br>
          Software Engineer, Artist and Father</h1>
        <header>  
          <img src={pic2} className="App-logo2" alt="logo" /></header>
      </div>
     
    );
  }
}

export default App;
