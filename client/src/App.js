import logo from './logo.svg';
import './App.css';
import PhotoContainer from './PhotoContainer';
import Login from './Login';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
const [photos, setPhotos] = useState([])
const [comments, setComments] = useState([])
const [user, setUser] = useState({username:"", password:""})
const [currentUser, setCurrentUser] = useState(null)
  
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

  useEffect(
    () => {
      fetchPhotos()
      fetchComments()
    
      fetch("/userInSession")
      .then(r => r.json())
      .then(data => {console.log(data)
      setCurrentUser(data)});
    
    }, []
  )

  return (
    <main>
      <Routes>
        <Route path="/home" 
        element={<PhotoContainer photos={photos} comments={comments} currentUser={currentUser}/>}/>
        <Route path="/"
        element= {<Login setUser={setUser} setCurrentUser={setCurrentUser} user={user}/>}/>
      </Routes>
    </main>
  ) 
}

export default App;
