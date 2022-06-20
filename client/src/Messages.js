import React, {useState} from "react"
import MessageTab from "./MessageTab"
import IndivudalMessages from "./IndividualMessages"
import {useNavigate} from 'react-router-dom';
import Header from "./Header";

function Messages({messages, currentUser, fetchMessages, activeTab, setActiveTab, users, setViewed}){
const [messageWords, setMessageWords] = useState("")

const userMessages = messages.filter(message => message.sender=== currentUser.username 
                                      || message.recipient === currentUser.username)
const sortedMessages = {}
for(let i=0; i<userMessages.length; i++){
    if(userMessages[i].recipient != currentUser.username){
        if(sortedMessages[userMessages[i].recipient]){
            sortedMessages[userMessages[i].recipient] = [...sortedMessages[userMessages[i].recipient], userMessages[i]]
        }
        else sortedMessages[userMessages[i].recipient] = [userMessages[i]] 
    }
    if(userMessages[i].sender != currentUser.username){
        if(sortedMessages[userMessages[i].sender]){
            sortedMessages[userMessages[i].sender] = [...sortedMessages[userMessages[i].sender], userMessages[i]]
        }
        else sortedMessages[userMessages[i].sender] = [userMessages[i]] 
    }
}

const messagedUsers = Object.keys(sortedMessages)


function handleSubmit(e){
    e.preventDefault()
    const message = {
        text: messageWords,
        sender: currentUser.username,
        recipient: activeTab,
        date: new Date().toUTCString()
    }

    fetch(`/messages`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(message)
      })
      .then(res => res.json())
      .then(res => {console.log(res)
                    fetchMessages()})
}

function findUser(name){
    return users.filter(user => user.username=== name)[0]
}

const navigate = useNavigate()
function handleProfile(){
    setViewed(findUser(activeTab))
    navigate("/profile")
}

let className= "" 

    return(
        <main>
            <Header setViewed={setViewed} currentUser={currentUser} users={users}/>
            <div id="usernameTab">
                <ul>
                    {messagedUsers.map(user => 
                        <MessageTab user={user} setActiveTab={setActiveTab} users={users} findUser={findUser}/>)}
                </ul>
            </div>
            <div id="chats"> 
                <h1 onClick= {handleProfile}>{findUser(activeTab).name}</h1>
                <ul>
                    {sortedMessages[activeTab]? (sortedMessages[activeTab].sort(
                        function(b,a){
                            return new Date(b.date) - new Date(a.date)
                        }
                    )
                    .map(message => 

                        <IndivudalMessages message={message} currentUser={currentUser}/>)) : <div></div>}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input id="messageInput" placeholder="Type Message" onChange={(e) => setMessageWords(e.target.value)}/>
                    <button id= "submitMessage" type="submit">Submit</button>
                </form>
            </div>
        </main>
    )

}

export default Messages;