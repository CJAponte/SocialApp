import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import app from '../../Config/Base'
import { Link } from 'react-router-dom'

import './Signup.css'


const Signup = ({ history }) => {
     
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements;
        try{
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            history.push("/create-profile")

        } catch (error){
            alert(error)
        }
    }, [history])

    return(
        <div className="signUpContainer">
            <div className='signUpFormContainer'>
                <form className='signUpForm' onSubmit={handleSignUp}>
                    <h1>Sign Up</h1>
                    <input type='email' name='email' maxLength="255" placeholder="e-mail"></input>
                    <input type="password" name='password' maxLength="32" placeholder='password'></input>
                    <button type='submit' >Submit</button>
                </form>

                <h3>Already have an account?</h3>
                <h3><Link to='/login'>Sign In</Link></h3>
            </div>
        </div>
    )
}


export default withRouter(Signup)