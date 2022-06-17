import React, {useState} from "react";
import {NavLink} from 'react-router-dom'

function CreateUser(){
const [createUser, setCreateUser] = useState({name:"", username:"", password:""})

    function handleUserInfo(e){
        setCreateUser({...createUser, [e.target.name]: e.target.value})
        }

    function handleSubmit(e){
        e.preventDefault()
            
        fetch(`/users`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(createUser)
            })
            .then(res => res.json())
            .then(user=>{
                  console.log(user)
                }) 
            }
    return(
        <main>
            <div id="createUser">
            <img id="loginLogo" src = {'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png'}  style={{width: 180 ,height: 60}}/>
                <form id="createForm" onSubmit= {handleSubmit}>
                    <input id="createName"className="createInput" placeholder = "Name" onChange ={handleUserInfo} name="name"/>
                    <input id="createUsername" className="createInput"  placeholder = "Username" onChange ={handleUserInfo} name="username"/>
                    <input id="createPassword" onChange ={handleUserInfo} className="createInput" placeholder = "Password" type="password"name="password"/>
                    <button id="signupButton" type="submit">Sign Up</button>
                </form>
                <h4 id="doneSigning">Done Signing Up?</h4>
                <NavLink id="doneCreate"exact to ="/">Login</NavLink>
            </div>
        </main>
    )

}

export default CreateUser;