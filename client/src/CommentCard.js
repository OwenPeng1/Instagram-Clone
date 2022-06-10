import React from "react"
import {useNavigate} from 'react-router-dom';


function CommentCard({comment, setViewed}){

    const navigate = useNavigate()
    function handleClick(){
        setViewed(comment.user)
        navigate("/profile")}

    return(
        <li>
            <h3 onClick = {handleClick}>{comment.user.username}</h3>
            <h3>{comment.text}</h3> 
        </li>
    )

}

export default CommentCard;