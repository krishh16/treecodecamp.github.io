const express = require('express')
const mongoDB = require('./db')
const port = 5000
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello world')
})
mongoDB()

app.use('/api', require('./Routes/createUser'))

app.listen(port, ()=>{
    console.log(`Connected to server ${port}`)
})