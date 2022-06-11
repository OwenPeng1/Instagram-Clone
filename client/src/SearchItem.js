import React from "react"
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function SearchItem(user, setViewed){

const navigate = useNavigate()
function handleClick(){
    user.setViewed(user.user)
    navigate("/profile")
}

    return(
        <li onClick = {handleClick}>
            <img src = {user.user.profile} style={{width: 50 ,height: 50}}/>
            {user.user.username} {user.user.name}
        </li>
    )

}

export default SearchItem;