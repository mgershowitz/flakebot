import React     from 'react'

export default class SavedSelectedResults extends React.Component {
  render(){
    if(!this.props.event.images){
    console.log('not array')
    return(
      <div className="selectedEvent">
        <div className="mainHeader">
          <img className='bannerFlake' src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(Front).gif" alt=""/>
          <h1>Brah! I've saved the date!!</h1>
          <p>I'm definitely going to make it this time</p>
        </div>
          <div className="selectImageContainer" >
            <img className="eventImage" src='http://bento.cdn.pbs.org/hostedbento-prod/filer_public/_bento_media/img/no-image-available.jpg' alt=""/>
          </div>
            <h3>{this.props.event.title}</h3>
            <h4>{this.props.event.venue_name}</h4>
            <h6>{this.props.event.start_time}</h6>
            <p>{this.props.event.city}</p>
            <p>{this.props.event.description}</p>
            <form action="" onSubmit={this.props.onDeleteEvent}>
              <input type="hidden" name="event_id" value={this.props.event.id}/>
              <button className="myButton">Can't Make It</button>
            </form>
            <button onClick={this.props.onReturnToSearch} className="myButton">Search Again</button>
      </div>
    )
    } else if(!Array.isArray(this.props.event.images.image)){
    console.log('not array')
    return(
      <div className="selectedEvent">
        <div className="mainHeader">
          <img className='bannerFlake' src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(Front).gif" alt=""/>
          <h1>Brah! I've saved the date!!</h1>
          <p>I'm definitely going to make it this time</p>
        </div>
          <div className="selectImageContainer" >
            <img className="eventImage" src={this.props.event.images.image.medium.url} alt=""/>
          </div>
            <h3>{this.props.event.title}</h3>
            <h4>{this.props.event.venue_name}</h4>
            <h6>{this.props.event.start_time}</h6>
            <p>{this.props.event.city}</p>
            <p>{this.props.event.description}</p>
            <form action="" onSubmit={this.props.onDeleteEvent}>
              <input type="hidden" name="event_id" value={this.props.event.id}/>
              <button className="myButton">Can't Make It</button>
            </form>
            <button onClick={this.props.onReturnToSearch} className="myButton">Search Again</button>
      </div>
    )
  } else {
    console.log('is Array')
    return(
      <div className="selectedEvent">
        <div className="mainHeader">
          <img className='bannerFlake' src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(Front).gif" alt=""/>
          <h1>Brah! I've saved the date!!</h1>
          <p>I'm definitely going to make it this time</p>
        </div>
          <div className="selectImageContainer" >
            <img className="eventImage" src={this.props.event.images.image[0].url} alt=""/>
          </div>
            <h3>{this.props.event.title}</h3>
            <h4>{this.props.event.venue_name}</h4>
            <h6>{this.props.event.start_time}</h6>
            <p>{this.props.event.city}</p>
            <p>{this.props.event.description}</p>
            <form action="" onSubmit={this.props.onDeleteEvent}>
              <input type="hidden" name="event_id" value={this.props.event.id}/>
              <button className="myButton">Can't Make It</button>
            </form>
            <button onClick={this.props.onReturnToSearch} className="myButton">Search Again</button>
      </div>
      )
    }
  }
}


