import React, { Component } from 'react';
import styles from '../css/homeStyles.css';

export default class Home extends Component {
  render(){
    return (
      <div className={styles['container']}>
        <div className={styles["search"]}>
          <h2>Search by City or Keyword!</h2>
          <p>Find fun events to do around your city</p>
          <div className={styles["imgContainer"]}></div>
          <form action="" onSubmit={this.props.onSubmitSearch} >
            <input type="text" placeholder="Search by Location" onChange={this.props.onUpdateLocationSearch}/>
            <input type="text" placeholder="Search by Keywords" onChange={this.props.onUpdateKeywordSearch}/>
            <input type="submit" value="Search"/>
          </form>
        </div>
        <div className={styles["signUp"]}>
          <h2>Be friends with FlakeBot!</h2>
          <p>FlakeBot is one of the coolest bots on the planet. He always knows the most fun things to do in every city around the world. And don't worry, he ALWAYS shows up. It's going to be a blast</p>
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






