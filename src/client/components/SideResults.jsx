import React from 'react';

export default class SideResults extends React.Component {
  render(){

    return (
      <div className="searchDetail">
        <h3>Searched Events</h3>
        {this.props.events.map((event,i) => {
            if(event.image){
            // console.log('true')
            return(
            <div className="sideContainer" key={i}>
              <img onClick={this.props.onSelectEvent} alt={event.id} className="sideEventImage" src={event.image.large.url}/>
              <p>{event.title.slice(0,20)}</p>
            </div>
            )
          } else {
            // console.log('false')
            return(
            <div className="sideContainer" key={i}>
              <img onClick={this.props.onSelectEvent} alt={event.id} className="sideEventImage"  src='http://i.imgur.com/qRUdEHb.png' />
              <p>{event.title.slice(0,20)}</p>
            </div>
            )
          }
          })
        }
      </div>
    )
  }
}



