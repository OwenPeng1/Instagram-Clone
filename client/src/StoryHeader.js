import React from "react"
import StoryHeaderItem from "./StoryHeaderItem";
import {useNavigate} from 'react-router-dom';

function StoryHeader({users, setViewedStory}){

const usersWithStories = users.filter((user) => user.stories)

    return(
        <ul>
            {usersWithStories.map(user => (
            <StoryHeaderItem user={user} setViewedStory={setViewedStory} />
                    ))}
        </ul>
    )

}

export default StoryHeader