import React     from 'react'

export default class Profile extends React.Component {
  render(){
    return(
    <div className="eventResults">
      <h1>Can't wait Brah!!</h1>
        {this.props.events.map((event,i) => {
            return(
            <div className="infoContainer" key={i}>
            <div className="imageContainer"
            value={event.event_id} >
              <img onClick={this.props.onSelectSavedEvent} className="eventImage" src={event.image} alt={event.event_id}/>
            </div>
              <h5>{event.title.slice(0,25)}</h5>
              <h6>{event.event_time}</h6>
            </div>
            )
          })
        }
    </div>
    )
  }
}

