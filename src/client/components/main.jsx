import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import myEvents from '../data/events';

export default class Main extends Component {
  constructor(){
    super();
    this.state = {
      location: "",
      keyword: "",
      time: 'Today',
      results: [],
      singleResult: [],
      userEvents: myEvents,
      searched: false,
      selected: false,
      user: false,
      savedSelected: false,
      flakeBot: false,
      notification: false
    }
    // this.handleUpdateSearch = this.handleUpdateSearch.bind(this)

  }


  render() {
    return (
      <div>
        <Header />
        {this.props.children && React.cloneElement(this.props.children, {
          state:this.state
        })}

        <Footer />
      </div>
    )
  }
}
