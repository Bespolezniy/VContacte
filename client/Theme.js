import { createMuiTheme } from "@material-ui/core/styles"
import { green, deepOrange } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: green["300"],
      main: green["400"],
      dark: green["500"],
      contrastText: "#fff",
    },
    secondary: {
      light: deepOrange["300"],
      main: deepOrange["400"],
      dark: deepOrange["500"],
      contrastText: "#000",
    },
    openTitle: green["400"],
    protectedTitle: deepOrange["400"],
    type: "light"
  }
})

export default theme