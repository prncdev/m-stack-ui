import React from "react";
import { useState } from "react";
// import { Grid } from "@material-ui/core";
import Grid from "@mui/material/Grid";

// Define the styles for the components using Tailwind CSS
const componentStyles = "bg-gray-200 border border-gray-400 p-4 relative";

// Component for Window-1
const Window1: React.FC = () => {
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(200);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [startWidth, setStartWidth] = useState<number>(0);
  const [startHeight, setStartHeight] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setStartX(e.clientX);
    setStartY(e.clientY);
    setStartWidth(width);
    setStartHeight(height);

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      let newWidth = startWidth + deltaX;
      let newHeight = startHeight + deltaY;

      // Prevent resizing to less than 100px
      newWidth = Math.max(newWidth, 100);
      newHeight = Math.max(newHeight, 100);

      setWidth(newWidth);
      setHeight(newHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className={componentStyles}
      // className="bg-gray-200 border border-gray-400 p-4 relative select-none"
      style={{ width, height }}
    >
      <h2>Window-1</h2>
      <p>Component-1 (some HTML content)</p>
      <div
        className="absolute top-0 left-0 w-full h-2 bg-blue-500 cursor-row-resize"
        onMouseDown={handleMouseDown}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-2 bg-blue-500 cursor-row-resize"
        onMouseDown={handleMouseDown}
      ></div>
      <div
        className="absolute top-0 left-0 w-2 h-full bg-blue-500 cursor-col-resize"
        onMouseDown={handleMouseDown}
      ></div>
      <div
        className="absolute top-0 right-0 w-2 h-full bg-blue-500 cursor-col-resize"
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

// Main Layout Component
const Layout: React.FC = () => {
  return (
    // <Grid container spacing={2} className="absolute">
    <div className="w-screen h-screen relative">
      <Grid item xs={12} className="absolute top-1/3 left-1/3">
        <Window1 />
      </Grid>
    </div>
    // </Grid>
  );
};

export default Layout;