import React from "react"
import {useNavigate} from 'react-router-dom';
import PhotoCard from "./PhotoCard";
import StoryHeader from "./StoryHeader";
import Search from "./Search";


function PhotoContainer({comments, photos, currentUser, setViewed, fetchPhotos, setCommentedPhoto, users, setViewedStory}){

const navigate = useNavigate()
function handleProfile(){
    navigate('/userProfile')
}

function handleCreate(){
    navigate('/createPost')
}


    return(
        <main>
            <h1>Hello {currentUser.name}</h1>
            <Search users={users} setViewed={setViewed}/>
            <StoryHeader users={users} setViewedStory={setViewedStory} currentUser={currentUser} />
            <img src = {currentUser.profile} onClick={() => handleProfile()} style={{width: 50 ,height: 50}}/>
            <button onClick = {handleCreate}>+</button>
            <ul>
                {photos.map(picture => 
                    <PhotoCard picture ={picture} comments={comments} setViewed={setViewed} currentUser={currentUser} fetchPhotos={fetchPhotos} setCommentedPhoto={setCommentedPhoto}/>
                )}
            </ul>
        </main>
    )

}

export default PhotoContainer;