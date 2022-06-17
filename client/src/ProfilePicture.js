import React from "react"
import {useNavigate} from 'react-router-dom';

function ProfilePicture({picture, setViewedPicture}){

const navigate = useNavigate()
function handleClick(){
    navigate("/profileComments")
    setViewedPicture(picture)
}    
    return(
        <li id="pictureListItem">
            <img src = {picture.photo} onClick={() => handleClick()}style={{width: 280 ,height: 280}}/>
        </li>
    )

}

export default ProfilePicture;