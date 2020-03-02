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
import { listByUser } from "../post/api-post"
import auth from "../auth/auth-helper"
import DeleteUser from "./DeleteUser"
import FolowButton from "./FollowButton"
import ProfileData from "./ProfileData"

const useStyles = makeStyles( theme => ({
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
    ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  }
}))

const Profile = ({match}) => {

  const classes = useStyles()
  const [values, setValues] = useState({
    user: {
      following:[], 
      followers:[]
    },
    redirectToSignin: false,
    following: false
  })
  const [posts, setPosts] = useState([])
  const jwt = auth.isAuthenticated()
  const photoUrl = values.user._id ? 
  `/api/users/photo/${values.user._id}?${new Date().getTime()}`: 
  "/api/users/defaultphoto"

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
  
    read({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then( data => {

      if (data && data.error) {
        setValues({...values, redirectToSignin: true})
      } else {
        let following = checkFollow(data)
        setValues({
          ...values, 
          user: data, 
          following: following
        })
        loadPosts(data._id)
      }

    })
    return () => {
      abortController.abort()
    }
  }, [match.params.userId])
  
  const checkFollow = user => {
    const match = user.followers.some( follower => {
      return follower._id == jwt.user._id
    })
    return match
  }

  const handleClick = callApi => {
    callApi({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, values.user._id).then( data => {

      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({
          ...values, 
          user: data, 
          following: !values.following
        })
      }

    })
  }

  const loadPosts = user => {

    listByUser({
      userId: user
    }, {
      t: jwt.token
    }).then( data => {

      if (data.error) {
        console.log(data.error)
      } else {
        setPosts(data)
      }

    })
  }

  const removePost = post => {
    const updatedPosts = posts
    const index = updatedPosts.indexOf(post)
    updatedPosts.splice(index, 1)
    setPosts(updatedPosts)
  }

  if (values.redirectToSignin) {
    return <Redirect to='/signin'/>
  }

  return (
    <Paper elevation={4}>
      <Typography 
        variant="h6"
        align="center"
        className={classes.title} 
      >
        Profile
      </Typography>

      <List dense>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={photoUrl} />
          </ListItemAvatar>

          <ListItemText 
            primary={values.user.name} 
            secondary={values.user.email}
          /> 
          
          {
            auth.isAuthenticated().user &&
            auth.isAuthenticated().user._id == values.user._id ? (
              <ListItemSecondaryAction>
                <Link to={"/user/edit/" + values.user._id}>
                  <IconButton aria-label="Edit" color="primary">
                    <Edit/>
                  </IconButton>
                </Link>

                <DeleteUser userId={values.user._id}/>
              </ListItemSecondaryAction>
            ) : (
              <FolowButton 
                following={values.following}
                handleClick={handleClick}
              />
            )
          }
        </ListItem>
        <Divider/>

        <ListItem>
          <ListItemText 
            primary={values.user.about} 
            secondary={
              "Joined: " + (new Date(values.user.created)).toDateString()
            }
          />
        </ListItem>
      </List>
      <ProfileData user={values.user} posts={posts} removePostUpdate={removePost}/>
    </Paper>  
  )
}

export default Profile