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
            <button onClick = {handleBack}>Back</button>
            <form onSubmit={handleSubmit}>
            <h2>Image URL</h2>
            <input onChange={(e) => setPicture(e.target.value)}/>
            <h2>Image Caption</h2>
            <input onChange={(e) => setCaption(e.target.value)}/>
            <button type="submit">Create</button>
            </form>
        </main>
    )

}

export default CreatePost;