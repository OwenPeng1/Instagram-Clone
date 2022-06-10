import React, {useState} from "react"

function FollowerTabNavItem({activeTab, setActiveTab, id, title}){

function handleClick(){
    setActiveTab(id)
}

    return(
        <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
            {title}
        </li>
    )

}

export default FollowerTabNavItem;