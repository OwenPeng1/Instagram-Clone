import React from "react"

function CommentCard({comment}){

    return(
        <li>
            {comment.user.username} {comment.text}
        </li>
    )

}

export default CommentCard;