import React from "react"
import StoryHeaderItem from "./StoryHeaderItem";
import {useNavigate} from 'react-router-dom';

function StoryHeader({users, setViewedStory, currentUser}){

const usersWithoutCurrent = users.filter((user) => user.username!=currentUser.username)
const usersWithStories = usersWithoutCurrent.filter((user) => user.stories)

const navigate = useNavigate()
function handleClick(){
    navigate("/addstory")
}

    return(
        <div id= "storiesDiv">
            <ul id="storiesList">
                <li onClick = {handleClick}>
                    <img className = "userBubble" src = {currentUser.profile} style={{width: 60 ,height: 60}}/>
                    <h4 className="userName">{currentUser.username}</h4>
                </li>
                {usersWithStories.map(user => (
                <StoryHeaderItem user={user} setViewedStory={setViewedStory} />
                        ))}
            </ul>
        </div>
    )

}

export default StoryHeader