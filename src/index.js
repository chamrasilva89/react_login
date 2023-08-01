// Importing necessary modules from React and MUI (Material-UI) libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Importing the main component of the application from "./App"
import App from "./App";

// Create a theme instance using the MUI createTheme() function
const theme = createTheme();

// Using ReactDOM.createRoot() to create a root-level component for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the main component of the application within the root using ReactDOM.render()
// The application is wrapped in <React.StrictMode> for development mode features and warnings.
// The <ThemeProvider> component allows us to provide the MUI theme to the entire app.
// The theme instance created above is passed as a prop to the <ThemeProvider>.
// The <App /> component represents the main component of the application to be rendered.
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
