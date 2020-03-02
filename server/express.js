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

import MainRouter from "./../client/MainRouter"
import userRoutes from "./routes/user.routes"
import authRoutes from "./routes/auth.routes"
import index from "../index"
import devBundle from "./devBundel"
import theme from "./../client/Theme"
import postRoutes from "./routes/post.routes"

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
app.use("/", postRoutes)

app.get("*", (req, res) => {
  
  const sheets = new ServerStyleSheets()
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
  } else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }

})

export default app