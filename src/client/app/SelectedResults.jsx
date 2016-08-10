import React     from 'react'

export default class SelectedResults extends React.Component {
  render(){
    if(!this.props.event.images){
    console.log('not array')
    return(
      <div className="selectedEvent">
        <h1>Brah! This one looks Saweeet!</h1>
          <div className="selectImageContainer" >
            <img className="eventImage" src='http://bento.cdn.pbs.org/hostedbento-prod/filer_public/_bento_media/img/no-image-available.jpg' alt=""/>
          </div>
            <h3>{this.props.event.title}</h3>
            <h4>{this.props.event.venue_name}</h4>
            <h6>{Date(this.props.event.start_time)}</h6>
            <p>{this.props.event.city}</p>
            <p>{this.props.event.description}</p>
            <button className="myButton">Let's Go!!!</button>
            <button onClick={this.props.onReturnToSearch} className="myButton">Search Again</button>
      </div>
    )
    } else if(!Array.isArray(this.props.event.images.image)){
    console.log('not array')
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
            <button onClick={this.props.onReturnToSearch} className="myButton">Search Again</button>
      </div>
    )
  } else {
    console.log('is Array')
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
            <button onClick={this.props.onReturnToSearch} className="myButton">Search Again</button>
      </div>
      )
    }
  }
}


