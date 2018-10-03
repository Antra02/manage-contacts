import React, { Component } from 'react';
import Contact from './containers/Contacts.jsx'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 offset-sm-2">
            <span className="title"><h1>Manage your contacts here</h1></span>
              <Contact />
          </div>
        </div>
      </div> 
    );
  }
}

export default App;