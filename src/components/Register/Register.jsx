import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className='form_container'>
          <div className='form_wrapper'>
            <form>
              <span className='logo'>Chat</span>
              <span className='title'>Register</span>

              <input type="text" placeholder='display name'/>
              <input type="email" placeholder='email'/>
              <input type="password" placeholder='password'/>
              <input type="file" placeholder='file'/>
              <input style={{display:"none"}} type="file" id="file" />
              <label htmlFor="file">
                <img src="" alt="" />
              </label>
              <button>Sign Up</button>
            </form>
            <p>Have an accout? Log In.</p>
          </div>
    </div>

  )
}

export default Register