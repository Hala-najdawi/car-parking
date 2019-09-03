import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ParkTable from './components/ParkTable';
import UserTable from './components/UserTable ';
import LogIn from './components/LogIn'

class App extends Component {
  state = {
    Name: "Hala",
    Password: "123456"
  }

  render() {
    return (
      <div className="App">
        <LogIn Name={this.state.Name} Password={this.state.Password} />
        <Router>
          <Route path="/usertable" component={UserTable} />
          {/* <Route path="/login" component={LogIn} /> */}
          <Route path="/parktable" component={ParkTable} />
         
        </Router>
        
      </div>
    );
  }
}
export default App;
