import React from "react"
import {useNavigate} from 'react-router-dom';

function StoryHeaderItem({user, setViewedStory}){

const navigate = useNavigate()
function handleClick(){
    setViewedStory(user)
    navigate("/stories")
}    
    return(
        <li className="storyBubble" onClick = {handleClick}>
             <img className = "storyBubbleImage" src = {user.profile} style={{width: 60 ,height: 60}}/>
             <h4 id="storyNames">{user.username}</h4>
        </li>
    )

}

export default StoryHeaderItem;