import React, { Component } from 'react'
import axios from 'axios'

export default class AddForm extends Component {
  state = {
    name: '',
    description: '',
    img: '',
    cost: '',
    note: '',
  
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };


 handlesubmit = (e) => {
   e.preventDefault();
   this.props.addVacation(this.state);
   this.setState({
      name: '',
      description: '',
      img: '',
      cost: '',
      notes: '',
   })
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
                     onChange={this.handleChange}
                     value={this.state.name}/>
            </div>

            <div className='input-box'>
              <label htmlFor='name'>Description</label>
              <input type='text' id='description'
                      onChange={this.handleChange}
                      value={this.state.description}/>
            </div>
            <div className='input-box'>
              <label htmlFor='name'>Image</label>
              <input type='text' id='img'
                     onChange={this.handleChange}
                     value={this.state.img}/>
            </div>
            <div className='input-box'>
              <label htmlFor='name'>Cost</label>
              <input type='text' id='cost'
                      onChange={this.handleChange}
                      value={this.state.cost}/>
            </div>
            <div className='input-box'>
              <label htmlFor='name'>Note</label>
              <input type='text' id='note'
                    onChange={this.handleChange}
                    value={this.state.note}/>
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