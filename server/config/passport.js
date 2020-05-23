const  JwtStrategy = require('passport-jwt').Strategy,
       ExtractJwt = require('passport-jwt').ExtractJwt;
const GitHubStrategy = require('passport-github').Strategy;
const {User} = require('../models/user')
const keys = require('./keys')
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport =>{
    passport.use(
       new JwtStrategy(opts ,(jwt_payload,done)=>{
            console.log(jwt_payload)
           User.findOne({_id:jwt_payload.user.id})
           .then((user)=>{
               if(user){
                   return done(null ,user) 
               }
               return done(null ,false)
           })
           .catch((err)=> console.log(err))
       }) 
    );
    passport.use(new GitHubStrategy({
        clientID: keys.github.id,
        clientSecret:  keys.github.clientSecret,
        callbackURL: keys.github.redirectUrl
      },
      (accessToken, refreshToken, profile, done) => {
       
        User.findOne({ githubId: profile._json.id })
        .then((user)=> {
            if(user){
                return done(null,user)
            }else{
                User.findOne({email : profile._json.email})
                .then(usr=>{
                    if(usr) {
                        usr.githubId = profile._json.id
                        usr.save()
                        .then(u=>{
                            return done(null,u)
                        })
                    }else {
                        const newUser = new User({
                            name : profile.displayName,
                            email : profile._json.email,
                            githubId : profile._json.id,

                        })
                        newUser.save().then((user)=>{
                            return done(null ,user)
                        })
                        .catch(err=> {
                            console.log(err)
                        })
                    }
                    
                })
            }
        })
      }
    ));
}
