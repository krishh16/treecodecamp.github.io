const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jsontoken = require('jsonwebtoken')
const jsonSecret = 'myfreakinsecretforjsonisntthatcoolafyahoo'
//api for creating user and posting it on mongod db
router.post('/createuser', async (req, res) => {
    //checks if the user already exists in the database
    const { userName, email, password, techInterest } = req.body
    const isUserName = await User.findOne({ userName })
    const isEmail = await User.findOne({ email })
    if (isEmail || isUserName) {
        //sending boolean value to make conditional statement in the frontend
        return res.status(401).send({ userExists: true })
    }
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPWD = await bcrypt.hash(password, salt)

        await User.create({
            userName,
            email,
            password: hashedPWD,
            techInterest
        }
        )
        return res.status(200).send({ success: true })
    }
    catch (error) {
        return res.status(400).send({ success: false })
    }
})

router.post('/loginuser', async (req, res) => {
    const { userName, email, password } = req.body
    try {
        const userEmail = await User.findOne({ email })
        const comparePasswd = await bcrypt.compare(password, userEmail.password)
        if (!userEmail) {
           return res.send({ noSuchUser: true })
        } else if (!comparePasswd) {
            res.send({ pwdError: true })
        }
        const data = {
            user: {
                id: userEmail.id
            }
        }
        const authToken = jsontoken.sign(data, jsonSecret)
       return res.json({ success: true, authToken })
    }
    catch (error) {
        return res.send(error)
    }
})
module.exports = router