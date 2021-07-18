import React from 'react'

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='container'>

            <div className='row'>
                {/*COLUMN1*/}
                <div className='col'>
                    <h3>vacationTracker</h3>
                    <hr />
                    <ul>
                        <li>About us</li>
                        <li>Partner with us</li>
                    </ul>
                </div>

                {/*COLUMN2*/}
                <div className='col'>
                    <h3>Help</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Contact us</li>
                        <li>Terms of use</li>
                    </ul>
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
