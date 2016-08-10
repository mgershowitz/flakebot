import React from 'react';
import ajax  from '../helpers/ajaxAdapter.js'

export default class Header extends React.Component {
  handleSubmit(event){
  event.preventDefault()
  let user = {
    username: event.target.username.value,
    password: event.target.password.value
  }
  ajax.loginUser(user).then( user => {
      console.log(user.message)
      localStorage.setItem('token', user.token)
      localStorage.setItem('user', user.username)
      }
    ).then(
    this.props.userLoggedIn()
    )
  }

clearLocalStorage(event){
  event.preventDefault()
  localStorage.setItem('token','')
  localStorage.setItem('user','')
  console.log('brah!? you leavin?')
  this.props.userLoggedOut()
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
          <button className='signIn' onClick={this.clearLocalStorage.bind(this)}>Log Out</button>
      </div>
    )
  }
  }
}

