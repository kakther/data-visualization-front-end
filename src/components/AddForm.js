import React, { Component } from 'react'
import axios from 'axios'

export default class AddForm extends Component {

  render () {
    return (
      <div>
        <h1>Add your list of Vacation Place</h1> 
        <form>
          <div className='container'>
            <div className='input-box'>
              <label htmlFor='name'>Name</label>
              <input type='text' />
            </div>

            <div className='input-box'>
              <label htmlFor='name'>Description</label>
              <input type='text' />
            </div>
            <div className='input-box'>
              <label htmlFor='name'>Image</label>
              <input type='text' />
            </div>
            <div className='input-box'>
              <label htmlFor='name'>Cost</label>
              <input type='text' />
            </div>
            <div className='input-box'>
              <label htmlFor='name'>Note</label>
              <input type='text' />
            </div>
            <div className='vacation-button'>
              <input type='submit' value='Create Vacation List' />
            </div>
          </div>
          
        </form>
      </div>
    )
  }
}