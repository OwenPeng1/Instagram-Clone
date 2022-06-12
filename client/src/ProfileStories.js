import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';

function ProfileStories({viewed}){
const [storyIndex, setStoryIndex] = useState(0)

const stories = []
for(let i=0; i<viewed.stories.length; i++){
    stories.push(viewed.stories[i])
}

const navigate = useNavigate()
function handleClick(){
    if(storyIndex === stories.length-1){
        navigate("/profile")
    }
    setStoryIndex(storyIndex+1)
}

    return(
        <main>
            <div onClick={handleClick}>
                <h1>{viewed.username}</h1>
                <img src = {viewed.profile} style={{width: 50 ,height: 50}}/>
                <img src = {stories[storyIndex]} style={{width: 1000 ,height: 1000}}/>
            </div>
        </main>
    )

}

export default ProfileStories;