import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import myEvents from '../data/events';
import ajax  from '../helpers/ajaxAdapter.js'


export default class Main extends Component {
  constructor(){
    super();
    this.state = {
      location: "",
      keyword: "",
      time: 'Today',
      results: [],
      singleResult: [],
      userEvents: myEvents,
      searched: false,
      selected: false,
      savedSelected: false,
      flakeBot: false,
      notification: false
    }

    this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
    this.handleUpdateTimeSearch = this.handleUpdateTimeSearch.bind(this)
    this.handleUpdateKeywordSearch = this.handleUpdateKeywordSearch.bind(this)
    this.handleUpdateLocationSearch = this.handleUpdateLocationSearch.bind(this)
    this.selectEventDetail = this.selectEventDetail.bind(this)
    this.selectSavedEventDetail = this.selectSavedEventDetail.bind(this)
    this.returnToSearch = this.returnToSearch.bind(this)
    this.displayUserEvents = this.displayUserEvents.bind(this)
    this.saveEvent = this.saveEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
    this.createUser = this.createUser.bind(this)
    this.userLogIn = this.userLogIn.bind(this)
    this.userLogOut = this.userLogOut.bind(this)
    this.notificationOn = this.notificationOn.bind(this)
    this.closeNotification = this.closeNotification.bind(this)
    this.addAlert= this.addAlert.bind(this)
  }

  componentDidMount(){
    if(localStorage.token){
      ajax.getMyEvents(localStorage.user_id).then(myEvents => {
        this.setState({
          userEvents: myEvents,
          user:true
        })
      })
    }
  }

  handleUpdateLocationSearch(event){
    this.setState({
      location: event.target.value,
    })
  }

  handleUpdateKeywordSearch(event){
    this.setState({
      keyword: event.target.value
    })
  }

  handleUpdateTimeSearch(event){
    this.setState({
      time: event.target.value
    })
  }

  handleSubmitSearch(event){
  event.preventDefault();
  ajax.eventsCall(this.state.location,this.state.time).then(res => {
        this.setState({
        results: res.event,
        searched: true,
        savedSelected:false
      })
    })
  event.target.reset()
  }

 selectEventDetail(event){
    event.preventDefault();
    ajax.eventDetailCall(event.target.alt).then( event =>{
      console.log(event)
      this.setState({
        singleResult: event,
        selected: true,
        searched:false
      })
    })
  }

 selectSavedEventDetail(event){
  event.preventDefault();
  ajax.eventDetailCall(event.target.alt).then( event =>{
    // console.log(event)
    this.setState({
      singleResult: event,
      selected: false,
      searched:false,
      savedSelected:true,
      results: this.state.userEvents
    })
  })
}

  returnToSearch(event){
    event.preventDefault();
    this.setState({
      selected: false,
      searched: true
    })
  }

  displayUserEvents(){
    this.setState({
      searched:false,
      selected:false,
      savedSelected:false
    })
  }

  saveEvent(event){
    event.preventDefault()
    let newEvent = {
      title: event.target.title.value,
      event_id: event.target.event_id.value,
      image: event.target.image.value,
      event_time: event.target.event_time.value
    }
    ajax.addUserEvent(newEvent).then(event => {
      console.log("success!!")
      ajax.getMyEvents(localStorage.user_id).then( myEvents => {
        this.setState({
          userEvents: myEvents,
          user:true,
          searched: false,
          selected: false
        })
      })
    })
  }

  deleteEvent(event){
    event.preventDefault()
    let userEvent = {event_id: event.target.event_id.value}
    console.log(userEvent)
    ajax.deleteUserEvent(userEvent).then(event => {
      console.log("success!!")
      ajax.getMyEvents(localStorage.user_id).then( myEvents => {
        this.setState({
          userEvents: myEvents,
          user: true,
          savedSelected: false
        })
      })
    })
  }

  createUser(event){
    event.preventDefault();
    let thing = event.target
    let newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      password: event.target.password.value
    }
    let user = {
      username: newUser.username,
      password: newUser.password
    }
    console.log(user)
    ajax.createNewUser(newUser).then(
      setTimeout(()=>{
        ajax.loginUser(user).then( user => {
        console.log(user)
        localStorage.setItem('token', user.token)
        localStorage.setItem('user_id', jwtDecode(user.token).user_id)
        console.log(jwtDecode(user.token).user_id)
        if(user.success){
          this.userLogIn()
        } else {
          thing.reset()
        }
      })}, 500)
      )
    }

  userLogIn(){
    ajax.getMyEvents(localStorage.user_id).then( myEvents => {
      // console.log(myEvents)
      this.setState({
        userEvents: myEvents,
        user:true,
      })
    })
  }

  userLogOut(){
    this.setState({
      user:false,
      searched:false,
      selected:false,
      savedSelected:false,
      userEvents:[],
      results: []
    })
  }

  notificationOn(){
    this.setState({
      notification:true
    })
  }

  closeNotification(){
    this.setState({
      notification:false
    })
  }

  addAlert () {
    this.refs.container.success(
      "Let's see if he's coming to your next event.",
      "Your message has been sent to FlakeBot!!", {
      timeOut: 4000,
      extendedTimeOut: 4000
    });
  }

  render() {
    return (
      <div>
        <Header
        user={this.state.user}
        userLoggedIn={this.userLogIn}
        userLoggedOut={this.userLogOut}
        showUserEvents={this.displayUserEvents}
        onAddAlert={this.addAlert} />

        {this.props.children && React.cloneElement(this.props.children, {
          state:this.state,
          handleSubmitSearch: this.handleSubmitSearch,
          handleUpdateTimeSearch: this.handleUpdateTimeSearch,
          handleUpdateKeywordSearch: this.handleUpdateKeywordSearch,
          handleUpdateLocationSearch: this.handleUpdateLocationSearch,
          selectEventDetail: this.selectEventDetail,
          selectSavedEventDetail: this.selectSavedEventDetail,
          returnToSearch: this.returnToSearch,
          saveEvent: this.saveEvent,
          deleteEvent: this.deleteEvent,
          createUser: this.createUser,
          notificationOn: this.notificationOn,
          closeNotificatio: this.closeNotification
        })}

        <Footer />
      </div>
    )
  }
}
