import React, { useState } from 'react'
import './main.css'
import logo from './Glogo.svg';
import { useNavigate } from "react-router-dom"

function Signup() {
  const [animate,animation] = useState(false)
  const [welcome,welcomeA] = useState(false)

  const inter = setTimeout(() => {
      animation(true)
  }, 1500);

  let navigate = useNavigate()

  const signinA = (event) => {
    animation(false)
    clearTimeout(inter)
    welcomeA(true)
    setTimeout(() => {
        let path = '/signin'
        navigate(path)
    }, 1500);
  }

  return (
    <div className='signup'>
        <div className='welcome' style={{animation:welcome?"close 1.2s ease-in-out 1 forwards":"resize 1.2s ease-in-out 1 forwards"}} >
            <nav><img src={logo} width='40px' className='logo'></img></nav>
            <div style={{display:"flex",alignItems:"center",height:"50vh",justifyContent:"center"}}>
            <div>
            <h1 className='welcomeT'>Welcome Friend</h1>
            <div style={{display:"flex", justifyContent:"center"}}>
            <p className='connectT'>To keep connnected with us please login with your personal info</p>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
            <button className='signinB'onClick={signinA}>SIGN IN</button>
            </div>
            </div>
            </div>
        </div>
        <div className='form' style={{display:animate?'flex':'none'}}>
            <div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <h1 className='signupH'>Create Account</h1>
            </div>
            <form style={{display:"flex", flexDirection:"column"}}>
                <input type='text' placeholder='Name' id='name' className='formD' />
                <input type='email' placeholder='Email' id='email' className='formD'/>
                <input type='password' placeholder='Password' id='password' className='formD' />
                <div style={{display:"flex", justifyContent:"center",marginTop:"10px"}}>
                    <input type='submit' value='SIGN UP' id='submit' className='signupB' />
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}
export default Signup