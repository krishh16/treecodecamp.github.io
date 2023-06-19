const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://krishh:1234@cluster0.iqq8koc.mongodb.net/userDB'
const mongoDB = async() => {
    await mongoose.connect(mongoURL, { useNewUrlParser: true}).then(async () => {
        console.log('Connected to db')
        
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = mongoDB