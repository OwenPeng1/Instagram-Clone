import React, {useState} from "react"
import CommentCard from "./CommentCard";
import {useNavigate} from 'react-router-dom';


function PhotoCard({picture, comments, setViewed, currentUser, fetchPhotos, fetchComments, setViewedStory}){
const [newCommentText, setNewCommentText]= useState("")

const photoComments = []
for (let i=0; i<comments.length; i++){
    if(comments[i].photo.id === picture.id){
        photoComments.push(comments[i])
    }}    
const navigate = useNavigate()
function handleClick(){
    if(picture.user.username === currentUser.username){
        navigate("/userProfile")
    }
    else{
    setViewed(picture.user)
    navigate("/profile")}
}  

function handleSubmit(e){
    e.preventDefault()
    const newComment = {
        text: newCommentText,
        user_id: currentUser.id,
        photo_id: picture.id
    }
    
    fetch('/comments',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(newComment)
      })
      .then(res => res.json())
      .then(res => {console.log(res)
      fetchComments()})}

function handleLike(){
    fetch(`/update_likedBy/${picture.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            likedBy: [...picture.likedBy, currentUser.username],
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {console.log(json)
            fetchPhotos()
            })
}

function handleUnlike(){
    fetch(`/update_likedBy/${picture.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            likedBy: 
            picture.likedBy.filter((item) => item !==currentUser.username),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {console.log(json)
            fetchPhotos()
            })
}
function handleClick(){
    setViewedStory(picture.user)
    navigate("/stories")
}    
    
    return(
        <li>
            <div id="wholePost">
                <div id="usernameProfile">
                    <img id="homeProfile" src = {picture.user.profile} style={{width: 35 ,height: 35}}/>
                    <h3  id="homeUsername" onClick = {handleClick}>{picture.user.username}</h3>
                </div>
                <img src = {picture.photo} style={{width: 610 ,height: 600}}/>
                {picture.likedBy.includes(currentUser.username) ?
                        (<button onClick = {handleUnlike}>❤</button>) :
                        (<button onClick = {handleLike}>♡</button>)
                    }
                <h1>{picture.likedBy.length} likes</h1>
                <h1>{picture.caption}</h1>
                <ul>
                    {photoComments.map(comment => 
                        <CommentCard comment={comment} setViewed={setViewed}/>)}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={newCommentText} placeholder="Add a new comment" onChange={(e) => setNewCommentText(e.target.value)}/>
                    <button id="commentPost" type="submit" onSubmit={handleSubmit}>Post</button>
                </form>
            </div>
        </li>
    )

}

export default PhotoCard;