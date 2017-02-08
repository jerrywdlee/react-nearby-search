import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';
import logo from '../logo.svg';

class MyNavbar extends Component {
  render() {
    return(
      <Navbar inverse fixedTop>
        <Grid>
          <h3 className='Navbar-title'>
            <img src={logo} className="App-logo" alt="logo" />
            React周辺施設検索
          </h3>
        </Grid>
      </Navbar>
    );
  }
}

export default MyNavbar;
