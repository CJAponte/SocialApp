import React, { useState } from 'react'
import './Signup.css'
import { Router } from 'react-router-dom'


function Signup(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [year, setYear] = useState("")
    const [dateOfBirth, setDateOfbirth] = useState("")

    function dateOfBirthConversion(){
        return setDateOfbirth(`${month}${day}${year}`)
    }
    
    return(
        <div className="signUpContainer">
            <div className='signUpFormContainer'>
                <form className='signUpForm'>
                    <h1>Sign Up</h1>
                    <input type='text' maxLength="16" placeholder="first name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                    <input type='text' maxLength="24" placeholder="last name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                    <input type='text' maxLength="255"placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input type='text' maxLength="16" placeholder='username' value={username} onChange={e => setUsername(e.target.value)}></input>
                    <input type="password" maxLength="32" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <div className="dateOfBirthField">
                        <input type="number" placeholder='month' value={month} onChange={e => setMonth(e.target.value)}></input>
                        <input type="number" placeholder='day' value={day} onChange={e => setDay(e.target.value)}></input>
                        <input type="number" placeholder='year' value={year} onChange={e => setYear(e.target.value)}></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Signup