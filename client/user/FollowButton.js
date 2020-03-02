import React from "react"

import { Button } from "@material-ui/core"

import { follow, unfollow } from "./api-user"

const FollowButton = ({ handleClick, following }) => {

  const handleFollow = () => {
    handleClick(follow)
  }

  const handleUnfollow = () => {
    handleClick(unfollow)
  }

  return (
    <div>
      { following ? (
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