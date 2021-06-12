import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';

import { FirebaseContext } from '../../store/FirebaseContext';
import {useHistory} from 'react-router-dom'

export default function Signup() {
  const history= useHistory()
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [phoneno, setphoneno] = useState('')
  const [password, setpassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
  
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result) =>{
    result.user.updateProfile({displayName:username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phoneno:phoneno,


      }).then(()=>{
       history.push("/login")
      })

    })
  })
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phoneno}
            onChange={(e)=>setphoneno(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
