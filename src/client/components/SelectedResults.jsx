import React     from 'react'
const moment     = require('moment')
export default class SelectedResults extends React.Component {
  render(){
    if(!this.props.event.images){
    console.log('not array')
    return(
      <div className="selectedEvent">
        <div className="mainHeader">
          <img className='bannerFlake' src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(Front).gif" alt=""/>
          <h1>Brah! This one looks Saweeet!</h1>
          <p>We should totes go!</p>
        </div>
          <div className="selectImageContainer" >
            <img className="nullEventImage" src='http://i.imgur.com/TAxW4dQ.png' alt=""/>
          </div>
            <h3>{this.props.event.title}</h3>
            <h4>{this.props.event.venue_name}</h4>
            <h6>{moment(this.props.event.start_time).format('LLLL')}</h6>
            <p>{this.props.event.city}</p>
            <p>{this.props.event.description}</p>
            <form action="" onSubmit={this.props.onSaveEvent}>
              <input type="hidden" name="title" value={this.props.event.title}/>
              <input type="hidden" name="event_id" value={this.props.event.id}/>
              <input type="hidden" name="image" value='http://i.imgur.com/qRUdEHb.png'/>
              <input type="hidden" name="event_time" value={this.props.event.start_time}/>
              <button className="myButton">Let's Go!!!</button>
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
          <h1>Brah! This one looks Saweeet!</h1>
          <p>We should totes go!</p>
        </div>
          <div className="selectImageContainer" >
            <img className="eventImage" src={this.props.event.images.image.medium.url} alt=""/>
          </div>
            <h3>{this.props.event.title}</h3>
            <h4>{this.props.event.venue_name}</h4>
            <h6>{moment(this.props.event.start_time).format('LLLL')}</h6>
            <p>{this.props.event.city}</p>
            <p>{this.props.event.description}</p>
            <form action="" onSubmit={this.props.onSaveEvent}>
              <input type="hidden" name="title" value={this.props.event.title}/>
              <input type="hidden" name="event_id" value={this.props.event.id}/>
              <input type="hidden" name="image" value={this.props.event.images.image.medium.url}/>
              <input type="hidden" name="event_time" value={this.props.event.start_time}/>
              <button className="myButton">Let's Go!!!</button>
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
          <h1>Brah! This one looks Saweeet!</h1>
          <p>We should totes go!</p>
        </div>
          <div className="selectImageContainer" >
            <img className="eventImage" src={this.props.event.images.image[0].url} alt=""/>
          </div>
            <h3>{this.props.event.title}</h3>
            <h4>{this.props.event.venue_name}</h4>
            <h6>{moment(this.props.event.start_time).format('LLLL')}</h6>
            <p>{this.props.event.city}</p>
            <p>{this.props.event.description}</p>
            <form action="" onSubmit={this.props.onSaveEvent}>
              <input type="hidden" name="title" value={this.props.event.title}/>
              <input type="hidden" name="event_id" value={this.props.event.id}/>
              <input type="hidden" name="image" value={this.props.event.images.image[0].url}/>
              <input type="hidden" name="event_time" value={this.props.event.start_time}/>
              <button className="myButton">Let's Go!!!</button>
            </form>
            <button onClick={this.props.onReturnToSearch} className="myButton">Search Again</button>
      </div>
      )
    }
  }
}


