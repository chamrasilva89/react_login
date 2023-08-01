// Importing necessary modules from React and Material-UI
import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#111B69", // Change the background color for the app bar
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
  },
  card: {
    margin: "20px auto",
    maxWidth: 400,
    padding: theme.spacing(2),
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  menuIcon: {
    marginLeft: "auto",
  },
  tileContainer: {
    marginTop: theme.spacing(3),
  },
}));
// The main functional component for the Profile page
export default function Profile() {
  const classes = useStyles(); // Using the previously defined styles

  // State and variables to handle the user menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Getting user information from local storage
  const firstName = localStorage.getItem("firstName");
  const email = localStorage.getItem("email");
  const lastName = localStorage.getItem("lastName");
  const gender = localStorage.getItem("gender");
  const image = localStorage.getItem("image");

  // Function to open the user menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to close the user menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function to handle the logout action
  const handleLogout = () => {
    // Removing user information from local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("email");
    localStorage.removeItem("lastName");
    localStorage.removeItem("gender");
    localStorage.removeItem("image");
    // Redirecting to the homepage after logout
    window.location.href = "/";
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
          <div>
            <IconButton
              onClick={handleMenu}
              color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              edge="end"
            >
              <Avatar
                className={classes.avatar}
                src="path/to/your-avatar-image.jpg"
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <AccountCircleIcon fontSize="small" />
                <Typography variant="body2" className={classes.userName}>
                  Your Name
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ExitToAppIcon fontSize="small" />
                <Typography variant="body2">Logout</Typography>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {/* Your profile content */}
      {firstName ? (
        <Card className={classes.card}>
          <CardContent>
            <Avatar className={classes.avatar} src={image} />
            <Typography variant="h5">
              Welcome {firstName} {lastName}
            </Typography>
            {/* Add your profile details and content here */}
          </CardContent>
        </Card>
      ) : (
        <div>Profile Not Available</div>
      )}
      {/* Main menu tiles */}
      <Grid container spacing={3} className={classes.tileContainer}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <SportsSoccerIcon className={classes.cardIcon} />
              <CardContent>
                <Typography variant="h6" className={classes.cardTitle}>
                  Sports
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <MusicNoteIcon className={classes.cardIcon} />
              <CardContent>
                <Typography variant="h6" className={classes.cardTitle}>
                  Music
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <ShoppingBasketIcon className={classes.cardIcon} />
              <CardContent>
                <Typography variant="h6" className={classes.cardTitle}>
                  Shopping
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <HomeIcon className={classes.cardIcon} />
              <CardContent>
                <Typography variant="h6" className={classes.cardTitle}>
                  Home
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <SettingsIcon className={classes.cardIcon} />
              <CardContent>
                <Typography variant="h6" className={classes.cardTitle}>
                  Settings
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <LocalLibraryIcon className={classes.cardIcon} />
              <CardContent>
                <Typography variant="h6" className={classes.cardTitle}>
                  Library
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
