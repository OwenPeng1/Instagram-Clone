import React, {useState} from "react"
import CommentCard from "./CommentCard"
import {useNavigate} from 'react-router-dom';

function HomeComment({viewedPicture, viewed, currentUser, comments, setViewed, fetchPhotos, setCommentedPhoto, fetchComments}){
const [newCommentText, setNewCommentText]= useState("")

    const photoComments = []
    for (let i=0; i<comments.length; i++){
        if(comments[i].photo.id === viewedPicture.id){
            photoComments.push(comments[i])
        }}   

    const navigate = useNavigate()
    function handleClick(){
        setViewed(viewedPicture.user)
        navigate("/profile")
        }  
        
    function handleComment(){
        setCommentedPhoto(viewedPicture)
        navigate("/comment")
        }
        
    function handleLike(){
        fetch(`/update_likedBy/${viewedPicture.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                likedBy: [...viewedPicture.likedBy, currentUser.username],
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
        fetch(`/update_likedBy/${viewedPicture.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                likedBy: 
                viewedPicture.likedBy.filter((item) => item !==currentUser.username),
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
    
    function handleSubmit(e){
        e.preventDefault()
        const newComment = {
            text: newCommentText,
            user_id: currentUser.id,
            photo_id: viewedPicture.id
                    }
                    
        fetch('/comments',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newComment)
              })
            .then(res => res.json())
            .then(res => {console.log(res)
            fetchComments()})}

    function handleBack(){
        navigate('/home')
    }   
        
    return(
        <main>
            <button className="backButton"onClick = {handleBack}>X</button>
            <div id="viewedPhotoDiv"> 
                <img id="viewedPicture" src = {viewedPicture.photo} style={{width: 800 ,height: 800}}/>
            </div>
            <div id="displayedWords"> 
                <img id="viewedPictureProfile" src = {viewedPicture.user.profile} style={{width: 30 ,height: 30}}/>  
                <h4 id="topViewedPictureUsername" onClick = {handleClick}>{viewedPicture.user.username}</h4>
                <div id="captionDiv">
                    <span id="captionUsername">{viewedPicture.user.username} </span>
                    <span>{viewedPicture.caption}</span>
                </div>
                <ul id="viewedPictureCaptions">
                {photoComments.map(comment => 
                        <CommentCard comment={comment} setViewed={setViewed}/>)}
                </ul >
                {viewedPicture.likedBy.includes(currentUser.username) ?
                        (<button onClick = {handleUnlike}>❤</button>) :
                        (<button onClick = {handleLike}>♡</button>)
                    }
                {viewedPicture.likedBy.length === 1 ?
                    (<h4>1 like</h4>): (<h4>{`${viewedPicture.likedBy.length} likes`}</h4>)}
                <form onSubmit={handleSubmit}>
                    <input type="text" value={newCommentText} placeholder="Add a new comment" onChange={(e) => setNewCommentText(e.target.value)}/>
                    <button  type="submit" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </main>
    )

}

export default HomeComment;