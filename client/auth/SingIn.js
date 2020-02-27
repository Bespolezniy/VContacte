import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import { 
  Card,
  CardContent, 
  TextField,
  Icon,
  CardActions,
  Button,
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { signin } from "./api-auth"
import auth from "./auth-helper"

const useStyles = makeStyles( theme => ({
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
    ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  }
}))

const SignIn = (props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [redirectTo, setRedirectTo] = useState(false)
  const classes = useStyles()

  const handleSubmit = () => {
    const user = {
      email: email || undefined,
      password: password || undefined
    }

    signin(user).then( data => {

      if (data.error) {
        setError(data.error)
      } else {
        auth.authenticate(data, () => {
          setRedirectTo(true)
        })
      }
    })
  }

  const handleChange = field => event => {
    switch(field) {
      case "email":
        setEmail(event.target.value)
        break
      case "password":
        setPassword(event.target.value)
        break
      default:
        break
    }
  }

  const { from } = props.location.state || {
    from: {
      pathname: "/"
    }
  }

  if (redirectTo) {
    return (<Redirect to={from}/>)
  }

  return (
    <Card>
      <CardContent>
        <Typography 
          type="headline" 
          component="h2" 
          className={classes.title}
        >
          Sign In
        </Typography>

        <TextField 
          id="email" 
          type="email" 
          label="Email"  
          value={email} 
          onChange={handleChange("email")} 
          margin="normal"/>
          <br/>

        <TextField 
          id="password" 
          type="password" 
          label="Password"  
          value={password} 
          onChange={handleChange("password")} 
          margin="normal"
        />
        <br/> 
        
        {
          error && (
            <Typography component="p" color="error">
              <Icon color="error">error</Icon>
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
  
export default SignIn