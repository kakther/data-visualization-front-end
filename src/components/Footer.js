import React from 'react'

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                {/*COLUMN1*/}
                <div className='col'>
                    <h3>Topics</h3>
                </div>

                {/*COLUMN2*/}
                <div className='col'>
                    <h3>Help</h3>
                </div>

                {/*COLUMN3*/}
                <div className='col'>
                    <h3>About</h3>
                </div>
            </div>

            <hr />
            <div className='row'>
                <p className='col-sm'>
                    &copy;kausarakther{new Date().getFullYear()}
                </p>
            </div>
        </div> 
    </div>
  )
}

export default Footer
