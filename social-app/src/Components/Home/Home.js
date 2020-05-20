import React, { useContext } from 'react'
import './Home.css'
import {
    Link
  } from 'react-router-dom'
import app from '../Config/Base'
import { Redirect } from 'react-router'
import { AuthContext } from '../Auth/Auth/Auth'



const Home = () => {


    const { currentUser } = useContext(AuthContext)

    if (!currentUser) {
        return <Redirect to='/' />
    }

    console.log(currentUser)
    return(
        <div className="homeContainer">

        <nav className='navContainer'>
          <ul className='navList'>
            {/* <Link to="/login" className='loginButton'>Login</Link>
            <Link to="/signup" className='signupButton'>Sign-Up</Link> */}
            <Link to="/login" className="signoutButton" onClick={
                () =>{
                    app.auth().signOut()
                    console.log('test', currentUser)
                }
            }>Sign Out</Link>
          </ul>
        </nav>
        <div className="homeBody">
            <h1>Home Page</h1>
        </div>
        </div>
    )
}


export default Home