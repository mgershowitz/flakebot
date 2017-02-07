import React, { Component }     from 'react';
import SideResults from './SideResults.jsx';
import styles from '../css/results.css';
const moment     = require('moment')




export default class Results extends Component {
  render(){
    return(
    <div>

    <SideResults />
    <div className={styles["eventResults"]}>
      <div className={styles["mainHeader"]}>
        <div className={styles['bannerFlake']}>
          <img src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(Front).gif" alt=""/>
        </div>
        <div className={styles['title']}>
          <h1>Brah! Look at all the cool stuff we can do!</h1>
          <p>Here's what's going on</p>
        </div>
      </div>
        {this.props.events.map((event,i) => {
            if(event.image){
            return(
            <div className={styles["infoContainer"]} key={i}>
            <div className={styles["imageContainer"]}
            value={event.id} >
              <img onClick={this.props.onSelectEvent} className={styles["eventImage"]} src={event.image.large.url} alt={event.id}/>
            </div>
              <h5>{event.title.slice(0,25)}</h5>
              <h6>{moment(event.start_time).format('LLLL')}</h6>
            </div>
            )
          } else {
            return(
            <div className={styles["infoContainer"]} key={i}>
            <div className={styles["imageContainer"]}
             value={event.id}>
              <img onClick={this.props.onSelectEvent} className={styles["nullEventImage"]}  src='http://i.imgur.com/TAxW4dQ.png' alt={event.id}/>
            </div>
              <h5>{event.title.slice(0,25)}</h5>
              <h6>{moment(event.start_time).format('LLLL')}</h6>
            </div>
            )
          }
          })
        }
    </div>
    </div>
    )
  }
}

