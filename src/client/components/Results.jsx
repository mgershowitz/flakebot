import React, { Component }     from 'react'
import SideResults from './SideResults.jsx'
const moment     = require('moment')




export default class Results extends Component {
  render(){
    return(
    <div>

    <SideResults />
    <div className="eventResults">
      <div className="mainHeader">
        <img className='bannerFlake' src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(Front).gif" alt=""/>
        <h1>Brah! Look at all the cool stuff we can do!</h1>
        <p>Here's what's going on</p>
      </div>
        {this.props.events.map((event,i) => {
            if(event.image){
            return(
            <div className="infoContainer" key={i}>
            <div className="imageContainer"
            value={event.id} >
              <img onClick={this.props.onSelectEvent} className="eventImage" src={event.image.large.url} alt={event.id}/>
            </div>
              <h5>{event.title.slice(0,25)}</h5>
              <h6>{moment(event.start_time).format('LLLL')}</h6>
            </div>
            )
          } else {
            return(
            <div className="infoContainer" key={i}>
            <div className="imageContainer"
             value={event.id}>
              <img onClick={this.props.onSelectEvent} className="nullEventImage"  src='http://i.imgur.com/TAxW4dQ.png' alt={event.id}/>
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

