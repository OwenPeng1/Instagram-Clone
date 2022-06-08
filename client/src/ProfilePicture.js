import React from "react"

function ProfilePicture({picture}){

    return(
        <li>
            <img src = {picture.photo} style={{width: 1200 ,height: 1000}}/>
        </li>
    )

}

export default ProfilePicture;