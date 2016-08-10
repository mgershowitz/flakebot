import React     from 'react'

export default class Results extends React.Component {
  render(){
    return(
    <div className="eventResults">
      <h1>Brah! Look at all the cool stuff we can do!</h1>
        {this.props.events.map((event,i) => {
            if(event.image){
            // console.log('true')
            return(
            <div className="infoContainer" key={i}>
            <div className="imageContainer"
            value={event.id} >
              <img onClick={this.props.onSelectEvent} className="eventImage" src={event.image.large.url} alt={event.id}/>
            </div>
              <h5>{event.title.slice(0,25)}</h5>
              <h6>{event.start_time}</h6>
            </div>
            )
          } else {
            // console.log('false')
            return(
            <div className="infoContainer" key={i}>
            <div className="imageContainer"
             value={event.id}>
              <img onClick={this.props.onSelectEvent} className="nullEventImage"  src='http://bento.cdn.pbs.org/hostedbento-prod/filer_public/_bento_media/img/no-image-available.jpg' alt={event.id}/>
            </div>
              <h5>{event.title.slice(0,25)}</h5>
              <h6>{event.start_time}</h6>
            </div>
            )
          }
          })
        }
    </div>
    )
  }
}
