import React, { Component }     from 'react';
// import SideResults from './SideResults.jsx'
import SearchDetail from './SearchDetail.jsx';
import styles from '../css/styles.css'
const moment     = require('moment')

export default class Events extends Component {
  render(){
    return(
    <div>
    <SearchDetail />
    <div className={styles["eventResults"]}>
      <div className={styles["mainHeader"]}>
        <img className={styles['bannerFlake']} src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(Front).gif" alt=""/>
        <h1>Brah! Look at all the cool stuff we can do!</h1>
        <p>Here's what's going on</p>
      </div>
        {this.props.state.userEvents.map((event,i) => {
            if(event.image){
            return(
            <div className={styles["infoContainer"]} key={i}>
            <div className={styles["imageContainer"]}
            value={event.user} >
              <img onClick={this.props.onSelectEvent} className={styles["eventImage"]} src={event.image} alt=''/>
            </div>
              <h5>{event.title.slice(0,25)}</h5>
              <h6>{moment(event.time).format('LLLL')}</h6>
            </div>
            )
          } else {
            return(
            <div className={styles["infoContainer"]} key={i}>
            <div className={styles["imageContainer"]}
             value={event.user}>
              <img onClick={this.props.onSelectEvent} className={styles["nullEventImage" ]} src='http://i.imgur.com/TAxW4dQ.png' alt={event.id}/>
            </div>
              <h5>{event.title.slice(0,25)}</h5>
              <h6>{moment(event.time).format('LLLL')}</h6>
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

