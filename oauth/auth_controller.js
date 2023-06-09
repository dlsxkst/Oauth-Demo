const oauthService = require('./auth_service')

function oauthProcessor(code, done){
    oauthService.getGITHubAccessToken(code, (err, token)=>{
        if(err){
            done(err)
        } else {
            done(null, token)
        }
    })
}

module.exports = {
    oauthProcessor
}