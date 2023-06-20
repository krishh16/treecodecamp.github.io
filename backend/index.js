const express = require('express')
const cors = require('cors')
const mongoDB = require('./db')
const port = 5000
const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

mongoDB()

app.use('/api', require('./Routes/createUser'))

app.listen(port, ()=>{
    console.log(`Connected to server ${port}`)
})