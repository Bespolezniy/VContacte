import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import { 
  Card,
  CardContent, 
  TextField,
  Icon,
  CardActions,
  Button,
  Typography,
  Box
} from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles"
import { LockOpen } from "@material-ui/icons"

import { signin } from "./api-auth"
import auth from "./auth-helper"

const useStyles = makeStyles( theme => ({
  card: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: 500
  }
}))

const SignIn = (props) => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectTo: false
  })
  const classes = useStyles()

  const handleSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    }

    signin(user).then( data => {

      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        auth.authenticate(data, () => {
          setValues({ 
            ...values, 
            error: "",
            redirectTo: true
          })
        })
      }

    })
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const { from } = props.location.state || {
    from: {
      pathname: "/"
    }
  }

  if (values.redirectTo) {
    return (<Redirect to={from}/>)
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          align="center"
          type="headline"
          variant="h4"
          component="h2" 
        >
          Sign In
        </Typography>

        <TextField 
          id="email" 
          type="email" 
          label="Email"  
          value={values.email} 
          onChange={handleChange("email")} 
          margin="normal"
          size="small"
          variant="outlined"
        />
          <br/>

        <TextField 
          id="password" 
          type="password" 
          label="Password"  
          value={values.password} 
          onChange={handleChange("password")}
          size="small"
          margin="normal"
          variant="outlined"
        />
        <br/> 
        
        {
          values.error && (
            <Box display="flex" alignItems="center">
              <Icon 
                color="error"
              >
                error
              </Icon>

              <Typography 
                component="p" 
                color="error"
              >
               {values.error}
              </Typography>
            </Box>
          )
        }
      </CardContent>
        
      <CardActions>
        <Button 
          color="primary" 
          variant="contained" 
          onClick={handleSubmit}
          startIcon={
            <LockOpen />
          }
        >
          Sign in
        </Button>
      </CardActions>
    </Card>
  )
}
  
export default SignIn