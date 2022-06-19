import React  from "react"
import Search from "./Search";
import {useNavigate} from 'react-router-dom';

function Header({setViewed, currentUser, users}){

const navigate = useNavigate()
function handleProfile(){
    setViewed(currentUser)
    navigate('/userProfile')
    }
    
function handleCreate(){
    navigate('/createPost')
    } 

function handleHome(){
    navigate('/home')
}

function handleChat(){
    navigate('/messages')
}
    
    return(
        <main>
            <div className="header">
                <img id="logo" src = {'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png'}  style={{width: 110 ,height: 40}}/>
                <Search users={users} setViewed={setViewed}/>
                <img id="profilePicture" src = {currentUser.profile} onClick={() => handleProfile()} style={{width: 30 ,height: 30}}/>
                <img id="createButton" src = {'https://thumbs.dreamstime.com/b/kyiv-ukraine-august-add-new-content-black-line-icon-popular-instagram-media-element-plus-follow-symbol-isolated-white-228162071.jpg'} onClick={() => handleCreate()} style={{width: 50 ,height: 50}}/>
                <img id="homeButton" src = {'https://static.thenounproject.com/png/771236-200.png'} onClick={() => handleHome()} style={{width: 40 ,height: 40}}/>
                <button onClick={handleChat}>Chat</button>
            </div>
        </main>
    )

}

export default Header;