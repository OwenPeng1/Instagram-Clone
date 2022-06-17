import React, {useState} from "react"
import CommentCard from "./CommentCard";
import {useNavigate} from 'react-router-dom';


function PhotoCard({picture, comments, setViewed, currentUser, fetchPhotos, fetchComments, setViewedStory, setViewedPicture}){
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
function handleStory(){
    setViewedStory(picture.user)
    setViewed(picture.user)
    navigate("/homeStory")
}    

function handleComment(){
    setViewedPicture(picture)
    navigate('/homeComment')
}


    return(
        <li>
            <div id="wholePost">
                <div id="usernameProfile">
                    <img id="homeProfile" src = {picture.user.profile} onClick={() => handleStory()} style={{width: 35 ,height: 35}}/>
                    <h3  id="homeUsername" onClick = {handleClick}>{picture.user.username}</h3>
                </div>
                <img src = {picture.photo} style={{width: 610 ,height: 600}}/>
                <div id="photoButtons">    
                    {picture.likedBy.includes(currentUser.username) ?
                            (<button className="likeButton" onClick = {handleUnlike}>❤</button>) :
                            (<button className="likeButton" onClick = {handleLike}>♡</button>)
                        }
                    <img id="commentButton" src = {'https://static.thenounproject.com/png/3460458-200.png'} onClick={() => handleComment()} style={{width: 30 ,height: 30}}/>
                </div>
                <div id="commentsLikes">
                    {picture.likedBy.length === 1 ?
                    (<h4>1 like</h4>): (<h4>{`${picture.likedBy.length} likes`}</h4>)}
                    <div id="captionDiv">    
                        <span id="captionUsername" onClick={handleClick}>{picture.user.username} </span>
                        <span>{picture.caption}</span>
                    </div>
                    <ul>
                        {photoComments.map(comment => 
                            <CommentCard comment={comment} setViewed={setViewed}/>)}
                    </ul>
                </div>
                <form id="addCommentDiv" onSubmit={handleSubmit}>
                    <input id="photoAddComment" type="text" value={newCommentText} placeholder="Add a comment" onChange={(e) => setNewCommentText(e.target.value)}/>
                    <button id="commentPost" type="submit" onSubmit={handleSubmit}>Post</button>
                </form>
            </div>
        </li>
    )

}

export default PhotoCard;