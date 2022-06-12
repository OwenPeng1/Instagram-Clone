import React from "react"
import {useNavigate} from 'react-router-dom';

function StoryHeaderItem({user, setViewedStory}){

const navigate = useNavigate()
function handleClick(){
    setViewedStory(user)
    navigate("/stories")
}    
    return(
        <li onClick = {handleClick}>
             <img src = {user.profile} style={{width: 50 ,height: 50}}/>
        </li>
    )

}

export default StoryHeaderItem;