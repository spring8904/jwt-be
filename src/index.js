import 'dotenv/config'
import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoutes from './routes/web'

const app = express()
const PORT = process.env.PORT || 8080

configViewEngine(app)

initWebRoutes(app)

app.listen(PORT, () =>
  console.log('App is running on http://localhost:' + PORT),
)
