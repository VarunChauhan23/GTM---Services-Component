import React from "react";
import { Slide } from "react-slideshow-image"; // Import Slide component from react-slideshow-image
import "react-slideshow-image/dist/styles.css"; // Import default styles for the slide show
import styles from './Slider.module.css';

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
    <div className={styles["slider-container"]}>
      {/* Container for the slider */}
      <Slide
        arrows={true} // Show navigation arrows
        duration={1500} // Slide transition duration in milliseconds
        canSwipe={false} // Disable swiping
        pauseOnHover={true} // Pause slide transition on hover
        transitionDuration={1500} // Transition duration between slides
        cssClass={styles["slider"]} // Additional CSS class for the slide container
      >
        {/* Map over the slide images and render each as a slide */}
        {slideImages.map((slide, index) => (
          <div className={styles["slide-image-container"]} key={index}>
            <img className={styles["slide-image"]} src={slide.url} alt="" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
