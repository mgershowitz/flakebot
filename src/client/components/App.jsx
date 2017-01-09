import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainA from './MainA.jsx'

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainA);

export default App;









// import React              from 'react'
// import ReactDOM           from 'react-dom'
// import Header             from './Header.jsx'
// import Footer             from './Footer.jsx'
// import SearchContainer    from './SearchContainer.jsx'

// export default class App extends React.Component{

// componentDidUpdate() {
//     window.scrollTo(0, 0);
//   }

//     render(){
//         return(
//           <container>
//               <div>

//                 <SearchContainer />

//                 <Footer />
//               </div>
//           </container>
//         )
//     }
// }
// ReactDOM.render(<App />, document.querySelector('#container'))
