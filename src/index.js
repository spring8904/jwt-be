import 'dotenv/config'
import express from 'express'
import process from 'process'
import configViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

configViewEngine(app)

initWebRoutes(app)

app.listen(PORT, () =>
  console.log('App is running on http://localhost:' + PORT),
)
