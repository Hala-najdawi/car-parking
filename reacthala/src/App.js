import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ParkTable from './components/ParkTable';
import UserTable from './components/UserTable ';
import LogIn from './components/LogIn';
import Tables from './components/Tables';
// import {hashHistory} from 'react-router';
class App extends Component {
  state = {
    Name: "hala",
    Password: "123456"
  }

  render() {
    return (
      <div className="App">
        <Router >
        <Route path="/loginadmin" component={()=> <LogIn Name={this.state.Name} Password={this.state.Password}/>} /> 
        <Route path="/usertable" component={UserTable} />
        <Route path="/parktable" component={ParkTable} />
        <Route path="/tables" component={Tables}/>
        </Router>
        
      </div>
    );
  }
}
export default App;
