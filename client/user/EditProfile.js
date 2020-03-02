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
import AddPhoto from "@material-ui/icons/AddPhotoAlternate"
import { Edit } from "@material-ui/icons"

import { read, update } from "./api-user"
import auth from "../auth/auth-helper"

const useStyles = makeStyles( theme => ({
  card: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
    ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  },
  bigAvatar: {
    margin: "0 auto",
    height: 80,
    width: 80
  }
}))

const EditProfile = ({match}) => {

  const [values, setValues] = useState({
    name: "",
    about: "",
    photo: "",
    email: "",
    password: "",
    redirectToProfile: false,
    error: "",
    id: ""
  })
  const jwt = auth.isAuthenticated()
  const classes = useStyles()
  const photoUrl = values.id ? 
  `/api/users/photo/${values.id}?${new Date().getTime()}` : 
  "/api/users/defaultphoto"

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then( data => {

      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({
          ...values, 
          id: data._id, 
          name: data.name, 
          email: data.email, 
          about: data.about
        })
      }

    })
    return () => {
      abortController.abort()
    }
  }, [match.params.userId])

  const handleSubmit = () => {
    let userData = new FormData()
    values.name && userData.append("name", values.name)
    values.email && userData.append("email", values.email)
    values.passoword && userData.append("passoword", values.passoword)
    values.about && userData.append("about", values.about)
    values.photo && userData.append("photo", values.photo)
    update({
      userId: match.params.userId
    }, {
      t: jwt.token
    }, userData).then( data => {

      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({
          ...values, 
          redirectToProfile: true
        })
      }

    })
  }

  const handleChange = name => event => {
    const value = name === "photo" ? 
    event.target.files[0] : 
    event.target.value
    setValues({...values, [name]: value})
  }

  if (values.redirectToProfile) {
    return (<Redirect to={"/user/" + values.userId}/>)
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card}>
        <Typography 
          type="headline" 
          component="h2" 
          align="center"
          className={classes.title}
        >
          Edit Profile
        </Typography>

        <Avatar src={photoUrl} className={classes.bigAvatar}/>
        <br/>
        
        <label htmlFor="icon-button-file">
          <Button variant="contained" color="default" component="span">
            <AddPhoto/>
            Upload
          </Button>
        </label>

        <input 
          accept="image/*" 
          onChange={handleChange("photo")} 
          style={{display: "none"}}
          id="icon-button-file" 
          type="file" 
        />

        <span>
          {values.photo ? values.photo.name : ""}
        </span>
        <br/>

        <TextField 
          id="name" 
          label="Name" 
          value={values.name} 
          onChange={handleChange("name")} 
          margin="normal"
          variant="outlined"
          size="small"
        />
        <br/>

        <TextField 
          id="email" 
          type="email" 
          label="Email" 
          value={values.email} 
          onChange={handleChange("email")} 
          margin="normal"
          variant="outlined"
          size="small"
        />
        <br/>

        <TextField
          id="multiline-flexible"
          label="About"
          multiline
          rows="3"
          value={values.about}
          onChange={handleChange("about")}
          margin="normal"
          variant="outlined"
          size="small"
        />
        <br/>

        <TextField 
          id="password" 
          type="password" 
          label="Password"  
          value={values.password} 
          onChange={handleChange("password")} 
          margin="normal"
          variant="outlined"
          size="small"
        />
        <br/> 
        
        {
          values.error && (
            <Typography component="p" color="error">
              <Icon color="error">
                error
              </Icon>
              {values.error}
            </Typography>
          )
        }
      </CardContent>

      <CardActions>
        <Button 
          color="primary" 
          variant="outlined" 
          onClick={handleSubmit}
          startIcon={
            <Edit />
          }
        >
          Change
        </Button>
      </CardActions>
    </Card>
  )
}
  
export default EditProfile