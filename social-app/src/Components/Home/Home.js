import React, { useContext, useState, useEffect} from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import app from '../Config/Base'
import firebase from '../Config/Base'
import { Redirect } from 'react-router'
import { AuthContext } from '../Auth/Auth/Auth'



const Home = () => {
    const [userData, setUserData] = useState([])
    
    const { currentUser } = useContext(AuthContext)

    useEffect(()=>{
        if(currentUser){
        const unsubscribe = firebase.firestore().collection('Users').doc(currentUser.uid).get()
        console.log(unsubscribe)
        // return () => unsubscribe()
        }
    })
    
    if (!currentUser) {
        return <Redirect to='/' />
    }


    return(
        <div className="homeContainer">

        <nav className='navContainer'>
          <ul className='navList'>
            <Link to="/login" className="signoutButton" onClick={
                () =>{
                    app.auth().signOut()
                }
            }>Sign Out</Link>
          </ul>
        </nav>
        <div className="homeBody">
            <h1>Home Page</h1>
            <h1></h1>
        </div>
        </div>
    )
}


export default Home