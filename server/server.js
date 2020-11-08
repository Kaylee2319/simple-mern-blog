const express = require('express')
//is this the new app.js? yes :D 
const articleRouter = require('./article/router')

//initializes server 
const server = express()

//middleware 
server.use(express.json())
server.use(express.urlencoded({ extended: false}))
server.use('/articles', articleRouter)

//OPEN MONGOOSE CONNECTION? 
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost:27017/simple-mern-blog`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB connection established."))


const PORT = process.env.port || 4000 
server.listen(PORT, ()=> console.log(`Express is listening on port: ${PORT}`))
