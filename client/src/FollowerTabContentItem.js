import React from "react"
import {useNavigate} from 'react-router-dom';

function FollowerTabContentItem({profile, setViewed}){

    const navigate = useNavigate()
    function handleClick(){
        setViewed(profile)
        navigate("/profile")
    }
 
    return(
        <li onClick = {handleClick}>
            <h2>{profile.username}</h2>
            <img src = {profile.profile} style={{width: 200 ,height: 200}}/>
        </li>
    )

}

export default FollowerTabContentItem;