import React, { useState } from 'react'
import './signin.css'
import logo from './Glogo.svg';
import { useNavigate } from "react-router-dom"

function Signin() {
    const [form, formL] = useState(false)
    const [welcome2,welcomeA2] = useState(false)
    
    const inter2 = setTimeout(() => {
        formL(true)
    }, 1600);

    let navigate2 = useNavigate()

    const signup = () => {
        clearTimeout(inter2)
        formL(false)
        welcomeA2(true)
        setTimeout(() => {
        let path = '/'
        navigate2(path)
        }, 1500);
    }
  return (
    <div className='signin'>
        <div className='form2' style={{display:form?'flex':'none'}}>
            <div>
                <div style={{display:"flex", justifyContent:"center"}}>
                <h1 className='signupH'>Sign In</h1>
                </div>
                <form style={{display:"flex", flexDirection:"column"}}>
                <input type='email' placeholder='Email' id='email' className='formD'/>
                <input type='password' placeholder='Password' id='password' className='formD' />
                <div style={{display:"flex", justifyContent:"center",marginTop:"10px"}}>
                <input type='submit' value='SIGN IN' id='submit' className='signupB' />
                </div>
            </form>
            </div>
        </div>
        <div className='welcome2' style={{animation:welcome2?"close2 1.6s ease-in-out 1 forwards":"resize2 1.6s ease-in-out 1 forwards"}}>
            <nav><img src={logo} width='40px' className='logo2'></img></nav>
            <div style={{display:"flex",alignItems:"center",height:"50vh",justifyContent:"center"}}>
                <div>
                    <h1 className='welcomeT'>Welcome Friend</h1>
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <p className='connectT'>Signup to stay in touch with us if you dont have an account</p>
                    </div>
                    <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                    <button className='signinB' onClick={signup}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin