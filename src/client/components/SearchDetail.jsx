import React from 'react';

export default class SearchDetail extends React.Component {
  render(){

    return (
      <div className="searchDetail">
        <h3>Search Filters</h3>
        <form action="" onSubmit={this.props.onSubmitSearch} >
          <table>
            <tbody>
             <tr>
              <td>
                <label htmlFor="location">Location</label>
              {/*</td>
             </tr>
             <tr>
              <td>*/}
                <input type="text" placeholder="Search by Location" onChange={this.props.onUpdateLocationSearch}/>
              </td>
             </tr>
             <tr>
              <td>
                <label htmlFor="keywords">Keywords</label>
               {/*</td>
             </tr>
             <tr>
              <td>*/}
                <input type="text" placeholder="Search by Keywords" onChange={this.props.onUpdateKeywordSearch}/>
              </td>
             </tr>
             <tr>
              <td>
                <label htmlFor="when">When</label>
              {/*</td>
             </tr>
             <tr>
              <td>*/}
                <select onChange={this.props.onUpdateTimeSearch} name="time" id="">
                  <option value="Today">Today</option>
                  <option value="This Week">This Week</option>
                  <option value="Next Week">Next Week</option>
                  <option value="This Weekend">This Weekend</option>
                  <option value="Next Weekend">Next Weekend</option>
                  <option value="Future">Future</option>
                  <option value="All">All</option>
                </select>
              </td>
             </tr>
             <tr>
               <td>
                <label htmlFor="distance">Distance</label>
               </td>
             </tr>
             <tr>
               <td>
                <select name="distance" id="">
                  <option value="ten">10mi</option>
                  <option value="twentyfive">25mi</option>
                  <option value="fifty">50mi</option>
                  <option value="hundred">100mi</option>
                </select>
               </td>
             </tr>
            </tbody>
          </table>
          <input type="submit" className="myButton" />
        </form>
      </div>
    )
  }
}






