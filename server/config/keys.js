require('dotenv').config()

if(process.env.NODE_ENV === "production"){
    console.log("************starting server in prod mode**********")
    module.exports = {
        mongoURI : process.env.MONGO_URI,
        secretOrKey: process.env.SECRET_OR_KEY,
        f_url : process.env.F_URL,
        github : {
            id : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_CLIENT_SECRET,
            redirectUrl : process.env.GITHUB_REDIRECT_URL
        },
        nodemailer : {
            email : process.env.NODE_MAILER_EMAIL,
            password: process.env.NODE_MAILER_PASSWORD

        }
    }
}else{
    console.log("************starting server in dev mode**********")
    module.exports = {
        mongoURI : "mongodb://localhost:27017/cb2020pro",
        secretOrKey: "secret",
        f_url : 'http://localhost:3000',
        github : {
            id : 'Iv1.6e9eda6099477c5d',
            clientSecret : 'f590b56fc90a38820bf84002f97d2bab64e9af15',
            redirectUrl : '/auth/github/redirect'
        },
        nodemailer : {
            email : '',
            password: ''

        }
}
}