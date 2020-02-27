import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import { 
  IconButton,
  Dialog, 
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  DialogActions
} from "@material-ui/core"
import { Delete } from "@material-ui/icons"

import { remove } from "./api-user"
import auth from "../auth/auth-helper"

const DeleteUser = (props) => {

  const [redirect, setRedirect] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(true)

  const handleRequestClose = () => setOpen(false)
   
  const deleteAccount = () => {
    const jwt = auth.isAuthenticated()
    remove({
      userId: props.userId
    }, {t: jwt.token})
      .then( data => {

        if (data.error) {
          console.log(data.error)
        } else {
          auth.signout(() => console.log("deleted"))
          setRedirect(true)
        }
      }
    )
  }

  if (redirect) {
    return (<Redirect to="/"/>)
  }

  return (
    <span>
      <IconButton 
        aria-label="Delete" 
        onClick={handleClick}
        color="secondary"
      >
        <Delete/>
      </IconButton>

      <Dialog open={open} onClose={handleRequestClose}>
        <DialogTitle>Delete Account</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Confirm to delete your account.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button 
            onClick={handleRequestClose} 
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>

          <Button 
            onClick={deleteAccount} 
            color="secondary"
            autoFocus="autoFocus"
            variant="outlined"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}
  
export default DeleteUser