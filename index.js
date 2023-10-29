const express = require('express')
const dbConnect = require('./config/dbConnect')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000
const bodyParser = require('body-parser')
const authRouter = require('./routes/authRoute')
const { notfound, errorHandlingApi } = require('./middlewares/errorHandler')
const cookieParser = require('cookie-parser')
const productRouter = require('./routes/productRoute')
const app = express()

dbConnect() // Connect to the database

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/user', authRouter)
app.use('/api/product', productRouter)

app.use(notfound)
app.use(errorHandlingApi)

app.listen(PORT, () => {
   console.log(`Server is Running at Port ${PORT}`)
})
