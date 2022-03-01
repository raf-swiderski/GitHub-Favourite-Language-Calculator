require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.static('static'))

app.get('/', (req, res) => { })

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

