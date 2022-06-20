import React from "react";
import { useNavigate } from "react-router-dom";
import FollowerTabItem from "./FollowerTabItem";

function FollowerTab({photos, fetchPhotos, fetchCurrentUser, currentUser, viewed,followerTab, users, setViewed}){

let usernameList = []
if(followerTab === "Following"){usernameList = viewed.following}
if(followerTab ==="Followers"){usernameList = viewed.followers}


const usernameListWithoutCurrent = usernameList.filter(username => username != currentUser.username)
function findUser(name){
    return users.filter(user => user.username=== name)[0]
}

const usersList = []
for(let i=0; i<usernameListWithoutCurrent.length; i++){
    const user = findUser(usernameListWithoutCurrent[i])
    usersList.push(user)
}

const navigate = useNavigate()
function handleBack(){
    navigate("/profile")
}

    return(
        <main>
            <div id="followerInfo">
                <button onClick= {handleBack}>X</button>
                <h2 id="followerHeader">{followerTab}</h2>
                <ul id="followerList">
                    {usersList.map((user) =>
                    <FollowerTabItem users={users}photos= {photos} fetchPhotos={fetchPhotos} viewed={viewed}fetchCurrentUser= {fetchCurrentUser}currentUser= {currentUser}user={user} setViewed={setViewed}/>
                    )}
                </ul>
            </div>
        </main>
    )

}

export default FollowerTab;