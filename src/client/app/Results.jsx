import React     from 'react'

export default class Results extends React.Component {
  render(){
    return(
    <div className="eventResults">
        {this.props.events.map((event,i) => {
            if(event.image){
            // console.log('true')
            return(
            <div className="imageContainer" key={i}>
              <img className="eventImage" src={event.image.large.url} alt=""/>
              <h5>{event.title}</h5>
              <h6>{event.start_time}</h6>
              <input type="hidden" value={event.description}/>
              <input type="hidden" value={event.city_name}/>

            </div>
            )
          } else {
            // console.log('false')
            return(
            <div className="imageContainer" key={i}>
              <img className="eventImage"  src='http://bento.cdn.pbs.org/hostedbento-prod/filer_public/_bento_media/img/no-image-available.jpg' alt=""/>
              <h5>{event.title}</h5>
              <h6>{event.start_time}</h6>
              <input type="hidden" value={event.description}/>
              <input type="hidden" value={event.city_name}/>

            </div>
            )
          }
          })
        }
    </div>
    )
  }
}

