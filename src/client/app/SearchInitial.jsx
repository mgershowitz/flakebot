import React from 'react';

export default class SearchInitial extends React.Component {
  render(){

    return (
      <div className="search">
        <form action="" onSubmit={this.props.onSubmitSearch} >
          <input type="text" placeholder="Search by Location" onChange={this.props.onUpdateLocationSearch}/>
          <input type="text" placeholder="Search by Keywords" onChange={this.props.onUpdateKeywordSearch}/>
          <input type="submit" className="myButton" />
        </form>
      </div>
    )
  }
}






