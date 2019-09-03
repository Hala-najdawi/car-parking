import React, { Component } from 'react';
//import UserTable from './UserTable ';
//import { browserHistory, Router, Route, IndexRoute } from 'react-router'
// import { withRouter } from "react-router";
import { BrowserRouter as Router ,Link} from 'react-router-dom';
//import {Redirect} from 'react-router'
class LogIn extends Component {
  state = {
    Name: '',
    Password: '',
    check:"true"
  };
  changeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  check = () => {
    if (this.state.Name === this.props.Name && this.state.Password === this.props.Password) {
      
      alert('you clicked me');
            
    }
    else {
      console.log("false")
    }
  }
  handleClick(event) {
    event.preventDefault();
    
   
    
  }
  render() {
    return (
      <React.Fragment>
        <h2>Login Form</h2>
        <div class="imgcontainer" style={{ margin: "90px 0 12px 0" }}>

          <img src="data:image/png;base64,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" alt="Avatar" class="avatar"></img>
        </div>

        <div className="d-flex flex-column align-items-center" style={{ marginTop: '120px' }} >
          <div className="form-group w-25">
            <input type="text" className="form-control" name="Name"
              value={this.state.Name} onChange={this.changeValue} placeholder="Enter Name ..." />
          </div>

          <div className="form-group w-25">
            <input type="password" name="Password"
              value={this.state.Password} className="form-control"
              onChange={this.changeValue} placeholder=" Enter Password ..." required />
            <small style={{ fontWeight: "bold", color: "red" }}>" Please Enter Your Password "</small>
          </div>
          <button style={{marginBottom:"6px"}} type="submit" className="btn btn-primary" onClick={this.check}>
         
            
           LogIn</button> 
        
           </div>
        <Router >
          {/* <Route path="/usertable" component={UserTable} /> */}
          {/* <Route path="/login" component={LogIn} /> */}
          {/* <Route path="/parktable" component={ParkTable} /> */}
           <Link to="/usertable"><button type="submit"  style={{marginRight:"3px"}}>User Table
          
           </button></Link> 
           <Link to="/parktable"><button type="submit"  >parktable</button></Link>
        </Router>
    
    
      </React.Fragment>
    );
  }
}

export default LogIn;