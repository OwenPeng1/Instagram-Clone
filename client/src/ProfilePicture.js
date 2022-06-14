import React from "react"
import {useNavigate} from 'react-router-dom';

function ProfilePicture({picture, setViewedPicture}){

const navigate = useNavigate()
function handleClick(){
    navigate("/profileComments")
    setViewedPicture(picture)
}    
    return(
        <li>
            <img src = {picture.photo} onClick={() => handleClick()}style={{width: 1200 ,height: 1000}}/>
        </li>
    )

}

export default ProfilePicture;