import React from "react"
import {useNavigate} from 'react-router-dom';
import ProfilePicture from "./ProfilePicture"

function UserProfile({currentUser, setActiveTab, fetchUsers, photos, setViewedPicture}){

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
        navigate("/profileStories")
        }}

    return(
        <main>
            <div>
                <button onClick = {handleBack}>Back</button>
                <h1>{currentUser.username}</h1>
                <h1>{userPhotos.length} Posts</h1>
                <h1 onClick={handleFollowing}>{currentUser.following.length} following</h1>
                <h1 onClick={handleFollowers}>{currentUser.followers.length} followers</h1>
                <h1>{currentUser.bio}</h1>
                <img onClick={handleStories} src = {currentUser.profile} style={{width: 300 ,height: 300}}/>
                <button onClick = {handleEdit}>Edit Profile</button>
                <ul>
                {userPhotos.map(picture => 
                    <ProfilePicture picture ={picture} setViewedPicture={setViewedPicture}/>
                )}
                </ul>
            </div>
        </main>
    )

}

export default UserProfile;