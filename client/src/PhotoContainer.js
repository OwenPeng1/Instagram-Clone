import React from "react"
import PhotoCard from "./PhotoCard";

function PhotoContainer({comments, photos, currentUser, setViewed}){

    return(
        <main>
            <h1>Hello {currentUser.name}</h1>
            <ul>
                {photos.map(picture => 
                    <PhotoCard picture ={picture} comments={comments} setViewed={setViewed}/>
                )}
            </ul>
        </main>
    )

}

export default PhotoContainer;