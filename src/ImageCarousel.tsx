import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


function ImageCarousel({images}:any){
    const [currentIndex, setCurrentIndex] =useState(0);

    function goToPreviousImage(){
        if(currentIndex===0){
        setCurrentIndex(images.length-1);
        }else{
        setCurrentIndex(currentIndex-1);
        }
    }
    function goToNextImage(){
        if(currentIndex===images.length-1){
        setCurrentIndex(0);
        }else{
        setCurrentIndex(currentIndex+1);
        }
    }
    return(
        <>
            <div className="ImageContainer">
            {/*left arrow */}
            <button onClick={goToPreviousImage}
            className="left-arrow">
            {FaAngleLeft ({size:32})}
            </button>

            {/*images */}
            <div>
            <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                className="ProjectImages"
            />
            </div>

            {/*right arrow */}
            <button onClick={goToNextImage}
            className="right-arrow">
            {FaAngleRight ({size:32})}
            
            </button>
            {/*<img className= "ProjectImages" src={Project1Image1} alt="NutriQuestCover" />*/}
        </div>
        <p className="p2">Image {currentIndex+1} of {images.length}</p>
        </>
    );

}
export default ImageCarousel;