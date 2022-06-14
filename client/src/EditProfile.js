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
            <form onSubmit={handleSubmit}>
            <img src = {currentUser.profile} style={{width: 200 ,height: 200}}/>
            <h2>New Profile Picture</h2>
            <input
                name="profile"
                onChange={(e) => setProfile(e.target.value)}
                value={profile}
            />
            <h2>Name</h2>
            <input
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <h2>Username</h2>
            <input
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <h2>Bio</h2>
            <input
                name="bio"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
            />
            <button type="submit">Submit</button>
            </form>
        </main>
    )

}

export default EditProfile;