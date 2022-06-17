import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';

function Stories({viewedStory, users, setViewed}){
const [storyIndex, setStoryIndex] = useState(0)

const usersWithStories = users.filter((user) => user.stories)
const usersWithStoriesWithoutViewed = usersWithStories.filter((user)=> user !=viewedStory)
const arrayOfUserStories = []
for (let i=0; i<viewedStory.stories.length; i++){
    arrayOfUserStories.push({
        username: viewedStory.username,
        profile: viewedStory.profile,
        story: viewedStory.stories[i]
    })
}
for(let i=0; i<usersWithStoriesWithoutViewed.length; i++){
    for(let j=0; j<usersWithStoriesWithoutViewed[i].stories.length; j++){
        arrayOfUserStories.push({
            username: usersWithStoriesWithoutViewed[i].username,
            profile: usersWithStoriesWithoutViewed[i].profile,
            story: usersWithStoriesWithoutViewed[i].stories[j]
        })
    }
}
console.log(arrayOfUserStories)
 
const navigate = useNavigate()
function handleClick(){
    if(storyIndex === arrayOfUserStories.length-1){
        navigate("/home")
    }
    setStoryIndex(storyIndex+1)
}

function handleProfile(){
    const clickedUser = users.filter((user) => user.username===arrayOfUserStories[storyIndex].username)
    setViewed(clickedUser[0])
    navigate("/profile")
}

function handleBack(){
    navigate("/home")
}

    return(
        <main>
            <button id="storiesBackButton" onClick={handleBack}>X</button>
            <div id="wholeStory">
                <div id="storiesUserProfile">    
                    <h4 id="storiesUsername" onClick={handleProfile}>{arrayOfUserStories[storyIndex].username}</h4>
                    <img id="storiesProfile" onClick={() => handleProfile()} src = {arrayOfUserStories[storyIndex].profile} style={{width: 30 ,height: 30}}/>
                </div>
                <img id="storyImage" onClick={() => handleClick()}src = {arrayOfUserStories[storyIndex].story} style={{width: 500 ,height: 500}}/>
            </div>
        </main>
    )

}

export default Stories