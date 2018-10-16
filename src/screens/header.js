import React, {Component} from 'react';
import logo from '../logo.svg';


class Header extends Component {
  render(){

    const bannerArea = (
      <div className='bannerArea'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </div>
    );

    const menuArea = (
      <div className='menuArea'></div>
    );

    return (
      <header className="App-header">
        {bannerArea}
        {menuArea}
      </header>
    );
  }
}

export default Header;
