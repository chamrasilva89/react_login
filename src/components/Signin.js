// Importing necessary modules from React, Material-UI, and other libraries
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import swal from "sweetalert2"; // Importing the SweetAlert2 library

// Define styles using the makeStyles hook provided by Material-UI
const useStyles = makeStyles((theme) => ({
  // CSS styles for the root container
  root: {
    display: "flex",
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/3607424.jpg)`, // Correct background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignItems: "center", // Center the content vertically
    justifyContent: "center", // Center the content horizontally
    minHeight: "50vh", // Ensure the container takes up the full viewport height
    backgroundRepeat: "no-repeat",
  },
  paperContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  // CSS styles for the paper container
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    background: "rgba(255, 255, 255, 0.9)", // Add a semi-transparent background to the login box
    borderRadius: theme.spacing(2),
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  },
  // CSS styles for the avatar (lock icon)
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  // CSS styles for the form container
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  // CSS styles for the submit button
  submit: {
    margin: theme.spacing(2, 0),
  },
}));

// Function to perform the login action by making an API call
async function loginUser(credentials) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  // Making a POST request to the server with the provided credentials
  return fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

// The main functional component for the Sign-in page
export default function Signin() {
  const classes = useStyles(); // Using the previously defined styles
  const [username, setUserName] = useState(""); // State for the username input field
  const [password, setPassword] = useState(""); // State for the password input field
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setErrorMessage(""); // Clear previous error message

    try {
      // Calling the loginUser function to perform the login action
      const response = await loginUser({
        username,
        password,
      });

      // If the login is successful (token received in the response)
      if ("token" in response) {
        // Show a success message using SweetAlert2
        swal
          .fire("Success", response.message, "success", {
            buttons: false,
            timer: 2000,
          })
          .then((value) => {
            // Storing user information in the local storage
            localStorage.setItem("accessToken", response["token"]);
            localStorage.setItem("firstName", response["firstName"]);
            localStorage.setItem("email", response["email"]);
            localStorage.setItem("lastName", response["lastName"]);
            localStorage.setItem("gender", response["gender"]);
            localStorage.setItem("image", response["image"]);
            // Redirect to the profile page after a successful login
            window.location.href = "/profile";
          });
      } else {
        // If login fails, show an error message using SweetAlert2
        swal.fire("Failed", response.message, "error");
      }
    } catch (error) {
      // Handle network and server errors
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Container component="main" maxWidth="xs" className={classes.root}>
              <CssBaseline /> {/* Normalize CSS */}
              {/* The login form container */}
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon /> {/* Lock icon */}
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                {/* The login form */}
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleSubmit}
                >
                  {/* Username input field */}
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="username"
                    name="username"
                    label="Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {/* Password input field */}
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* Submit button */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                </form>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
