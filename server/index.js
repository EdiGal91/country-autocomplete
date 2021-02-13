import express from 'express'
import routes from './src/routes/index.js'

const app = express()
app.use(routes)

const { PORT: port = 3001 } = process.env
app.listen(port, () => console.log(`Server listen on port ${port}`))
