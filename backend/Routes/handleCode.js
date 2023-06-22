const express = require('express')

const router = express.Router()
router.post('/codeHandle', require('./callFuncs'))

module.exports = router