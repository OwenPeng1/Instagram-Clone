import React from "react"
import CommentCard from "./CommentCard";
import {useNavigate, NavLink} from 'react-router-dom';


function PhotoCard({picture, comments, setViewed}){

const photoComments = []
for (let i=0; i<comments.length; i++){
    if(comments[i].photo.id === picture.id){
        photoComments.push(comments[i])
    }}    
const navigate = useNavigate()
function handleClick(){
    setViewed(picture.user)
    navigate("/profile")

}  
    
    return(
        <li>
            <h1 onClick = {handleClick}>{picture.user.username}</h1>
            <img src = {picture.photo} style={{width: 1200 ,height: 1000}}/>
            <h1>{picture.caption}</h1>
            <h1>{picture.likedBy.length} likes</h1>
            <ul>
                {photoComments.map(comment => 
                    <CommentCard comment={comment} setViewed={setViewed}/>)}
            </ul>

        </li>
    )

}

export default PhotoCard;