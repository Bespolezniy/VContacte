import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { 
  Card,
  CardContent, 
  CardMedia,
  Typography
} from "@material-ui/core"

import Mern from "./../assets/images/mern.webp"

const useStyles = makeStyles( theme => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
    ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
}))

const Home = () => {

  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <Typography 
          type="headline" 
          component="h2" 
          className={classes.title}
        >
          Main Page
        </Typography>

        <CardMedia 
          className={classes.media} 
          image={Mern}
          title="Welcome"/>

        <CardContent>
          <Typography type="body1" component="p">
            Welcome to the My boiler code home page
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Home