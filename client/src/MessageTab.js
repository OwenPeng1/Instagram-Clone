import React from "react"

function MessageTab({user, setActiveTab, users, findUser}){

function handleClick(){
    setActiveTab(user)
}

const fullUser = findUser(user)

    return(
        <li onClick={handleClick}>
            <h2 id="chatName">{fullUser.name}</h2>
            <img id="chatProfile" src = {fullUser.profile} style={{width: 60 ,height: 60}}/>
        </li>
    )

}

export default MessageTab;