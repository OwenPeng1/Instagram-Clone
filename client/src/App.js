import logo from './logo.svg';
import './App.css';
import PhotoContainer from './PhotoContainer';
import Login from './Login';
import CreateUser from './CreateUser';
import Profile from './Profile';
import FollowerTabs from './FollowerTabs';
import CommentForm from './CommentForm';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
const [photos, setPhotos] = useState([])
const [comments, setComments] = useState([])
const [user, setUser] = useState({username:"", password:""})
const [currentUser, setCurrentUser] = useState(null)
const [viewed, setViewed] = useState(null)
const [activeTab, setActiveTab] = useState("")
const [users, setUsers] = useState([])
const [commentedPhoto, setCommentedPhoto] = useState(null)
  
  function fetchPhotos(){
    fetch("/photos")
    .then(r => r.json())
    .then(setPhotos)
  }

  function fetchComments(){
    fetch('/comments')
    .then(r => r.json())
    .then(setComments)
  }

  function fetchUsers(){
    fetch('/users')
    .then(r => r.json())
    .then(setUsers)
  }

  function fetchCurrentUser(){
    fetch("/userInSession")
      .then(r => r.json())
      .then(data => {console.log(data)
      setCurrentUser(data)})
  }

  useEffect(
    () => {
      fetchPhotos()
      fetchComments()
      fetchCurrentUser()
      fetchUsers()
    }, []
  )

  return (
    <main>
      <Routes>
        <Route path="/home" 
        element={<PhotoContainer photos={photos} comments={comments} currentUser={currentUser} setViewed={setViewed} fetchPhotos={fetchPhotos} setCommentedPhoto={setCommentedPhoto}/>}/>
        <Route path="/"
        element= {<Login setUser={setUser} setCurrentUser={setCurrentUser} user={user}/>}/>
        <Route path="/user"
        element = {<CreateUser/>}/>
        <Route path="/profile"
        element = {<Profile viewed={viewed} photos={photos} currentUser={currentUser} fetchPhotos={fetchPhotos} fetchCurrentUser={fetchCurrentUser} setActiveTab={setActiveTab} fetchUsers={fetchUsers}/>}/>
        <Route path="/tabs"
        element= {<FollowerTabs activeTab={activeTab} setActiveTab={setActiveTab} users={users} currentUser={currentUser} viewed={viewed} fetchUsers={fetchUsers} setViewed={setViewed}/>}/>
        <Route path="/comment"
        element = {<CommentForm commentedPhoto={commentedPhoto} comments={comments} setViewed={setViewed} fetchComments={fetchComments} currentUser={currentUser}/>} />
      </Routes>
    </main>
  ) 
}

export default App;
