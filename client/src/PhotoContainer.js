import React from "react"
import PhotoCard from "./PhotoCard";
import Search from "./Search";


function PhotoContainer({comments, photos, currentUser, setViewed, fetchPhotos, setCommentedPhoto, users}){


    return(
        <main>
            <h1>Hello {currentUser.name}</h1>
            <Search users={users} setViewed={setViewed}/>
            <ul>
                {photos.map(picture => 
                    <PhotoCard picture ={picture} comments={comments} setViewed={setViewed} currentUser={currentUser} fetchPhotos={fetchPhotos} setCommentedPhoto={setCommentedPhoto}/>
                )}
            </ul>
        </main>
    )

}

export default PhotoContainer;