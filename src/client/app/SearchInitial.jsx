import React from 'react';

export default class SearchInitial extends React.Component {
  render(){

    return (
      <div>
        <div className="search">
          <h2>Search by City or Keyword!</h2>
          <p>Find fun events to do around your city</p>
          <div className="imgContainer"></div>
          <form action="" onSubmit={this.props.onSubmitSearch} >
            <input type="text" placeholder="Search by Location" onChange={this.props.onUpdateLocationSearch}/>
            <input type="text" placeholder="Search by Keywords" onChange={this.props.onUpdateKeywordSearch}/>
            <input type="submit" value="Search"/>
          </form>
        </div>
        <div className="signUp">
          <h2>Be friends with FlakeBot!</h2>
          <p>Feel free to test with username and password flakebot and flakebot</p>
          <form action="" onSubmit={this.props.onCreateUser} >
            <input type="text" name="username" placeholder="New Username"/><br/>
            <input type="text" name="email" placeholder="New Email"/><br/>
            <input type="text" name="phone" placeholder="New Phone Number"/><br/>
            <input type="password" name="password" placeholder="New Password"/><br/>
            <input type="submit" value="Sign Up!"/>
          </form>
        </div>
      </div>
    )
  }
}






