import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

function CreateStory({currentUser, fetchUsers}){
const [picture, setPicture] = useState("")

const navigate = useNavigate()
function handleBack(){
    navigate("/home")}

function handleSubmit(e){
    e.preventDefault()
    fetch(`/update_stories/${currentUser.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            stories: [...currentUser.stories, picture]
            
            }),
        headers: {
             'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {console.log(json)
            fetchUsers()
             })}
    return(
        <main>
            <img src = {picture} style={{width: 400 ,height: 400}}/>
            <button onClick = {handleBack}>Back</button>
            <form onSubmit={handleSubmit}>
            <h2>Image URL</h2>
            <input onChange={(e) => setPicture(e.target.value)}/>
            <button type="submit">Add Story</button>
            </form>
        </main>
    )

}

export default CreateStory;