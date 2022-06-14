import React from "react"
import {useNavigate} from 'react-router-dom';
import ProfilePicture from "./ProfilePicture"

function Profile({viewed,photos, currentUser, fetchPhotos,fetchCurrentUser, setActiveTab, fetchUsers, setViewedPicture}){

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
    function handleBack(){
        navigate("/home")
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
                <button onClick = {handleBack}>Back</button>
                <h1>{viewed.username}</h1>
                <h1>{userPhotos.length} Posts</h1>
                <h1 onClick={handleFollowing}>{userPhotos[0].user.following.length} following</h1>
                <h1 onClick={handleFollowers}>{userPhotos[0].user.followers.length} followers</h1>
                <h1>{viewed.bio}</h1>
                <img onClick={handleStories} src = {viewed.profile} style={{width: 300 ,height: 300}}/>
                 {userPhotos[0].user.followers.includes(currentUser.username) ?
                    (<button onClick = {handleUnfollow}>Unfollow</button>) :
                    (<button onClick = {handleFollow}>Follow</button>)
                }
                <ul>
                {userPhotos.map(picture => 
                    <ProfilePicture picture ={picture} setViewedPicture={setViewedPicture}/>
                )}
                </ul>
            </div>
        </main>
    )

}

export default Profile;