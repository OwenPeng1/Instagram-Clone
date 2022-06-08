import React, {useState} from "react"
import {useNavigate, NavLink} from 'react-router-dom';

function Login({user, setCurrentUser, setUser}){

    const [error, setError] = useState([])

    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                setCurrentUser(user)
                navigate('/home')
              })
              
            } else {
              res.json()
              .then(json => {setError(json.error)
            })
            }
          })}

    function handleUserLogin(e){
        setUser({...user, [e.target.name]: e.target.value})
          }

    return(
        <main>
            <div className="Login">
        <h1  id="welcomeLogin">Welcome </h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <h2>Username</h2>
          <input className="loginInput"onChange={handleUserLogin} name="username"/>
          <h2>Password</h2>
          <input className="loginInput" onChange={handleUserLogin} name="password" type="password"/>
          <input type="submit"/>
        </form>
        <h3> Don't have an Account? </h3>
        {error?<div>{error}</div>:null}
        <NavLink id="signUp" exact to ="/User"> Sign Up! </NavLink>
        </div>
        </main>
    )

}

export default Login;