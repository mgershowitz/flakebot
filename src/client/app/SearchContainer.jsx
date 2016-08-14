import React                from 'react'
import Header               from './Header.jsx'
import SearchInitial        from './SearchInitial.jsx'
import SearchDetail         from './SearchDetail.jsx'
import SavedSelectedResults from './SavedSelectedResults.jsx'
import Results              from './Results.jsx'
import Profile              from './Profile.jsx'
import MyEvents             from './MyEvents.jsx'
import SideResults          from './SideResults.jsx'
import SelectedResults      from './SelectedResults.jsx'
import ajax                 from '../helpers/ajaxAdapter.js'
import util                 from '../helpers/util.js'


export default class SearchContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      location: "",
      keyword: "",
      time: 'Today',
      results: [],
      singleResult: [],
      userEvents:[],
      searched: false,
      selected: false,
      user: false,
      savedSelected: false,
      flakeBot: false
    }
  }

   componentDidMount(){
    if(localStorage.token){
      ajax.getMyEvents(localStorage.user_id).then( myEvents => {
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
        console.log(res.event)
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
    console.log(event.target.alt)
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
    console.log(event)
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
    ajax.createNewUser(newUser).then(
      setTimeout(()=>{
      ajax.loginUser(user).then( user => {
          console.log(user)
          localStorage.setItem('token', user.token)
          localStorage.setItem('username', user.username)
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
      console.log(myEvents)
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

  render(){
      if(this.state.selected){
      //Page if single event is selected
      return (
        <div>
            <Header
            user={this.state.user}
            userLoggedIn={this.userLogIn.bind(this)}
            userLoggedOut={this.userLogOut.bind(this)}
            showUserEvents={this.displayUserEvents.bind(this)} />
            <SideResults
            onSelectEvent={this.selectEventDetail.bind(this)}
            events={this.state.results}
            />
           <SelectedResults
            onReturnToSearch={this.returnToSearch.bind(this)}
            onSaveEvent={this.saveEvent.bind(this)}
            event={this.state.singleResult}
            />
          </div>
        )

     } else if(this.state.searched){
      //page if searched
      return (
          <div>
            <Header
            user={this.state.user}
            userLoggedIn={this.userLogIn.bind(this)}
            userLoggedOut={this.userLogOut.bind(this)}
            showUserEvents={this.displayUserEvents.bind(this)} />
            <SearchDetail
            onUpdateLocationSearch={this.handleUpdateLocationSearch.bind(this)}
            onUpdateKeywordSearch={this.handleUpdateKeywordSearch.bind(this)}
            onUpdateTimeSearch={this.handleUpdateTimeSearch.bind(this)}
            onSubmitSearch={this.handleSubmitSearch.bind(this)}
            location={this.state.location}
            keyword={this.state.keyword}
            />
            <Results
            onSelectEvent={this.selectEventDetail.bind(this)}
            events={this.state.results}
            />
          </div>
        )
      } else if(this.state.user&&this.state.savedSelected){
        //Page if saved event is selected
        return(
        <div>
          <Header
            user={this.state.user}
            userLoggedIn={this.userLogIn.bind(this)}
            userLoggedOut={this.userLogOut.bind(this)}
            showUserEvents={this.displayUserEvents.bind(this)} />
            <MyEvents
            onSelectEvent={this.selectSavedEventDetail.bind(this)}
            events={this.state.results}
            />
            <SavedSelectedResults
            onDeleteEvent={this.deleteEvent.bind(this)}
            showUserEvents={this.displayUserEvents.bind(this)}
            // onReturnToSearch={this.returnToSearch.bind(this)}
            event={this.state.singleResult}
            />
          </div>
          )
      //Landing Page if user is logged in
      } else if(this.state.user&&!this.state.searched){
        return(
        <div>
          <Header
            user={this.state.user}
            userLoggedIn={this.userLogIn.bind(this)}
            userLoggedOut={this.userLogOut.bind(this)}
            showUserEvents={this.displayUserEvents.bind(this)} />
          <SearchDetail
            onUpdateLocationSearch={this.handleUpdateLocationSearch.bind(this)}
            onUpdateKeywordSearch={this.handleUpdateKeywordSearch.bind(this)}
            onUpdateTimeSearch={this.handleUpdateTimeSearch.bind(this)}
            onSubmitSearch={this.handleSubmitSearch.bind(this)}
            location={this.state.location}
            keyword={this.state.keyword}
            />
            <Profile
            onSelectSavedEvent={this.selectSavedEventDetail.bind(this)}
            events={this.state.userEvents}
            />
          </div>
          )
      } else {
      //Landing Page
      return(
        <div>
          <Header
            user={this.state.user}
            userLoggedIn={this.userLogIn.bind(this)}
            userLoggedOut={this.userLogOut.bind(this)}
            showUserEvents={this.displayUserEvents.bind(this)} />
          <SearchInitial
            onCreateUser={this.createUser.bind(this)}
            onUpdateLocationSearch={this.handleUpdateLocationSearch.bind(this)}
            onUpdateKeywordSearch={this.handleUpdateKeywordSearch.bind(this)}
            onSubmitSearch={this.handleSubmitSearch.bind(this)}
            location={this.state.location}
            keyword={this.state.keyword} />
          </div>
      )
    }
  }
}




