import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';

function EditProfile({currentUser, fetchCurrentUser, fetchUsers, setViewed}){
const [profile, setProfile] = useState(currentUser.profile)
const [name, setName] = useState(currentUser.name)
const [username, setUsername] = useState(currentUser.username)
const [bio, setBio]=useState(currentUser.bio)

function handleSubmit(e){
    e.preventDefault()
    fetch(`/users/${currentUser.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
        profile: profile,
        name: name,
        username:username,
        bio: bio
         }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => {console.log(json)
                fetchCurrentUser()
                fetchUsers()
                setViewed(currentUser)})
}

const navigate = useNavigate()
function handleBack(){
    navigate("/userProfile")
}

    return(
        <main>
            <button onClick={handleBack}>Back</button>
            <div id="EditProfile">
                <form onSubmit={handleSubmit}>
                <img id="sampleProfilePicture"src = {currentUser.profile} style={{width: 300 ,height: 300}}/>
                <h2 id="changeProfile">Profile Picture</h2>
                <input
                    name="profile"
                    id="changeProfileInput"
                    onChange={(e) => setProfile(e.target.value)}
                    value={profile}
                />
                <h2 id="changeName">Name</h2>
                <input
                    name="name"
                    id="changeNameInput"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <h2 id="changeUsername">Username</h2>
                <input
                    name="username"
                    id="changeUsernameInput"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <h2 id="changeBio">Bio</h2>
                <input
                    name="bio"
                    id="changeBioInput"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                />
                <button id="submitEdit" type="submit">Submit</button>
                </form>
            </div>
        </main>
    )

}

export default EditProfile;