import React, { useState } from "react"
import { Link } from "react-router-dom"

import { 
  Card,
  CardContent, 
  TextField,
  Icon,
  CardActions,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Box
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { LockOpen } from "@material-ui/icons"

import { create } from "./api-user"

const useStyles = makeStyles( theme => ({
  card: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: 500
  },
  link: {
    fontWeight: "bold",
    textDecoration: "none"
  }
}))

const SignUp = () => {

  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    open: false,
    error: ""
  })
  const classes = useStyles()

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    create(user).then( data => {

      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        setValues({ ...values, error: "", open: true})
      }
    })
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography 
            type="headline"
            variant="h4"
            component="h2"
            align="center"
          >
            Sign Up
          </Typography>

          <TextField 
            id="name" 
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            variant="outlined"
            size="small"
            margin="normal"
          />
          <br/>
          
          <TextField 
            id="email" 
            type="email" 
            label="Email" 
            value={values.email}
            onChange={handleChange("email")}
            variant="outlined"
            size="small"
            margin="normal"
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

          {values.error && (
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
          )}
        </CardContent>

        <CardActions>
          <Button 
            color="primary" 
            variant="contained"
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </CardActions>
      </Card>

    <Dialog open={values.open} disableBackdropClick={true}>
      <DialogTitle>New Account</DialogTitle>

      <DialogContent>
        <DialogContentText>
          New account successfully created.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Link className={classes.link} to="/signin">
          <Button 
            color="primary" 
            autoFocus="autoFocus" 
            variant="contained"
            startIcon={
              <LockOpen />
            }
          > 
            Sign In
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  </div>
  )
}
  

export default SignUp