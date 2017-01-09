import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from './Footer.jsx'
import Header from './Header.jsx'

export default class MainA extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hi</h1>
        {/*{React.cloneElement(this.props.children, this.props)}*/}

        <Footer />
      </div>
    )
  }
}
