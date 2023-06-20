const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const jsonSecret = 'myfreakinsecretforjsonisntthatcoolafyahoo'
//api for creating user and posting it on mongod db
router.post('/createuser', async (req, res) => {
    //checks if the user already exists in the database
    const { userName, email, password, techInterest, profession, bio } = req.body
    const isEmail = await User.findOne({ email })
    const isUser = await User.findOne({ userName })
    if (isEmail) {
        //sending boolean value to make conditional statement in the frontend
        return res.status(401).send({ userExists: true })
    } else if (isUser) {
        return res.status(400).send({ userNameExists: true })
    }
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPWD = await bcrypt.hash(password, salt)

        await User.create({
            userName,
            email,
            password: hashedPWD,
            techInterest,
            profession,
            bio
        }
        )
        return res.status(200).send({ success: true })
    }
    catch (error) {
        return res.status(400).send({ success: false, error })
    }
})

router.post('/loginuser', async (req, res) => {
    const { email, password } = req.body
    try {
        const userEmail = await User.findOne({ email })
        const comparePasswd = await bcrypt.compare(password, userEmail.password)
        if (!userEmail) {
            return res.send({ noSuchUser: true })
        } else if (!comparePasswd) {
            res.send({ pwdError: true })
        }
        const data = {

            id: userEmail.id

        }
        const authToken = jwt.sign(data, jsonSecret)
        return res.json({ success: true, authToken })
    }
    catch (error) {
        return res.send({ success: false, error })
    }
})
router.get('/profile', (req, res) => {
    const authToken = req.headers.Authorization.split(' ')[1];

    try {
        // Verify and decode the authToken
        const decodedToken = jwt.verify(authToken, jsonSecret);
        const userId = decodedToken.id
        const userData = User.findOne({ userName:userId.userName, profession: userId.profession, bio: userId.bio })


        res.status(400).json(userData);
    } catch (error) {
        res.status(401).json({ error: 'Invalid authToken' });
    }
});
module.exports = router