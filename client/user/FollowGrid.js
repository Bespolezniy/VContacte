import React from "react"
import { Link } from "react-router-dom"

import { 
  Avatar,
  Typography,
  GridList,
  GridListTile
} from "@material-ui/core"

const FollowGrid = ({people}) => {
    
return (
  <div>
    <GridList cellHeight={160} cols={4}>
      {people.map((person, i) => (
        <GridListTile style={{"height":120}} key={i}>
          <Link to={"/user/" + person._id}>
            <Avatar src={"/api/users/photo/" + person._id} />

            <Typography>
              {person.name}
            </Typography>
          </Link>
        </GridListTile>
      ))}
    </GridList>
  </div>
  )
}
  
export default FollowGrid