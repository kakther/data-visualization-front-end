import React, { Component } from 'react'
import axios from 'axios'

export default class AddForm extends Component {
  state = {
    name: '',
    description: '',
    img: '',
    cost: '',
    notes: '',
  
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

 handlesubmit = (e) => {
   e.preventDefault();
   axios.post('')
 }



  render () {
    return (
      <div>
        <h1>Add your list of Vacation Place</h1> 
        <form onSubmit={this.handlesubmit}>
          <div className='container'>
            <div className='input-box'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name'
                     onChange={this.handleChange}/>
            </div>

            <div className='input-box'>
              <label htmlFor='name'>Description</label>
              <input type='text' id='description'
                      onChange={this.handleChange}/>
            </div>
            <div className='input-box'>
              <label htmlFor='name'>Image</label>
              <input type='text' id='img'
                     onChange={this.handleChange}/>
            </div>
            <div className='input-box'>
              <label htmlFor='name'>Cost</label>
              <input type='text' id='cost'
                      onChange={this.handleChange}/>
            </div>
            <div className='input-box'>
              <label htmlFor='name'>Note</label>
              <input type='text' id='note'
                    onChange={this.handleChange}/>
            </div>
            <br />
            <div className='vacation-button'>
              <input type='submit' value='Create Vacation List' />
            </div>
          </div>
          
        </form>
      </div>
    )
  }
}