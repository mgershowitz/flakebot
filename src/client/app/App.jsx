import React              from 'react'
import ReactDOM           from 'react-dom'
import Header             from './Header.jsx'
import Footer             from './Footer.jsx'
import SearchContainer    from './SearchContainer.jsx'

export default class App extends React.Component{
componentDidUpdate() {
    window.scrollTo(0, 0);
  }

    render(){
        return(
          <container>
              <div>
                <SearchContainer />
                <Footer />
              </div>
          </container>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#container'))
