const express = require('express')
const mongoDB = require('./db')
const port = 5000
const app = express()
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello world')
})
mongoDB()

app.use('/api', require('./Routes/createUser'))

app.listen(port, ()=>{
    console.log(`Connected to server ${port}`)
})