import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

function CreatePost({currentUser, fetchPhotos}){
const [picture, setPicture] = useState("")
const [caption, setCaption] = useState("")

function handleSubmit(e){
    e.preventDefault()
    const post = {
        photo: picture,
        caption: caption,
        likedBy: [],
        user_id: currentUser.id
    }

    fetch(`/photos`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(post)
      })
      .then(res => res.json())
      .then(res => {console.log(res)
                    fetchPhotos()})}

const navigate = useNavigate()
function handleBack(){
    navigate("/home")
}

    return(
        <main>
            <button onClick = {handleBack}>Cancel</button>
            <div id="createPost">  
                <h1 id="createInstructions">Create a Post</h1>
                {picture? 
                (<img id="imagePreview" src = {picture}  style={{width: 300 ,height: 300}}/>) : (<div></div>)}
                <form onSubmit={handleSubmit}> 
                <input id="createImage" placeholder= "Image URL"onChange={(e) => setPicture(e.target.value)}/>
                <input id="createCaption" placeholder = "Caption" onChange={(e) => setCaption(e.target.value)}/>
                <button id="submitPost"type="submit">Create</button>
                </form>
            </div>
        </main>
    )

}

export default CreatePost;