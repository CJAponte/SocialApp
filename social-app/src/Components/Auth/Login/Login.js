import React, { useCallback, useContext} from 'react'
import app from '../../Config/Base'
import { AuthContext } from '../Auth/Auth'
import {withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

import './Login.css'


const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push('/')
            } catch (error){
                alert(error)
            }
        },
        [history]
    )

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to='/' />
    }
    
    return(
        <div className='loginContainer'>
            
            <div className='loginFormContainer'>
                <form className='loginForm' onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input type="email" name='email' placeholder='email' ></input>
                    <input type="password"  name='password' placeholder='password' ></input>
                    <button type='submit'>Submit</button>
                </form>
                <h3>Don't have an account?</h3>
                <h3><Link to='/signup'>Sign Up</Link></h3>
            </div>
            
        </div>
    )
}


export default withRouter(Login)