import React, { useState } from 'react'
function PasswordReset() {
    const [show,setShow]=useState(false)
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundImage:'url("/image.png")', backgroundSize: 'cover' ,
          backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <form className="d-flex flex-column gap-4 p-5 border rounded shadow bg-white" style={{ width: '30vw', height:'70vh' }}>
            <input type='text' name="number" id="number" placeholder="Phone Number" className='form-control form-control-lg mt-4'></input>
            {show && <input type="text" id="otp" name="otp" maxlength="6" pattern="\d{6}" required className='form-control form-control-lg mt-4'></input>}
            <button onClick={()=>{setShow(true)}} className='btn btn-primary btn-lg mt-4'>Get OTP</button>
        </form>
    </div>
  )
}

export default PasswordReset