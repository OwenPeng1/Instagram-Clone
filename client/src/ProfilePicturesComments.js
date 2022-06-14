import React, {useState} from "react"
import CommentCard from "./CommentCard"
import {useNavigate} from 'react-router-dom';

function ProfilePicturesComments({viewedPicture, viewed, currentUser, comments, setViewed, fetchPhotos, setCommentedPhoto, fetchComments}){
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
        navigate('/profile')
    }   
        
    return(
        <main>
            <button onClick = {handleBack}>Back</button>
            <h1 onClick = {handleClick}>{viewedPicture.user.username}</h1>
            <img src = {viewedPicture.photo} style={{width: 1200 ,height: 1000}}/>
            <h1>{viewedPicture.caption}</h1>
            {viewedPicture.likedBy.includes(currentUser.username) ?
                    (<button onClick = {handleUnlike}>❤</button>) :
                    (<button onClick = {handleLike}>♡</button>)
                }
            <button onClick={handleComment}>Add Comment</button>
            <h1>{viewedPicture.likedBy.length} likes</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newCommentText} placeholder="Add a new comment" onChange={(e) => setNewCommentText(e.target.value)}/>
                <button  type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </main>
    )

}

export default ProfilePicturesComments;