import React from "react";
import Button from "@mui/material/Button"; // Import Button component from Material-UI
import './ButtonComponent.css';

// ButtonComponent functional component
const ButtonComponent = () => {
  return (
    // Container for the button, centered using flexbox
    <div className="button-container">
      {/* Button component with customized styles */}
      <Button className="button" variant="outlined" color="error" size="large">
        View All
      </Button>
    </div>
  );
};

export default ButtonComponent; // Export the ButtonComponent
