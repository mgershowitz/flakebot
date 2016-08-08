import React            from 'react'
import Search           from './Search.jsx'
import Results          from './Results.jsx'
import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
var cron = require('node-cron');
// import Login            from './Login.jsx'
// import CreateUser       from './CreateUser.jsx'


  cron.schedule('* * * * *', ()=>{
    ajax.eventsCall('new york').then(res => {
          console.log(res.event)
          this.setState({
          results: res.event,
          searched: true
        })
      })
  });
export default class SearchContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      location: "",
      keyword: "",
      searched: false,
      results: [],
      flakeBot: false
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

  handleSubmitSearch(event){
  event.preventDefault();
  ajax.eventsCall(this.state.location).then(res => {
        console.log(res.event)
        this.setState({
        results: res.event,
        searched: true
      })
    })
  event.target.reset()
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


 // selectRecipe(event){
 //    event.preventDefault();
 //    console.log(event.target.alt)
 //    //ajax.secondCall(event.target.alt)
 //    ajax.recipeCall(event.target.alt)
 //    .then( cuisine =>{
 //      this.setState({
 //        results: cuisine,
 //        query: "",
 //        selected: true
 //      })
 //    })
 //  }


  render(){
     //  if(this.state.searched&&this.state.selected){
     //  return (

     //      <div className="row">
     //        <SmallLogo />
     //        <div className="col-sm-4">

     //          <Ingredients
     //            addToPantry={this.addToPantry.bind(this)}
     //            recipes={this.state.results}
     //           />
     //        </div>

     //        <div className="col-sm-4">
     //          <ResultsSelected
     //          recipes={this.state.results}
     //          onSelectRecipe={this.selectRecipe.bind(this)}
     //          dropdown={this.state.dropdown}
     //          />
     //        </div>

     //        <div className="col-sm-4">
     //          <Pantry
     //            deletePantry={this.deleteFromPantry.bind(this)}
     //            pantry={this.state.pantry}
     //          />

     //        </div>
     //    </div>
     //    )

     // } else
     if(this.state.searched){
      return (
          <div>
            <Search
            onUpdateLocationSearch={this.handleUpdateLocationSearch.bind(this)}
            onUpdateKeywordSearch={this.handleUpdateKeywordSearch.bind(this)}
            onSubmitSearch={this.handleSubmitSearch.bind(this)}
            location={this.state.location}
            keyword={this.state.keyword}
            />
            <Results
            events={this.state.results}
            />
          </div>
        )
      } else {
      return(
        <div>
          <Search
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




