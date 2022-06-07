import React from "react"
import PhotoCard from "./PhotoCard";

function PhotoContainer({comments, photos}){

    return(
        <main>
            <ul>
                {photos.map(picture => 
                    <PhotoCard picture ={picture} comments={comments}/>
                )}
            </ul>
        </main>
    )

}

export default PhotoContainer;