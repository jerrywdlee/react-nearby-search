import React, { Component } from 'react';
import './App.css';
import { Button, Well } from 'react-bootstrap';
import MyNavbar from './components/Navbar.jsx'

const wellStyles = {
  height: 100+'vh',
  margin: 0,
  paddingTop: 80+'px'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar></MyNavbar>
        <Well style={wellStyles}>
          <p className="App-intro">
            <Button>Bootstrapボタン</Button>
          </p>
        </Well>
      </div>
    );
  }
}

export default App;
