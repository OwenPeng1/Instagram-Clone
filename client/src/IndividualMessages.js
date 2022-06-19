import React from "react"
import Messages from "./Messages"

function IndivudalMessages({message, currentUser}){

    return(
        <li className = {message.recipient ===currentUser.username ? ("receivedMessage") : ('sentMessage')}>
            {message.text}
        </li>
    )

}

export default IndivudalMessages