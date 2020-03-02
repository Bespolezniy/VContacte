import React, { useState, useEffect } from "react"

import { makeStyles } from "@material-ui/core/styles"
import { 
  Card,
  Typography,
  Divider
} from "@material-ui/core/"

import auth from "./../auth/auth-helper"
import PostList from "./PostList"
import { listNewsFeed } from "./api-post.js"
import NewPost from "./NewPost"

const useStyles = makeStyles(theme => ({
  card: {
    margin: "auto",
    paddingTop: 0,
    paddingBottom: theme.spacing(3)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    fontWeight: "bold",
    color: theme.palette.openTitle,
    fontSize: "1.5em"
  },
  media: {
    minHeight: 330
  }
}))

const Newsfeed = () => {

  const classes = useStyles()
  const [posts, setPosts] = useState([])
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    listNewsFeed({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, signal).then( data => {

      if (data.error) {
        console.log(data.error)
      } else {
        setPosts(data)
      }

    })

    return () => {
      abortController.abort()
    }
  }, [])

  const addPost = post => {
    const updatedPosts = [...posts]
    updatedPosts.unshift(post)
    setPosts(updatedPosts)
  }

  const removePost = post => {
    const updatedPosts = [...posts]
    const index = updatedPosts.indexOf(post)
    updatedPosts.splice(index, 1)
    setPosts(updatedPosts)
  }

  return (
    <Card className={classes.card}>
      <Typography 
        type="title" 
        align="center"
        className={classes.title}
      >
        Main
      </Typography>
      <Divider/>

      <NewPost addUpdate={addPost}/>
      <Divider/>

      <PostList removeUpdate={removePost} posts={posts}/>
    </Card>
  )
}

export default Newsfeed