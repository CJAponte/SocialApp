import React, {useState, useCallback, useContext} from 'react'
import firebase from '../Config/Base'
import { Redirect } from 'react-router'

import { AuthContext } from '../Auth/Auth/Auth'

import './CreateProfile.css'

const CreateProfile = ( {history} ) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [birthMonth, setBirthMonth] = useState('')
    const [birthYear, setBirthYear] = useState('')
    const [hasProfile, setHasProfile] = useState('false')

    const { currentUser } = useContext(AuthContext)

    const handleProfileCreation = useCallback(async event => {
        event.preventDefault()
        
        try{
            await firebase
                .firestore()
                .collection('Users')
                .doc(currentUser.uid)
                .set({
                    birthDay: birthDay,
                    birthMonth: birthMonth,
                    birthYear: birthYear,
                    firstName: firstName,
                    lastName: lastName,
                    uid: currentUser.uid,
                    userName: userName
                })
            history.push('/')
        } catch(error){
            alert(error)
        }
    })

    if(currentUser){
        firebase.firestore().collection('Users').doc(currentUser.uid).get().then(function(doc){if(doc.exists){setHasProfile(true)}})
        if(hasProfile === true){
            return <Redirect to='/' />
        }
    }

    return (
        <div className='createProfile'>
            <h1>Create Your Profile</h1>

            <form className='createProfileForm' onSubmit={handleProfileCreation}>
                <input type="text" placeholder="first name" onChange={e => setFirstName(e.target.value)}></input>
                <input type="text" placeholder="last name" onChange={e => setLastName(e.target.value)}></input>
                <input type="text" placeholder="username" onChange={e => setUserName(e.target.value)}></input>

                <div className='createProfileBirthdayField'>
                    <input type="numbers" placeholder="month" onChange={e => setBirthMonth(e.target.value)}></input>
                    <input type="numbers" placeholder="day" onChange={e => setBirthDay(e.target.value)}></input>
                    <input type="numbers" placeholder="year" onChange={e => setBirthYear(e.target.value)}></input>
                </div>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default CreateProfile