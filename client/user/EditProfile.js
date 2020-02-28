import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"

import { 
  Card,
  CardContent, 
  TextField,
  Icon,
  CardActions,
  Button,
  Typography,
  Avatar
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FileUpload from "@material-ui/icons/FileCopy"

import { read, update } from "./api-user"
import auth from "../auth/auth-helper"

const useStyles = makeStyles( theme => ({
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
    ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  }
}))

const EditProfile = (props) => {

  const [redirectToProfile, setRedirectToProfile] = useState(false)
  const [name, setName] = useState("")
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [about, setAbout] = useState("")
  const [photo, setPhoto] = useState("")
  const [photoFile, setPhotoFile] = useState(null)
  const classes = useStyles()
  const photoUrl = userId
  ? `/api/users/photo/${userId}?${new Date().getTime()}`
  : '/api/users/defaultphoto'

  const init = userId => {
    const jwt = auth.isAuthenticated()
    read({
      userId: userId
    }, 
    {t: jwt.token})
      .then( data => {

        if (data.error) {
          setError(data.error)
        } else {
          setUserId(data._id)
          setName(data.name)
          setEmail(data.email)
          setAbout(data.about)
        }
      }
    )
  }

  useEffect(() => {
    init(props.match.params.userId)
  }, [])

  const handleSubmit = () => {
    const jwt = auth.isAuthenticated()
    const userData = new FormData()
    userData.set("name", name)
    userData.set("email", email)
    userData.set("password", password)
    userData.set("about", about)
    userData.set("photo", photoFile)
    update({
      userId: props.match.params.userId
    }, {
      t: jwt.token
    }, userData).then( data => {

      if (data.error) {
        setError(data.error)
      } else {
        setUserId(data._id)
        setRedirectToProfile(true)
      }
    })
  }

  const handleChange = field => event => {
    switch(field) {
      case "name":
        setName(event.target.value)
        break
      case "email":
        setEmail(event.target.value)
        break
      case "password":
        setPassword(event.target.value)
        break
      case "about":
        setAbout(event.target.value)
      case "photo":
        setPhoto(event.target.value)
        setPhotoFile(event.target.files[0])
      default:
        break
    }
  }

  if (redirectToProfile) {
    return (<Redirect to={"/user/" + userId}/>)
  }

  return (
    <Card>
      <CardContent>
        <Typography 
          type="headline" 
          component="h2" 
          className={classes.title}
        >
          Edit Profile
        </Typography>

        <Avatar>
          <Avatar src={photoUrl}/>
        </Avatar>

        <input 
          accept="image/*" 
          onChange={handleChange("photo")} 
          id="icon-button-file" 
          type="file"
          required
        />
        
        <label htmlFor="icon-button-file">
          <Button variant="contained" color="default" component="span">
            Upload
            <FileUpload/>
          </Button>
        </label>
        
        <span>
          {photo ? photo.name : ""}
        </span>
        <br/>

        <TextField 
          id="name" 
          label="Name" 
          value={name} 
          onChange={handleChange("name")} 
          margin="normal"
        />
        <br/>

        <TextField 
          id="email" 
          type="email" 
          label="Email" 
          value={email} 
          onChange={handleChange("email")} 
          margin="normal"
        />
        <br/>

        <TextField
          id="multiline-flexible"
          label="About"
          multiline
          rows="2"
          value={about}
          onChange={handleChange("about")}
          margin="normal"
        /><br/>

        <TextField 
          id="password" 
          type="password" 
          label="Password"  
          value={password} 
          onChange={handleChange("password")} 
          margin="normal"
          required
        />
        <br/> 
        
        {
          error && (
            <Typography component="p" color="error">
              <Icon color="error">
                error
              </Icon>
              {error}
            </Typography>
          )
        }
      </CardContent>

      <CardActions>
        <Button 
          color="primary" 
          variant="contained" 
          onClick={handleSubmit} 
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  )
}
  
export default EditProfile