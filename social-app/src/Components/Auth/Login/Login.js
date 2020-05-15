import React from 'react'
import './Login.css'


function Login(){
    return(
        <div className='loginContainer'>
            
            <div className='loginFormContainer'>
                <form className='loginForm'>
                    <h1>Login</h1>
                    <input placeholder='username'></input>
                    <input placeholder='password' type="password"></input>
                    <button>Submit</button>
                </form>
            </div>

        </div>
    )
}


export default Login