import React     from 'react'
const moment     = require('moment')
import SearchDetail from './SearchDetail.jsx'
import styles from '../css/profile.css'

export default class Profile extends React.Component {
  render(){
    return(
    <div>
      <SearchDetail />
      <div className={styles["eventResults"]}>
        <div className={styles["mainHeader"]}>
          <div className={styles['bannerFlake']}>
            <img src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(Front).gif" alt=""/>
          </div>
          <div className={styles['title']}>
            <h1>Can't wait, Brah!!</h1>
            <p>We're going to have a great time!</p>
          </div>
        </div>
          {this.props.state.userEvents.map((event,i) => {
              return(
              <div className={styles["infoContainer"]} key={i}>
              <div className={styles["imageContainer"]}
              value={event.event_id} >
                <img onClick={this.props.onSelectSavedEvent} className={styles["eventImage"]} src={event.image} alt={event.event_id}/>
              </div>
                <h5>{event.title.slice(0,25)}</h5>
                <h6>{moment(event.event_time).format('LLLL')}</h6>
              </div>
              )
            })
          }
      </div>
    </div>
    )
  }
}

