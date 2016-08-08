import React from 'react';

export default class Footer extends React.Component {
  render(){

    return (
      <div className="footer">
        <div className="eventful-badge eventful-small">
          <img src="http://api.eventful.com/images/powered/eventful_58x20.gif" alt="Local Events, Concerts, Tickets" />
          <p><a href="http://eventful.com/">Events</a> by Eventful</p>
        </div>
      </div>
    )
  }
}

