import React, { useState } from "react"
import { Link } from "react-router-dom"

import { 
  TextField,
  Avatar, 
  Icon,
  CardHeader
} from "@material-ui/core"


import { comment, uncomment } from "./api-post.js"
import auth from "./../auth/auth-helper"

const Comments = ({postId, updateComments, comments}) => {
  
  const [text, setText] = useState("")
  const jwt = auth.isAuthenticated()

  const handleChange = name => event => {
    setText(event.target.value)
  }
  
  const addComment = event => {
    if (event.keyCode == 13 && event.target.value) {
      event.preventDefault()
      comment({
        userId: jwt.user._id
      }, {
        t: jwt.token
      }, postId, {text: text}).then( data => {

        if (data.error) {
          console.log(data.error)
        } else {
          setText("")
          updateComments(data.comments)
        }

      })
    }
  }

  const deleteComment = comment => event => {
    uncomment({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, postId, comment).then( data => {

      if (data.error) {
        console.log(data.error)
      } else {
        updateComments(data.comments)
      }

    })
  }

  const commentBody = item => {
    return (
      <p>
        <Link to={"/user/" + item.postedBy._id}>
          {item.postedBy.name}
        </Link>
        <br/>

        {item.text}

        <span>
          {(new Date(item.created)).toDateString()} |
          {auth.isAuthenticated().user._id === item.postedBy._id && (
            <Icon onClick={deleteComment(item)}>delete</Icon>
          )}
        </span>
      </p>
    )
  }
    
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar src={"/api/users/photo/" + auth.isAuthenticated().user._id} />
        }
        title={ 
          <TextField
            onKeyDown={addComment}
            multiline
            value={text}
            label="Comment"
            onChange={handleChange("text")}
            variant="outlined"
            size="small"
            placeholder="Write something to comment this post ..."
            margin="normal"
            fullWidth
          />
        }
      />
        
      {comments.map((item, i) => (
        <CardHeader
          avatar={
            <Avatar  
              src={"/api/users/photo/" + item.postedBy._id}
            />
          }
          title={commentBody(item)}
          key={i}
        />
      ))}
    </div>
  )
}

export default Comments