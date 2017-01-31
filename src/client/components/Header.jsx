import React, { Component } from 'react';
import ajax  from '../helpers/ajaxAdapter.js'
import styles from '../css/headerStyles.css'
const jwtDecode = require('jwt-decode');

export default class Header extends Component {
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

  bro(event){
    event.preventDefault()
    ajax.flakeBot(localStorage.user_id);
    this.props.onAddAlert()
  }

  clearLocalStorage(event){
    localStorage.setItem('token','')
    localStorage.setItem('user','')
    console.log('brah!? you leavin?')
    this.props.userLoggedOut()
  }

  render(){
      return (
        <header className={styles['header']}>
          <h1 className={styles['title']}>FlakeBot</h1>
          { !this.props.user &&
            <div className={styles["fBNoUser"]}>
              <img src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20-%20Walk%20(SW).gif" alt=""/>
            </div>
            <form action="post" className={styles["signIn"]} onSubmit={this.handleSubmit.bind(this)}>
              <span className={styles['grid']}>
                <div>
                  <label className={styles['username']} htmlFor="username">username</label>
                  <label className={styles['password']} htmlFor="password">password</label>
                </div>
                <div>
                  <input type="text" name="username" placeholder="enter username"/>
                  <input type="password" name="password" placeholder="enter password"/>
                  <button>Sign In</button>
                </div>
              </span>
            </form> }
            { this.props.user &&
              <div className={styles["fBNoUser"]}>
                <img src="http://www.videogamesprites.net/Earthbound/Party/Ness/Ness%20(Robot)%20(Front).gif" alt=""/>
              </div>
              <span className={styles['signedIn']}>
                <button onClick={this.bro.bind(this)}>Talk to FlakeBot</button>
                <button onClick={this.myEvents.bind(this)}>My Events</button>
                <button onClick={this.clearLocalStorage.bind(this)}>Log Out</button>
              </span> }
        </header>
      )
    }
  }



