import React from "react";
import {useNavigate} from 'react-router-dom'

function FollowerTabItem({ users, photos, fetchPhotos, viewed, user,fetchCurrentUser, setViewed, currentUser}){

const navigate = useNavigate()
function handleProfile(){
    setViewed(user)
    navigate("/profile")
}

function handleFollow(){
    fetch(`/update_followers/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            followers: [...user.followers, currentUser.username],
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
                following: [...currentUser.following, user.username],
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {console.log(json)
             fetchPhotos()
             fetchCurrentUser()
             })}

    function handleUnfollow(){
        fetch(`/update_followers/${user.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                    followers: 
                    user.followers.filter((item) => item !==currentUser.username),
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
                currentUser.following.filter((item)=> item !=user.username),
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

                
    return(
        <li id="followerTabItem">
            <img id="followerProfile" onClick={() => handleProfile()} src = {user.profile} style={{width: 50 ,height: 50}}/>
            <h4 id="followerUsername"onClick = {handleProfile}>{user.username}</h4>
            <h4 id="followerName" onClick = {handleProfile}>{user.name}</h4>
            {currentUser.following.includes(user.username) ?
                    (<button  className="followerFollow"onClick = {handleUnfollow}>Unfollow</button>) :
                    (<button  id="followerFollowButton" className="followerFollow"onClick = {handleFollow}>Follow</button>)}
        </li>
    )

}

export default FollowerTabItem;