import logo from './logo.svg';
import './App.css';
import PhotoContainer from './PhotoContainer';
import PhotoCard from './PhotoCard';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
const [photos, setPhotos] = useState([])
const [comments, setComments] = useState([])
  
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
    }, []
  )

  return (
    <main>
      <Routes>
        <Route path="/home" 
        element={<PhotoContainer photos={photos} comments={comments}/>}/>
      </Routes>
    </main>
  ) 
}

export default App;
