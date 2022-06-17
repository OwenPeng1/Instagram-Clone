import React from "react"
import {useNavigate} from 'react-router-dom';


function CommentCard({comment, setViewed}){

    const navigate = useNavigate()
    function handleClick(){
        setViewed(comment.user)
        navigate("/profile")}

    return(
        <li>
            <span id="commentUsername" onClick = {handleClick}>{comment.user.username} </span>
            <span>{comment.text}</span> 
        </li>
    )

}

export default CommentCard;