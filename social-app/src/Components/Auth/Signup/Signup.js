import React, { useState, useCallback, useEffect } from 'react'
import { withRouter } from 'react-router'
import app from '../../Config/Base'
import firestore from '../../Config/Base'
import { Link } from 'react-router-dom'

import './Signup.css'


const Signup = ({ history }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [year, setYear] = useState("")
    const [uid, setUid] = useState("")
     
    const onChangeHandler = event => {
        event.target.value
    }
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements;
        try{
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(function(data){setUid(data.user.uid)})
            history.push("/")

        } catch (error){
            alert(error)
            console.log(error)
        }
        

        console.log("firestore?", app.firestore().collection("Users").doc('Ty5ygZycDa9peIFH8CL8').get())

    }, [history])


    return(
        <div className="signUpContainer">
            <div className='signUpFormContainer'>
                <form className='signUpForm' onSubmit={handleSignUp}>
                    <h1>Sign Up</h1>
                    <input type='text' maxLength="16" placeholder="first name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                    <input type='text' maxLength="24" placeholder="last name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                        <input type='email' name='email' maxLength="255" placeholder="e-mail"></input>
                    <input type='text' maxLength="16" placeholder='username' value={username} onChange={e => setUsername(e.target.value)}></input>
                        <input type="password" name='password' maxLength="32" placeholder='password'></input>
                    <div className="dateOfBirthField">
                        <h3 className="birthdayTitle">Birthday</h3>
                        <input type="number" placeholder='month' value={month} onChange={e => setMonth(e.target.value)}></input>
                        <input type="number" placeholder='day' value={day} onChange={e => setDay(e.target.value)}></input>
                        <input type="number" placeholder='year' value={year} onChange={e => setYear(e.target.value)}></input>
                    </div>
                    <button type='submit' onClick={createAccountDoc}>Submit</button>
                </form>

                <h3>Already have an account?</h3>
                <h3><Link to='/login'>Sign In</Link></h3>
            </div>
        </div>
    )
}


export default withRouter(Signup)