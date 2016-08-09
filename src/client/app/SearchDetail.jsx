import React from 'react';

export default class SearchDetail extends React.Component {
  render(){

    return (
      <div className="searchDetail">
        <form action="" onSubmit={this.props.onSubmitSearch} >
          <label htmlFor="location">Location</label><br/>
          <input type="text" placeholder="Search by Location" onChange={this.props.onUpdateLocationSearch}/><br/>
          <label htmlFor="keywords">Keywords</label><br/>
          <input type="text" placeholder="Search by Keywords" onChange={this.props.onUpdateKeywordSearch}/><br/>
          <label htmlFor="when">When</label><br/>
          <select onChange={this.props.onUpdateTimeSearch} name="time" id="">
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="Next Week">Next Week</option>
            <option value="This Weekend">This Weekend</option>
            <option value="Next Weekend">Next Weekend</option>
            <option value="Future">Future</option>
            <option value="All">All</option>
          </select><br/>
          <label htmlFor="distance">Distance</label><br/>
          <select name="distance" id="">
            <option value="ten">10mi</option>
            <option value="twentyfive">25mi</option>
            <option value="fifty">50mi</option>
            <option value="hundred">100mi</option>
          </select><br/>
          <input type="submit" className="myButton" />
        </form>
      </div>
    )
  }
}






