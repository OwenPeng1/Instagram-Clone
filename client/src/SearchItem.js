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
        <li id="searchItem" onClick = {handleClick}>
            <img id="searchImage" src = {user.user.profile} style={{width: 50 ,height: 50}}/>
            <span id="searchUsername"> {user.user.username} </span>
            <span id="searchName">{user.user.name}</span>
        </li>
    )

}

export default SearchItem;