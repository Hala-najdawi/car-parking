import React, { Component } from 'react';
  class Row extends Component {
    state={
      
    }

render() {
  
  return(
  <>
<tr>
      <td style={{ border: "1px solid black"}}> {this.props.user.id}</td>
      <td style={{ border: "1px solid black"}}> {this.props.user.reservation}</td>
      <td style={{border:"1px solid black"}}>{this.props.user.color?<div class="p-3 mb-2 bg-danger text-white">Reserved</div>:<div class="p-3 mb-2 bg-warning text-dark">Not reserved</div>}</td>
    
      
        </tr>
</>
);
  }  
}
export default Row;