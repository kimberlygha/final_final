/*
  This is the entry point. Export a react component here.
*/

import React, { Component } from 'react';
import Login from 'sub_Login/client/index'
// remove slides from home page! JUST FOR TESTING 
import Slides from 'sub_Slides/client/index'

export default class Home extends Component {
  
  render() {
    return (
      < div>
        <Login />
        <Slides />
      </div>
    );
  }
}
