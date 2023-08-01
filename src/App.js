// Importing necessary modules from React and react-router-dom
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing the "Signin" and "Profile" components from their respective files
import Signin from "./components/Signin";
import Profile from "./components/Profile";

// Defining the main component of the application
function App() {
  // Checking if there is a token stored in the localStorage with the key "accessToken"
  const token = localStorage.getItem("accessToken");

  // If there is no token (token is falsy), render the "Signin" component
  if (!token) {
    return <Signin />;
  }

  // If there is a token (token is truthy), render the main application component
  return (
    <div className="wrapper">
      {/* Using the BrowserRouter component to set up the routing for the application */}
      <BrowserRouter>
        {/* The Switch component ensures that only one Route component is rendered at a time */}
        <Switch>
          {/* When the path matches "/profile", render the "Profile" component */}
          <Route path="/profile">
            <Profile />
          </Route>
          {/* When the path matches "/", also render the "Profile" component */}
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// Exporting the "App" component as the default export
export default App;
