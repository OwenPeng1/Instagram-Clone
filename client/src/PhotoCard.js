import React from "react"
import CommentCard from "./CommentCard";

function PhotoCard({picture, comments}){

const photoComments = []
for (let i=0; i<comments.length; i++){
    if(comments[i].photo.id === picture.id){
        photoComments.push(comments[i])
    }
}    
    return(
        <li>
            <h1>{picture.user.username}</h1>
            <img src = {picture.photo} style={{width: 1200 ,height: 1000}}/>
            <h1>{picture.likedBy.length} likes</h1>
            <ul>
                {photoComments.map(comment => 
                    <CommentCard comment={comment}/>)}
            </ul>

        </li>
    )

}

export default PhotoCard;