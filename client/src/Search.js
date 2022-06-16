import React from "react"
import { useState } from 'react';
import SearchItem from "./SearchItem";

function Search({users, setViewed}){
const [searchQuery, setSearchQuery] = useState("")
const [isClicked, setIsClicked] = useState(false)

function handleClick(){
    setIsClicked(!isClicked)
}

function handleSubmit(e){
    e.preventDefault()
}


function filterUsers(usersArray, query){
    if(!query){
        return usersArray;
    }
    return usersArray.filter((user) => {
        return user.name.toLowerCase().includes(query);
    })
}
const filteredUsers = filterUsers(users, searchQuery)

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
