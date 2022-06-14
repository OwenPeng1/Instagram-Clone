import React from "react"
import CommentCard from "./CommentCard";
import {useNavigate} from 'react-router-dom';


function PhotoCard({picture, comments, setViewed, currentUser, fetchPhotos, setCommentedPhoto}){

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

function handleComment(){
    setCommentedPhoto(picture)
    navigate("/comment")
}

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
    
    return(
        <li>
            <h1 onClick = {handleClick}>{picture.user.username}</h1>
            <img src = {picture.photo} style={{width: 1200 ,height: 1000}}/>
            <h1>{picture.caption}</h1>
            {picture.likedBy.includes(currentUser.username) ?
                    (<button onClick = {handleUnlike}>❤</button>) :
                    (<button onClick = {handleLike}>♡</button>)
                }
            <button onClick={handleComment}>Add Comment</button>
            <h1>{picture.likedBy.length} likes</h1>
            <ul>
                {photoComments.map(comment => 
                    <CommentCard comment={comment} setViewed={setViewed}/>)}
            </ul>

        </li>
    )

}

export default PhotoCard;