import React, { Component } from 'react';
import Row from './ParkRow';

  class Tabel extends Component {
    state ={
      user: [
        {
         id:1,
         reservation:2,
         color:true//color red
       },
       {
         id:2,
         reservation:0,
         color:false//color blue
       },
       {
         id:3,
         reservation:1,
         color:true//color red
       }
   
     ]
     };
  render() {
  
    return (
    <>
    <h1>Park Tabel</h1>
<table className="table table-striped"style={{ marginTop:"80px"}}>
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">reservation</th>
      <th scope="col">color</th>
    </tr>
  </thead>
  
  {this.state.user.map(elem=> (<Row  user={elem} Add={this.props.Add}/>)     ) }
</table>

   </>   
    ); 
  }
  
}

export default Tabel;

