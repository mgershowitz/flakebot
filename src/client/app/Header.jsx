import React from 'react';
import ajax  from '../helpers/ajaxAdapter.js'
const jwtDecode = require('jwt-decode');

export default class Header extends React.Component {
  handleSubmit(event){
  event.preventDefault()
  let thing = event.target
  let user = {
    username: event.target.username.value,
    password: event.target.password.value
  }
  ajax.loginUser(user).then( user => {
      console.log(user)
      localStorage.setItem('token', user.token)
      localStorage.setItem('user_id', jwtDecode(user.token).user_id)
      console.log(jwtDecode(user.token).user_id)
      if(user.success){
        this.props.userLoggedIn()
      } else {
        thing.reset()
      }
    }
    )
  }

  clearLocalStorage(event){
    localStorage.setItem('token','')
    localStorage.setItem('user','')
    console.log('brah!? you leavin?')
    this.props.userLoggedOut()
  }

  myEvents(event){
    event.preventDefault()
    this.props.showUserEvents()
  }

  render(){
    if(!this.props.user){
    return (
      <div className="header">
        <h1>FlakeBot</h1>
        <div className='login'>
          <form action="post" className="signIn" onSubmit={this.handleSubmit.bind(this)}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="username">username</label>
                  </td>
                  <td>
                    <label htmlFor="password">password</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="username" placeholder="enter username"/>
                  </td>
                  <td>
                    <input type="password" name="password" placeholder="enter password"/>
                  </td>
                  <td>
                    <button>Sign In</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div className="header">
        <h1>FlakeBot</h1>
          <table className='signIn'>
            <tbody>
              <tr>
                <td>
                  <button>Talk to FlakeBot</button>
                </td>
                <td>
                  <button onClick={this.myEvents.bind(this)}>My Events</button>
                </td>
                <td>
                  <button onClick={this.clearLocalStorage.bind(this)}>Log Out</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    )
  }
  }
}

