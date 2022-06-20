import React from "react"
import { useState } from 'react';
import SearchItem from "./SearchItem";

function Search({users, setViewed, currentUser}){
const [searchQuery, setSearchQuery] = useState("")
const [isClicked, setIsClicked] = useState(false)

function handleClick(){
    setIsClicked(!isClicked)
}

function handleSubmit(e){
    e.preventDefault()
}

const usersWithoutCurrent = users.filter(user => user.username!=currentUser.username)

function filterUsers(usersArray, query){
    if(!query){
        return usersArray;
    }
    return usersArray.filter((user) => {
        return user.name.toLowerCase().includes(query);
    })
}

const filteredUsers = filterUsers(usersWithoutCurrent, searchQuery)

    return(
        <main id="searchBar">
            <form onSubmit = {handleSubmit} onClick = {handleClick}>
                <input
                    value={searchQuery}
                    onChange={e => {setSearchQuery(e.target.value)}}
                    type="text"
                    id= "searchInput"
                    placeholder="Search"
                />
            </form>
            { isClicked?( 
                <ul>
                    {filteredUsers.map(user => (
                        <SearchItem user={user} setViewed={setViewed}/>
                    ))
                    }
                </ul>
            ) : (
                <div></div>
            )
            }
        </main>
    )

}

export default Search;
