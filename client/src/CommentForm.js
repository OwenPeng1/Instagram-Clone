import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import CommentCard from "./CommentCard";

function CommentForm({comments, commentedPhoto, setViewed, fetchComments, currentUser}){
    const [newCommentText, setNewCommentText]= useState("")

    const photoComments = []
    for (let i=0; i<comments.length; i++){
        if(comments[i].photo.id === commentedPhoto.id){
            photoComments.push(comments[i])}}

    const navigate = useNavigate()        
    function handleBack(){
        navigate("/home")
    }

    function handleSubmit(e){
        e.preventDefault()
        const newComment = {
            text: newCommentText,
            user_id: currentUser.id,
            photo_id: commentedPhoto.id
        }
        
        fetch('/comments',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newComment)
          })
          .then(res => res.json())
          .then(res => {console.log(res)
          fetchComments()})
        
        
    }
    return(
        <main>
            <button onClick = {handleBack}>Back</button>
            <ul>
            {photoComments.map(comment => 
                    <CommentCard comment={comment} setViewed={setViewed}/>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newCommentText} placeholder="Add a new comment" onChange={(e) => setNewCommentText(e.target.value)}/>
                <button  type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>

        </main>
    )

}

export default CommentForm;