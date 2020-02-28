import React from "react"

import { Button } from "@material-ui/core"

import { follow, unfollow } from "./api-user"

const FollowButton = (props) => {

  const handleFollow = () => {
    props.handleClick(follow)
  }

  const handleUnfollow = () => {
    props.handleClick(unfollow)
  }

  return (
    <div>
      { props.following ? (
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleUnfollow}
        >
          Unfollow
        </Button>
      ) : (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleFollow}
        >
          Follow
        </Button>
      )}
    </div>
  )
}
  
export default FollowButton