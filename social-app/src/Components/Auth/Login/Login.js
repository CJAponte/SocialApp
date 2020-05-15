import React, { useState} from 'react'
import './Login.css'


function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    return(
        <div className='loginContainer'>
            
            <div className='loginFormContainer'>
                <form className='loginForm'>
                    <h1>Login</h1>
                    <input type="text" placeholder='username'  value={username} onChange={e => setUsername(e.target.value)}></input>
                    <input type="password"  placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button>Submit</button>
                </form>
            </div>

        </div>
    )
}


export default Login