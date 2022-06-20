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
            <div id="addStory">  
                <h2 id="storyInstructions">Add Story</h2>
                {picture? 
                    (<img id="imagePreview" src = {picture}  style={{width: 300 ,height: 300}}/>) : (<div></div>)}
                <button id="storyBackButton" onClick = {handleBack}>Cancel</button>
                <form onSubmit={handleSubmit}>
                <input id="storyInput"placeholder="Image URL" onChange={(e) => setPicture(e.target.value)}/>
                <button  id="storySubmit" type="submit">Add Story</button>
                </form>
            </div>
        </main>
    )

}

export default CreateStory;