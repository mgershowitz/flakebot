import React from 'react';

export default class MyEvents extends React.Component {
  render(){

    return (
      <div className="searchDetail">
        <h3>My Events</h3>
        {this.props.state.userEvents.map((event,i) => {
            return(
            <div className="sideContainer" key={i}>
              <img onClick={this.props.onSelectEvent} alt={event.event_id} className="sideEventImage" src={event.image}/>
              <p>{event.title.slice(0,20)}</p>
            </div>
            )
          })

        }
      </div>
      )
    }
}




