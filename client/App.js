import React from "react"
import { BrowserRouter } from "react-router-dom"
import { hot } from "react-hot-loader"

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { blue, deepOrange } from "@material-ui/core/colors"

import MainRouter from "./MainRouter"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue["300"],
      main: blue["400"],
      dark: blue["500"],
      contrastText: "#fff",
    },
    secondary: {
      light: deepOrange["300"],
      main: deepOrange["400"],
      dark: deepOrange["500"],
      contrastText: "#000",
    },
    openTitle: blue["400"],
    protectedTitle: deepOrange["400"],
    type: "light"
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
