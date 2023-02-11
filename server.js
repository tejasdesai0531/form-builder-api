require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')


mongoose.connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })