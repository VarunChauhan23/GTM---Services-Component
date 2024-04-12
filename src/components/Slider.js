import React from "react";
import { Slide } from "react-slideshow-image"; // Import Slide component from react-slideshow-image
import "react-slideshow-image/dist/styles.css"; // Import default styles for the slide show
import './Slider.css'; // Import custom CSS styles for the slider

const Slider = () => {
  // Define an array of slide images
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
  ];

  return (
    <div className="flex sm:mr-10"> {/* Container for the slider */}
      <Slide
        arrows={true} // Show navigation arrows
        duration={1500} // Slide transition duration in milliseconds
        canSwipe={false} // Disable swiping
        pauseOnHover={true} // Pause slide transition on hover
        transitionDuration={1500} // Transition duration between slides
        indicators={true} // Show slide indicators
        cssClass="slider" // Additional CSS class for the slide container
      >
        {/* Map over the slide images and render each as a slide */}
        {slideImages.map((slide, index) => (
          <div className="slide-image-container">
          <img
            key={index} // Add key for each slide
            className="object-contain sm:m-auto rounded-xl" // CSS classes for the slide image
            src={`${slide.url}`} // Image source
            alt="" // Image alt attribute
            />
            </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
