import React from "react"
import {useNavigate} from 'react-router-dom';
import PhotoCard from "./PhotoCard";
import StoryHeader from "./StoryHeader";
import Search from "./Search";
import Header from "./Header";

function PhotoContainer({comments, photos, currentUser, setViewed, fetchPhotos, setCommentedPhoto, users, setViewedStory, fetchComments, setViewedPicture, setActiveTab}){

const navigate = useNavigate()
function handleProfile(){
    setViewed(currentUser)
    navigate('/userProfile')
}

function handleCreate(){
    navigate('/createPost')
}


    return(
        <main className = "homeScreen">
            <Header setViewed={setViewed} currentUser={currentUser} users={users}/>
            <StoryHeader users={users} setViewedStory={setViewedStory} currentUser={currentUser} />
            <ul id="pictures">
                {photos.map(picture => 
                    <PhotoCard picture ={picture} comments={comments} setViewed={setViewed} currentUser={currentUser} fetchPhotos={fetchPhotos} setCommentedPhoto={setCommentedPhoto} fetchComments={fetchComments} setViewedStory={setViewedStory} setViewedPicture={setViewedPicture} setActiveTab={setActiveTab}/>
                )}
            </ul>
        </main>
    )

}

export default PhotoContainer;