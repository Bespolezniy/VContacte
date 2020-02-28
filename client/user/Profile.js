import React, { useState, useEffect } from "react"
import { Redirect, Link } from "react-router-dom"

import { 
  Paper,
  List, 
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  IconButton,
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Edit } from "@material-ui/icons"

import { read } from "./api-user"
import auth from "../auth/auth-helper"
import DeleteUser from "./DeleteUser"
import FollowButton from "./FollowButton"
import FollowGrid from "./FollowGrid"

const useStyles = makeStyles( theme => ({
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
    ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  }
}))

const Profile = props => {

  const [user, setUser] = useState({
    following: [],
    followers: []
  })
  const [error, setError] = useState("")
  const [redirectToSignIn, setRedirectToSignIn] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const photoUrl = user._id
  ? `/api/users/photo/${user._id}?${new Date().getTime()}`
  : '/api/users/defaultphoto'
  const classes = useStyles()

  const checkFollowing = user => {
    const jwt = auth.isAuthenticated()
    const match = user.followers.find( follower => {
      return follower._id == jwt.user._id
    })
    return match
  }

  const init = userId => {
    const jwt = auth.isAuthenticated()
    read({
      userId: userId
    }, 
    {t: jwt.token})
      .then( data => {

        if (data.error) {
          setRedirectToSignIn(true)
        } else {
          setUser(data)
          setIsFollowing(checkFollowing(data))
        }
      }
    )
  }

  useEffect(() => {
    init(props.match.params.userId)
  }, [props.match.params.userId])

  if (redirectToSignIn) {
    return (<Redirect to="/signin"/>)
  }

  const handleClick = callApi => {
    const jwt = auth.isAuthenticated()

    callApi({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, user._id).then( data => {

      if (data.error) {
        setError(data.error)
      } else {
        setUser(data)
        setIsFollowing(!following)
      }    
    }
  )
}
    
return (
  <div>
    <Paper className={classes.root} elevation={4}>
      <Typography type="title" className={classes.title}>
        Profile
      </Typography>

      <List dense>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Avatar src={photoUrl}/>
            </Avatar>
          </ListItemAvatar>

          <ListItemText 
            primary={user.name}
            secondary={user.email}
          />

          {auth.isAuthenticated().user && 
          auth.isAuthenticated().user._id == user._id ? (
            <ListItemSecondaryAction>
              <Link to={"/user/edit/" + user._id}>
                <IconButton color="primary">
                  <Edit/>
                </IconButton>
              </Link>

              <DeleteUser userId={user._id}/>
            </ListItemSecondaryAction>
          ) : (
            <ListItemSecondaryAction>
              <FollowButton 
                following={isFollowing} 
                handleClick={handleClick} 
              />
            </ListItemSecondaryAction>
          )}
        </ListItem>
        <Divider/>

        <ListItem>
          <ListItemText 
            primary={"Joined: " + (new Date(user.created)).toDateString()}
          />
        </ListItem>

        <ListItem>
          <ListItemText primary={user.about}/>
        </ListItem>
      </List>

      <FollowGrid people={user.followers}/>
    </Paper>
  </div>
  )
}
  
export default Profile