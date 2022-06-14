import React from "react"
import StoryHeaderItem from "./StoryHeaderItem";
import {useNavigate} from 'react-router-dom';

function StoryHeader({users, setViewedStory, currentUser}){

const usersWithoutCurrent = users.filter((user) => user.username!=currentUser.username)
const usersWithStories = usersWithoutCurrent.filter((user) => user.stories)

const navigate = useNavigate()
function handleClick(){
    navigate("./addstory")
}

    return(
        <ul>
            <li onClick = {handleClick}>
                <img src = {currentUser.profile} style={{width: 50 ,height: 50}}/>
            </li>
            {usersWithStories.map(user => (
            <StoryHeaderItem user={user} setViewedStory={setViewedStory} />
                    ))}
        </ul>
    )

}

export default StoryHeader