import React     from 'react'

export default class SelectedResults extends React.Component {
  render(){
    if(!Array.isArray(this.props.event.images.image.isArray)){
    return(
      <div className="selectedEvent">
        <h1>Brah! This one looks Saweeet!</h1>
          <div className="selectImageContainer" >
            <img className="eventImage" src={this.props.event.images.image.medium.url} alt=""/>
          </div>
            <h3>{this.props.event.title}</h3>
            <h4>{this.props.event.venue_name}</h4>
            <h6>{Date(this.props.event.start_time)}</h6>
            <p>{this.props.event.city}</p>
            <p>{this.props.event.description}</p>
            <button className="myButton">Let's Go!!!</button>
            <button className="myButton">Search Again</button>
      </div>
    )
  } else {
    return(
      <div className="selectedEvent">
        <h1>Brah! This one looks Saweeet!</h1>
          <div className="selectImageContainer" >
            <img className="eventImage" src={this.props.event.images.image[0].url} alt=""/>
          </div>
            <h3>{this.props.event.title}</h3>
            <h4>{this.props.event.venue_name}</h4>
            <h6>{Date(this.props.event.start_time)}</h6>
            <p>{this.props.event.city}</p>
            <p>{this.props.event.description}</p>
            <button className="myButton">Let's Go!!!</button>
            <button className="myButton">Search Again</button>
      </div>
      )
    }
  }
}


