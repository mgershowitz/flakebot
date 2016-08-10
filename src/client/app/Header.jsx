import React from 'react';

export default class Header extends React.Component {
  render(){
    if(!this.props.user){
    return (
      <div className="header">
        <h1>FlakeBot</h1>
        <div className='login'>
          <form action="post" className="signIn" onSubmit={this.props.signIn}>
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
                    <input type="password" name="username" placeholder="enter password"/>
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
        <form action="delete" onSubmit={this.props.logout}>
          <input type="submit" value="log out"/>
        </form>
      </div>
    )
  }
  }
}

