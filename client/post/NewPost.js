import React, { useState, useEffect } from "react"
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
  Avatar,
  Icon,
  IconButton,
} from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles"
import { Image, PostAdd } from "@material-ui/icons"

import auth from "./../auth/auth-helper"
import { create } from "./api-post.js"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#efefef",
    padding: `${theme.spacing(3)}px 0px 1px`
  },
  card: {
    maxWidth:600,
    margin: "auto",
    marginBottom: theme.spacing(3),
    backgroundColor: "rgba(69, 148, 139, 0.08)",
    boxShadow: "none"
  },
  cardContent: {
    backgroundColor: "white",
    paddingTop: 0,
    paddingBottom: 0
  },
  cardHeader: {
    paddingTop: 8,
    paddingBottom: 8
  },
  imageButton: {
    height: 30,
    marginBottom: 5
  },
  input: {
    display: "none",
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: "90%"
  },
  submit: {
    margin: theme.spacing(2)
  },
  filename:{
    verticalAlign: "super"
  }
}))

const NewPost = ({addUpdate}) => {

  const classes = useStyles()
  const [values, setValues] = useState({
    text: "",
    photo: "",
    error: "",
    user: {}
  })
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    setValues({
      ...values, 
      user: auth.isAuthenticated().user
    })
  }, [])

  const handleClick = () => {
    let postData = new FormData()
    postData.append("text", values.text)
    postData.append("photo", values.photo)

    create({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, postData).then( data => {

      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, text:"", photo: ""})
        addUpdate(data)
      }

    })
  }

  const handleChange = name => event => {
    const value = name === "photo"
      ? event.target.files[0]
      : event.target.value
    setValues({...values, [name]: value })
  }

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar src={"/api/users/photo/" + values.user._id}/>
            }
            title={values.user.name}
            className={classes.cardHeader}
          />

          <CardContent className={classes.cardContent}>
            <TextField
              placeholder="Share your thoughts ..."
              multiline
              rows="5"
              label="What`s happening?"
              variant="outlined"
              value={values.text}
              onChange={handleChange("text")}
              className={classes.textField}
              margin="normal"
            />

            <input 
              accept="image/*" 
              onChange={handleChange("photo")} 
              className={classes.input} 
              id="icon-button-file" 
              type="file" 
            />

          <label htmlFor="icon-button-file">
            <IconButton 
              color="secondary" 
              className={classes.imageButton} 
              component="span"
            >
              <Image />
            </IconButton>
          </label> 
          
          <span className={classes.filename}>
            {values.photo ? values.photo.name : ""}
          </span>

          { values.error && (
            <Typography component="p" color="error">
              <Icon color="error" className={classes.error}>
                error
              </Icon>
              {values.error}
            </Typography>)
          }
        </CardContent>

        <CardActions>
          <Button 
            color="primary" 
            variant="contained" 
            disabled={values.text === ""} 
            onClick={handleClick} 
            className={classes.submit}
            startIcon={
              <PostAdd />
            }
          >
            Post
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default NewPost