import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import { 
  AppBar,
  Toolbar, 
  IconButton,
  Button,
  Typography
} from "@material-ui/core"
import { Home } from "@material-ui/icons"

import auth from "../auth/auth-helper"

const useStyles = makeStyles({
  link: {
    fontWeight: "bold",
    textDecoration: "none"
  }
})

const Menu = () => {

  const classes = useStyles()
  let history = useHistory()

  const isActive = (history, path) => {

    if (history.location.pathname == path)
      return {color: "#ff3d00"}
    else
      return {color: "#ffffff"}
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            React-node boilerplate
          </Typography>

          <Link className={classes.link} to="/">
            <IconButton 
              aria-label="Home" 
              style={isActive(history, "/")}
            >
              <Home/>
            </IconButton>
          </Link>

          <Link className={classes.link} to="/users">
            <Button 
              style={isActive(history, "/users")}
            >
              Users
            </Button>
          </Link>

          {!auth.isAuthenticated() && (<span>
            <Link className={classes.link} to="/signup">
              <Button 
                style={isActive(history, "/signup")}
              >
                Sign Up
              </Button>
            </Link>

            <Link className={classes.link} to="/signin">
              <Button 
                style={isActive(history, "/signin")}
              >
                Sign In
              </Button>
            </Link>
          </span>)}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Menu