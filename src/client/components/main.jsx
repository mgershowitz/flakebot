import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from './Footer.jsx'
import Header from './Header.jsx'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, this.props)}

        <Footer />
      </div>
    )
  }
}
