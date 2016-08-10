import React from 'react';

export default class SearchInitial extends React.Component {
  render(){

    return (
      <div>
        <div className="search">
          <h2>The World = Your Oyster</h2>
          <div className="imgContainer"></div>
          <form action="" onSubmit={this.props.onSubmitSearch} >
            <input type="text" placeholder="Search by Location" onChange={this.props.onUpdateLocationSearch}/>
            <input type="text" placeholder="Search by Keywords" onChange={this.props.onUpdateKeywordSearch}/>
            <input type="submit" value="Search"/>
          </form>
        </div>
        <div className="signUp">
          <h2>Want to be best friends?</h2>
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






