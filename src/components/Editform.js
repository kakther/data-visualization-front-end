import React, { Component } from 'react'

export default class EditForm extends Component {
    render() {
        return (
            
           <details>
             <summary>Edit Vacation</summary>
             <form
                id={this.props.vacation.id}
                onSubmit={this.props.updateVacation}> 
                

                <label htmlFor="name">Name</label>
                <br />
                <input
                    required
                    type="text"
                    id="name"
                    onChange={this.props.handleChange}
                />
                <br />

                <label htmlFor="description">Description</label>
                <br />
                <input
                    required
                    type="text"
                    id="description"
                    onChange={this.props.handleChange}
                />
                <br />

                <label htmlFor="image">Image</label>
                <br />
                <input
                    required
                    type="text"
                    id="image"
                    onChange={this.props.handleChange}
                />
                <br />

                <label htmlFor="cost">Const</label>
                <br />
                <input
                    required
                    type="text"
                    id="const"
                    onChange={this.props.handleChange}
                />

                <label htmlFor="note">Note</label>
                <br />
                <input
                    required
                    type="text"
                    id="note"
                    onChange={this.props.handleChange}
                />
                <br />
                <div>
                    <input type='submit' value='Update Vacation' />
                </div>


             </form>
           </details>
        )
    }
}