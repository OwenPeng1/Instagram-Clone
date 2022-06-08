import React from "react"
import PhotoCard from "./PhotoCard";

function PhotoContainer({comments, photos, currentUser}){

    return(
        <main>
            <h1>Hello {currentUser.name}</h1>
            <ul>
                {photos.map(picture => 
                    <PhotoCard picture ={picture} comments={comments}/>
                )}
            </ul>
        </main>
    )

}

export default PhotoContainer;