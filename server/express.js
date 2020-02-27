import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compress from "compression"
import cors from "cors"
import helmet from "helmet"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import { blue, deepOrange } from "@material-ui/core/colors"

import MainRouter from "./../client/MainRouter"
import userRoutes from "./routes/user.routes"
import authRoutes from "./routes/auth.routes"
import index from "../index"
import devBundle from "./devBundel"

const app = express()
devBundle.compile(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

const CURRENT_WORKING_DIR = process.cwd()
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")))

app.use("/", userRoutes)
app.use("/", authRoutes)

app.get("*", (req, res) => {
  
  const sheets = new ServerStyleSheets()
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
    },
  })
  const context = {}
  const markup = ReactDOMServer.renderToString(
    sheets.collect(<StaticRouter location={req.url} context={context}>
     
        <ThemeProvider 
          theme={theme}
        >
          <MainRouter/>
        </ThemeProvider>
      
    </StaticRouter>)
  )

  if (context.url) {
    return res.redirect(303, context.url)
  }

  const css = sheets.toString()
  res.status(200).send(index({
    markup: markup,
    css: css
  }))
}) 

app.use((err, req, res, next) => {

  if (err.name === "UnauthorizedError") {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }

})

export default app