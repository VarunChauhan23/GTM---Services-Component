import React from "react";
import Button from "@mui/material/Button"; // Import Button component from Material-UI
import { makeStyles } from "@material-ui/core/styles"; // Import makeStyles function from Material-UI

// Define styles for the button using makeStyles
const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none", // Disable text transformation
    color: "#F13E1E", // Set text color to #F13E1E
    borderColor: "#F13E1E", // Set border color to #F13E1E
    transition: "background-color 0.3s ease", // Smooth transition for background color change
    "&:hover": {
      backgroundImage: "linear-gradient(to right, transparent 50%, #F13E1E 50%)", // Apply gradient background on hover
      backgroundSize: "200% 100%", // Expand background size
      backgroundPosition: "right", // Move background to the right
      color: "white", // Change text color to white on hover
      transition: "background-position 1s ease", // Smooth transition for background position change on hover
    }
  },
}));

// ButtonComponent functional component
const ButtonComponent = () => {
  const classes = useStyles(); // Apply styles defined by makeStyles

  return (
    // Container for the button, centered using flexbox
    <div className="m-auto sm:my-10 my-3 container flex justify-center">
      {/* Button component with customized styles */}
      <Button className={classes.button} variant="outlined" color="error" size="large">
        View All
      </Button>
    </div>
  );
};

export default ButtonComponent; // Export the ButtonComponent
