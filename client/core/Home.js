import React, { useState, useEffect } from "react"

import { makeStyles } from "@material-ui/core/styles"
import { 
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core"

import auth from "./../auth/auth-helper"
import SearchPeople from "./../user/SearchPeople"
import Newsfeed from "./../post/NewsFeed"
import Logo from "./../assets/images/logo.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 400
  }
}))

const Home = ({history}) => {

  const classes = useStyles()
  const [defaultPage, setDefaultPage] = useState(false)

  useEffect(()=> {
    setDefaultPage(auth.isAuthenticated())
    
    const unlisten = history.listen (() => {
      setDefaultPage(auth.isAuthenticated())
    })
    
    return () => {
      unlisten()
    }
  }, [])

    return (
      <div className={classes.root}>
        { !defaultPage &&
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <Typography
                  align="center"
                  variant="h6" 
                  className={classes.title}
                >
                  Home Page
                </Typography>
                
                <CardMedia 
                  className={classes.media} 
                  image={Logo} title="vc"
                />

                <CardContent>
                  <Typography
                    align="center"
                    type="body1" 
                    component="p"
                  >
                    Welcome to the VC main page. 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        }

        { defaultPage &&
          <Grid container spacing={8}>
            <Grid item xs={6} sm={3}>
              <SearchPeople/>
            </Grid>

            <Grid item xs={8} sm={9}>
              <Newsfeed/>
            </Grid>
          </Grid>
        }
      </div>
    )
}

export default Home