import React from "react"
import {useNavigate} from 'react-router-dom';
import ProfilePicture from "./ProfilePicture"
import Header from "./Header";

function UserProfile({currentUser, setActiveTab, fetchUsers, photos, setViewedPicture, setViewed, users}){

const navigate = useNavigate()
function handleEdit(){
    navigate("/edit")
}  

function handleFollowers(){
    setActiveTab("followers")
    fetchUsers()
    navigate("/tabs")
}

function handleFollowing(){
    fetchUsers()
    setActiveTab("following")
    navigate("/tabs")
}

function handleBack(){
    navigate("/home")
}
    
const userPhotos = []
for (let i=0; i<photos.length; i++){
    if(photos[i].user.id === currentUser.id){
        userPhotos.push(photos[i])}}

function handleStories(){
    if (currentUser.stories){
        setViewed(currentUser)
        navigate("/profileStories")
        }}

    return(
        <main>
            <div>
                <Header setViewed={setViewed} currentUser={currentUser} users={users}/>
                <div id="profileInfo">
                    <h1 id="profileUsername">{currentUser.username}</h1>
                    <button className="followButton" onClick = {handleEdit}>Edit Profile</button>
                    <div id="countsDiv">
                        <span className="userCounts">{userPhotos.length} Posts</span>
                        <span className="userCounts" onClick={handleFollowing}>{currentUser.following.length} following</span>
                        <span className="userCounts" onClick={handleFollowers}>{currentUser.followers.length} followers</span>
                    </div>
                    <h3>{currentUser.name}</h3>
                    <h3 id="profileBio">{currentUser.bio}</h3>
                  </div>
                  <img id="profileProfilePicture" onClick={handleStories} src = {currentUser.profile} style={{width: 175 ,height: 175}}/>
                  <div id="profilePictureDiv"> 
                    <ul id="profilePictureList">
                    {userPhotos.map(picture => 
                        <ProfilePicture picture ={picture} setViewedPicture={setViewedPicture}/>
                    )}
                    </ul>
                </div>
            </div>
        </main>
    )

}

export default UserProfile;