import React from 'react'
import './Signup.css'
import { Router } from 'react-router-dom'


function Signup(){
    return(
        <div className="signUpContainer">

            <div className='signUpFormContainer'>
                <form className='signUpForm'>
                    <h1>Sign Up</h1>
                    <input type='text' placeholder="first name"></input>
                    <input type='text' placeholder="last name"></input>
                    <input type='text' placeholder="e-mail"></input>
                    <input type='text' placeholder='username'></input>
                    <input type="password" placeholder='password'></input>
                    <div className="dateOfBirthField">
                        <input type="number" placeholder='month'></input>
                        <input type="number" placeholder='day'></input>
                        <input type="number" placeholder='year'></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>

        </div>
    )
}


export default Signup