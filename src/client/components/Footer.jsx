import React from 'react';
import styles from '../css/headerStyles.css';

export default class Footer extends React.Component {
  render(){

    return (
      <div className={styles["footer"]}>
        <div id={styles['myName']}>Matt Gershowitz © 2016</div>
        <div className={styles["eventful-small"]}>
          <img src="http://api.eventful.com/images/powered/eventful_58x20.gif" alt="Local Events, Concerts, Tickets" />
          <p><a href="http://eventful.com/">Events</a> by Eventful</p>
        </div>
      </div>
    )
  }
}

