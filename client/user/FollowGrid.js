import React from "react"
import { Link } from "react-router-dom"

import { 
  Avatar,
  Typography,
  GridList,
  GridListTile
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles( theme => ({
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
    ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  }
}))

const FollowGrid = props => {

const classes = useStyles()
    
return (
  <div className={classes.root}>
    <GridList cellHeight={160} cols={4}>
      {props.people.map((person, i) => (
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