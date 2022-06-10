import React, {useState} from "react"
import FollowerTabNavItem from "./FollowerTabNavItem";
import FollowerTabContent from "./FollowerTabContent";
import {useNavigate} from 'react-router-dom';

function FollowerTabs({activeTab, users, viewed, currentUser,setActiveTab, setViewed}){

    const navigate = useNavigate()
    function handleBack(){
        navigate("/profile")
    }

    let profileUser = {}
    for(let i=0; i<users.length; i++){
        if(users[i].username === viewed.username){
            profileUser = users[i]
        }
    }

    

    return(
        <main>
            <div>
            <button onClick = {handleBack}>Back</button>
            <h1>{viewed.username}</h1>
                <ul>
                    <FollowerTabNavItem title="Mutual" id="mutual" activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <FollowerTabNavItem title= "Followers" id="followers" activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <FollowerTabNavItem title="Following" id="following" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </ul>
                <div>
                    <FollowerTabContent activeTab={activeTab} users={users} profileUser={profileUser} currentUser={currentUser} setViewed={setViewed}/>
                </div>    
                
            </div>
        </main>
    )

}

export default FollowerTabs;