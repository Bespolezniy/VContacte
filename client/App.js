import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { hot } from "react-hot-loader"

import { MuiThemeProvider } from "@material-ui/core/styles"

import MainRouter from "./MainRouter"
import theme from "./Theme"

const App = () => {

  useEffect(() => {
    const jssStyles = document.getElementById("jss-server-side")
    
    if (jssStyles && jssStyles.parentNode)  {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <MainRouter/>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default hot(module)(App)
