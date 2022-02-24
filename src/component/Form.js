import React from 'react';
import './Form.css';



export class Form extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state={
          name:"",
          dprt:"",
          rating:"",
          user:[]
      }
  }
  manageChange=(e)=>
  {
     this.setState({
         [e.target.name]:e.target.value
     })
  }
  handle=(e)=>
  {
      e.preventDefault();
     
      const{name,dprt,rating}=this.state;
      if(name && dprt && rating)
      {
      const obj={
          id:new Date().getTime().toString(),
          name:name,
          dprt:dprt,
          rating:rating
      }
      const tempArr=this.state.user;
      tempArr.push(obj);
      this.setState({
          user:tempArr
      })
    }
    else
    alert("Field is required");
     
  }
  render()
  {
      return(
          <>
              <form onSubmit={this.handle}>
              <div className='mainDiv'>
              <div className='first'>
                  <label for='n'>Name:</label>
                  <input type="text" id='n' name="name" onChange={this.manageChange}></input>
                  </div>
                  <div className='first'>
                  <label for='d'>Department:</label>
                  <input type="text" id='d' name="dprt" onChange={this.manageChange}></input>
                  </div>
                  <div className='first'>
                  <label for='r'>Rating:</label>
                  <input type="text" id='r' name="rating" onChange={this.manageChange}></input>
                  </div>
                  <button className='btn'>Submit</button>
                  </div>
              </form>
              <div className='btmDiv'>
              {
                  this.state.user.map((currentElement)=>{
                      const{id,name,dprt,rating}=currentElement;
                     
                      return(
                          <div key={(id)} className='eachDiv'>
                            Name:{name}&nbsp; | &nbsp;
                            Department:{dprt}&nbsp; | &nbsp;
                            Rating:{rating}
                          </div>
                      )
                  })
              }
              </div>
          </>
      );
  }
}