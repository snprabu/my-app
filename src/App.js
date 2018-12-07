import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (     
      <div className="App">
        {logo}
        <Header />        
        < Aside />
        < Main />
      </div>
    );
  }
}

export default App;
