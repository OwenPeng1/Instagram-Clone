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
            <img id="loginLogo" src = {'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png'}  style={{width: 180 ,height: 60}}/>
            <form id="loginForm" onSubmit={handleSubmit}>
            <input id = "loginUsername"className="loginInput"onChange={handleUserLogin} placeholder = "Username" name="username"/>
            <input id = "loginPassword" className="loginInput" onChange={handleUserLogin} placeholder = "Password" name="password" type="password"/>
            <button id="loginButton" type="submit">Log In</button>
            </form>
            <div id="createUserDiv">    
                <h5 id="createUserText"> Don't have an Account? </h5>
                <NavLink id="signUp" exact to ="/User"> Sign Up! </NavLink>
            </div>
        </div>
        </main>
    )

}

export default Login;