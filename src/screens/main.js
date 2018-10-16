import React from 'react';
// import {Router} from 'react-router';
import ReactDOM from 'react-dom';



import Header from './header';
import Footer from './footer';

export default function Main (props) {
  return ( <div >
    <Header />
    {/* <Router> */}
    <div>Main Area</div>
    {/* </Router> */}
    <Footer />
  </div>);
};