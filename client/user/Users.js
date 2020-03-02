import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { 
  Paper,
  List, 
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Person, ArrowForward } from "@material-ui/icons"

import { list } from "./api-user"

const useStyles = makeStyles( theme => ({
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
    ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  }
}))

const Users = () => {

  const [users, setUsers] = useState([])
  const classes = useStyles()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list(signal).then( data => {

      if (data && data.error) {
        console.log(data.error)
      } else {
        setUsers(data)
      }

    })  
    
    return () => abortController.abort()
  }, [])

  return (
    <Paper elevation={4}>
      <Typography type="title" className={classes.title}>
        All Users
      </Typography>

      <List dense>
        {users.map((item, i) => {
          const photoUrl = item._id ? 
          `/api/users/photo/${item._id}?${new Date().getTime()}`: 
          "/api/users/defaultphoto"

          return (
            <Link to={"/user/" + item._id} key={i}>
              <ListItem button="button">
                <ListItemAvatar>
                  <Avatar src={photoUrl} />
                </ListItemAvatar>

                <ListItemText primary={item.name}/>

                <ListItemSecondaryAction>
                  <IconButton>
                    <ArrowForward/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Link>
          )
        })}
      </List>
    </Paper>
  )
}
  

export default Users