import React from "react"
import ProfilePicture from "./ProfilePicture"

function Profile({viewed,photos, currentUser, fetchPhotos, fetchCurrentUser}){

const userPhotos = []
for (let i=0; i<photos.length; i++){
    if(photos[i].user.id === viewed.id){
        userPhotos.push(photos[i])}}

function handleFollow(){
    fetch(`/update_followers/${viewed.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            followers: [...viewed.followers, currentUser.username],
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {console.log(json)
            fetchPhotos()
            })
    
    fetch(`/update_following/${currentUser.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                following: [...currentUser.following, viewed.username],
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {console.log(json)
             fetchPhotos()
             })
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
                })
        }

    return(
        <main>
            <div>
                <h1>{viewed.username}</h1>
                <h1>{userPhotos.length} Posts</h1>
                <h1>{userPhotos[0].user.following.length} following</h1>
                <h1>{userPhotos[0].user.followers.length} followers</h1>
                <h1>{viewed.bio}</h1>
                <img src = {viewed.profile} style={{width: 300 ,height: 300}}/>
                {userPhotos[0].user.followers.includes(currentUser.username) ?
                    (<button onClick = {handleUnfollow}>Unfollow</button>) :
                    (<button onClick = {handleFollow}>Follow</button>)
                }
                <ul>
                {userPhotos.map(picture => 
                    <ProfilePicture picture ={picture}/>
                )}
                </ul>
            </div>
        </main>
    )

}

export default Profile;