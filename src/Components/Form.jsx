import React from 'react'
import '../Components/Web.css'

function Form() {
  return (
    <>
    <div className="full-form">
    <div className="Head">
        <h2 className='line'>Quick Details</h2>
    </div>
    <div className="contactus">
        <form action="">
            <label className='form' htmlFor="">
                <input className='name' type="text" placeholder='Enter your Name'/> 
                <input className='number' type="text" placeholder='Enter contact number'/> 
                <input className='mail' type="email" placeholder='E-Mail ID'/>
            </label>
            <div>
                <label className='likho' htmlFor="">
                    <input className='suggestion' type="text" placeholder='Details'/>
                </label>
            </div>
            <button className='submit' type="submit">Submit</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default Form