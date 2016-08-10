import React            from 'react'
import Header           from './Header.jsx'
import SearchInitial    from './SearchInitial.jsx'
import SearchDetail     from './SearchDetail.jsx'
import Results          from './Results.jsx'
import SideResults      from './SideResults.jsx'
import SelectedResults  from './SelectedResults.jsx'
import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
// import Login            from './Login.jsx'
// import CreateUser       from './CreateUser.jsx'



export default class SearchContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      location: "",
      keyword: "",
      time: 'Today',
      results: [],
      singleResult: [],
      searched: false,
      selected: false,
      flakeBot: false,
      user: false
    }
  }


  //  componentDidMount(){
  //   // go to the db and get all the tasks
  //   ajax.pantryCall().then(pantry=>{
  //     // when the data comes back, update the state
  //     this.setState({ pantry: pantry })
  //   })
  // }

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
        searched: true
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
        selected: true
      })
    })
  }

  returnToSearch(event){
    event.preventDefault();
    this.setState({
      selected: false
    })
  }

  createUser(event){
    event.preventDefault();
    let newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      password: event.target.password.value
    }
    ajax.createNewUser(newUser).then(newUser =>{
      console.log("new user created")
      this.setState({
        searched: true
      })
    })
  }
// addToPantry(event){
//   event.preventDefault();
//   let item = {item:event.target.value}
//   console.log()
//   ajax.addPantry(item).then(pantry=>{
//   ajax.pantryCall().then(pantry=>{
//       this.setState({ pantry: pantry,
//        })

//     })})
//   }

// deleteFromPantry(event){
//   event.preventDefault();
//   let item = {item: event.target.value}
//   ajax.deletePantry(item).then(pantry=>{
//     ajax.pantryCall().then(pantry=>{
//       this.setState({pantry: pantry})
//     })
//   })
// }




  render(){
      if(this.state.searched&&this.state.selected){
      return (
        <div>
            <Header
            user={this.state.user} />
            <SideResults
            onSelectEvent={this.selectEventDetail.bind(this)}
            events={this.state.results}
            />
           <SelectedResults
            onReturnToSearch={this.returnToSearch.bind(this)}
            event={this.state.singleResult}
            />
          </div>
        )

     } else if(this.state.searched){
      return (
          <div>
            <Header
            user={this.state.user} />
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
      } else {
      return(
        <div>
          <Header
            user={this.state.user} />
          <SearchInitial
          onCreateUser={this.createUser.bind(this)}
          onUpdateLocationSearch={this.handleUpdateLocationSearch.bind(this)}
          onUpdateKeywordSearch={this.handleUpdateKeywordSearch.bind(this)}
          onSubmitSearch={this.handleSubmitSearch.bind(this)}
          location={this.state.location}
          keyword={this.state.keyword}
          />
          </div>
      )
    }
  }
}




