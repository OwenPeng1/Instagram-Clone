import React, {useState} from "react"
import FollowerTabContentItem from "./FollowerTabContentItem";

function FollowerTabContent({id, activeTab, users, profileUser, currentUser, setViewed}){

   
console.log(currentUser)
let usersList = []
if (activeTab === "mutual"){
    for(let i=0; i<profileUser.following.length; i++){
        if(currentUser.following.includes(profileUser.following[i])){
            usersList.push(profileUser.following[i])
        }
    }
}
if(activeTab === "following"){
    usersList = profileUser.following
    
}

if(activeTab === "followers"){
    usersList = profileUser.followers
}

let profileList = []
for(let i =0; i<users.length; i++){
    if(usersList.includes(users[i].username)){
        profileList.push(users[i])
    }
}
    
    return(
        
        
        <ul>
            {profileList.map(profile => 
                    <FollowerTabContentItem profile ={profile} setViewed={setViewed} /> )}
        </ul>
        
    )

}

export default FollowerTabContent;

