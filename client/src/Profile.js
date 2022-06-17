import React from "react"
import {useNavigate} from 'react-router-dom';
import ProfilePicture from "./ProfilePicture"
import Header from "./Header";

function Profile({viewed,photos, currentUser, fetchPhotos,fetchCurrentUser, setActiveTab, fetchUsers, setViewedPicture, setViewed, users}){

const userPhotos = []
for (let i=0; i<photos.length; i++){
    if(photos[i].user.id === viewed.id){
        userPhotos.push(photos[i])}}

const currentUserPhotos = []
    for (let i=0; i<photos.length; i++){
        if(photos[i].user.id === currentUser.id){
            currentUserPhotos.push(photos[i])}}

function handleFollow(){
    fetch(`/update_followers/${viewed.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            followers: [...userPhotos[0].user.followers, currentUser.username],
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {console.log(json)
            fetchPhotos()
            fetchCurrentUser()
            })
    
    fetch(`/update_following/${currentUser.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                following: [...currentUserPhotos[0].user.following, viewed.username],
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {console.log(json)
             fetchPhotos()
             fetchCurrentUser()
             })
    }
    const navigate = useNavigate()

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
 
    function handleUnfollow(){
        fetch(`/update_followers/${viewed.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                followers: 
                viewed.followers.filter((item) => item !==currentUser.username),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {console.log(json)
            fetchPhotos()
            fetchCurrentUser()
            })
        
        fetch(`/update_following/${currentUser.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    following: 
                    currentUser.following.filter((item)=> item !=viewed.username),
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {console.log(json)
                fetchPhotos()
                fetchCurrentUser()
                })
        }

function handleStories(){
    if (viewed.stories){
        navigate("/profileStories")
    }
}

    return(
        <main>
            <div>
            <Header setViewed={setViewed} currentUser={currentUser} users={users}/>
                <div id="profileInfo">
                    <h1 id="profileUsername">{viewed.username}</h1>
                    {userPhotos[0].user.followers.includes(currentUser.username) ?
                    (<button className="followButton" onClick = {handleUnfollow}>Unfollow</button>) :
                    (<button id="followButton" className="followButton" onClick = {handleFollow}>Follow</button>)
                    }  
                    <div id="countsDiv">
                        <span className="userCounts">{userPhotos.length} Posts</span>
                        <span className="userCounts" onClick={handleFollowing}>{userPhotos[0].user.following.length} following</span>
                        <span className="userCounts" onClick={handleFollowers}>{userPhotos[0].user.followers.length} followers</span>
                    </div>
                    <h3>{viewed.name}</h3>
                    <h3 id="profileBio">{viewed.bio}</h3>
                     
                </div>
                <img id="profileProfilePicture" onClick={handleStories} src = {viewed.profile} style={{width: 175 ,height: 175}}/>
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

export default Profile;