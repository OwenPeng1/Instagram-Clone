import logo from './logo.svg';
import './App.css';
import PhotoContainer from './PhotoContainer';
import Login from './Login';
import CreateUser from './CreateUser';
import Profile from './Profile';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
const [photos, setPhotos] = useState([])
const [comments, setComments] = useState([])
const [user, setUser] = useState({username:"", password:""})
const [currentUser, setCurrentUser] = useState(null)
const [viewed, setViewed] = useState(null)
  
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
    }, []
  )

  return (
    <main>
      <Routes>
        <Route path="/home" 
        element={<PhotoContainer photos={photos} comments={comments} currentUser={currentUser} setViewed={setViewed}/>}/>
        <Route path="/"
        element= {<Login setUser={setUser} setCurrentUser={setCurrentUser} user={user}/>}/>
        <Route path="/user"
        element = {<CreateUser/>}/>
        <Route path="/profile"
        element = {<Profile viewed={viewed} photos={photos} currentUser={currentUser} fetchPhotos={fetchPhotos} fetchCurrentUser={fetchCurrentUser}/>}/>
      </Routes>
    </main>
  ) 
}

export default App;
