import React from 'react'

const AddForm = () => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form">
            <label htmlFor="text">Text</label>
            <input 
                type="text" 
                placeholder="Enter text..."
            />
        </div>
            
        <div className="form">
            <label htmlFor="amount">Amount <br /> 
                (negative - expense, positive - income)
            </label>
            <input type="number" placeholder="Enter Amount..."/>
        </div>
        <button>Add Transaction</button>

      </form>
    </div>
  )
}

export default AddForm
