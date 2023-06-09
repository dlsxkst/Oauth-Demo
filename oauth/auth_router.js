const {
    response
} = require('express')
const express = require('express')
const config = require('../config')
const router = express.Router()
const oauthCtrl = require('./auth_controller')

router.get('/login', (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`)

})

router.get('/callback', (req, res) => {
    try {
        oauthCtrl.oauthProcessor(req.query.code, (err, data) => {
            if (err) {
                res.status(401).send({
                    err: "Bad Request"
                })
            } else {
                res.redirect(`/welcome.html?token=${data}`)
            }
        })
    } catch (err) {

    }
})

module.exports = router