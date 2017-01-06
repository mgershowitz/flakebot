import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from './Footer'

export default class MainA extends Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}

        <Footer />
      </div>
    )
  }
}
