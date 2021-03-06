import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';

function ProfileStories({viewed, currentUser}){
const [storyIndex, setStoryIndex] = useState(0)

const stories = []
for(let i=0; i<viewed.stories.length; i++){
    stories.push(viewed.stories[i])
}

const navigate = useNavigate()
function handleClick(){
    if(storyIndex === stories.length-1){
        if(viewed.username === currentUser.username){
            navigate("/userProfile")
        }
        else {
        navigate("/profile")}
    }
    setStoryIndex(storyIndex+1)
}

function handleBack(){
    navigate("/profile")
}

    return(
        <main>
            <button id="storiesBackButton" onClick={handleBack}>X</button>
            <div id="wholeStory">
                <div>    
                    <h4 id="storiesUsername">{viewed.username}</h4>
                    <img id="storiesProfile" src = {viewed.profile} style={{width: 30 ,height: 30}}/>
                </div>
                <img id="storyImage" src = {stories[storyIndex]} onClick={() => handleClick()} style={{width: 500 ,height: 500}}/>
            </div>
        </main>
    )

}

export default ProfileStories;