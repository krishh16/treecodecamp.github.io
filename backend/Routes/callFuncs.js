const esprima = require('esprima')

const codeCallBack = (req, res) => {
    const { userCode, tests } = req.body
    const tokenizedCode = esprima.tokenize(userCode)
    const parsedCode = esprima.parse(userCode)
    res.send({tokenizedCode, parsedCode})
}
module.exports = codeCallBack