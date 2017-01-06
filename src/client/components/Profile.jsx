import React     from 'react'
const moment     = require('moment')
export default class Profile extends React.Component {
  render(){
    return(
    <div className="eventResults">
      <div className="mainHeader">
        <img className='bannerFlake' src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(Front).gif" alt=""/>
        <h1>Can't wait, Brah!!</h1>
        <p>We're going to have a great time!</p>
      </div>
        {this.props.events.map((event,i) => {
            return(
            <div className="infoContainer" key={i}>
            <div className="imageContainer"
            value={event.event_id} >
              <img onClick={this.props.onSelectSavedEvent} className="eventImage" src={event.image} alt={event.event_id}/>
            </div>
              <h5>{event.title.slice(0,25)}</h5>
              <h6>{moment(event.event_time).format('LLLL')}</h6>
            </div>
            )
          })
        }
    </div>
    )
  }
}

