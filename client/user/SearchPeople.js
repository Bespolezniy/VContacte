import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import { 
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  Button,
  Divider,
  Typography,
  Snackbar,
} from "@material-ui/core/"

import { findPeople, follow } from "./api-user.js"
import auth from "./../auth/auth-helper"

const useStyles = makeStyles(theme => ({
  title: {
    padding: theme.spacing(1),
    color: theme.palette.openTitle,
    fontSize: "1.5em"
  }
}))

const SearchPeople = () => {

  const classes = useStyles()
  const [values, setValues] = useState({
    users: [],
    open: false,
    followMessage: ""
  })
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    findPeople({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, signal).then( data => {

      if (data && data.error) {
        console.log(data.error)
      } else {
        setValues({...values, users: data})
      }

    })
    return () => {
      abortController.abort()
    }
  }, [])

  const handleClick = (user, index) => {
    follow({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, user._id).then( data => {

      if (data.error) {
        console.log(data.error)
      } else {
        let toFollow = values.users
        toFollow.splice(index, 1)
        setValues({
          ...values, 
          users: toFollow, 
          open: true, 
          followMessage: `Following ${user.name}!`
        })
      }

    })
  }

  const handleRequestClose = (event, reason) => {
    setValues({...values, open: false })
  }

  return (
    <div>
      <Paper elevation={4}>
        <Typography
          align="center"
          type="title" 
          className={classes.title}
        >
          Who to follow
        </Typography>
        <Divider />

        <List>
          {values.users.map((item, i) => (
            <span key={i}>
              <ListItem>
                <Link to={"/user/" + item._id}>      
                  <ListItemAvatar>
                    <Avatar src={"/api/users/photo/" + item._id}/>
                  </ListItemAvatar>
                </Link>

                <ListItemText primary={item.name}/>
                  <ListItemSecondaryAction>
                    <Button 
                      aria-label="Follow" 
                      variant="contained" 
                      color="primary" 
                      onClick={()=> {handleClick(item, i)}
                    }>
                      Follow
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </span>
            ))
          }
        </List>
      </Paper>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={values.open}
        onClose={handleRequestClose}
        autoHideDuration={5000}
        message={
          <span>{values.followMessage}</span>
        }
      />
    </div>
  )
}

export default SearchPeople