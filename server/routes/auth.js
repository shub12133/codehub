const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const keys = require('../config/keys')
const passport = require('passport')
const {check,validationResult} = require('express-validator')
const {User} = require('../models/user')



//signup 
//@Path - /users/signup
//HTTP method - POST 
//check for validations using express validator - middleware 
// hash password using bcrypt
//save the user into db 
//create payload 
//create a jwt token using method sign 
//send back the token as response 
router.post('/register', [check('email').isEmail(), check('password').isLength({min:6})] ,async (req,res)=>{
    console.log(req.body)
    const errors = validationResult(req)
    if(!errors.isEmpty()){
          return res.status(422).json({errors : errors.array()})
    }
    try{
        const user = new User(req.body)
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password,salt);
        user.password = hash 
        await user.save()
        const payload = {
            user : {
              id : user._id
            }
        }
        jwt.sign(payload, keys.secretOrKey,{expiresIn:'1h'}, (err,token)=>{
          if(err){
            throw err
          }
          res.json(token)
        })
    }catch(err){
        res.status(500).send("Internal Server Error")
    }
  })
  
  //@Path - /users/login
  //HTTP - POST 
  // check for validations
  //generate token 
  router.post('/login',[check('email').isEmail(),check('password').isLength({min:6})],async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(422).json({errors: errors.array()})
    }
    try {
        const user = await User.findOne({email : req.body.email})
        
        if(!user){
          return res.status(400).json({errors : [ {msg : 'Invalid Credentials'}]})
        }
        const isMatch = await bcrypt.compare(req.body.password,user.password)
        if(!isMatch){
          return res.status(400).json({errors: {msg : 'Invalid Password'}})
        }
        const payload = {
          user : {
              id : user._id,
              name : user.name,
              email : user.email,
          }
        }
        jwt.sign(payload,keys.secretOrKey, {expiresIn: 60} , (err,token)=>{
            if(err){
              throw err
            }
            res.json(token)
        })
    }catch(err){
      res.status(500).send("Server Error")
    }
  
  })


  //github 
  router.get('/github', passport.authenticate('github'))

  //github redirect 
  router.get('/github/redirect', passport.authenticate('github'),
  (req,res)=>{
    const payload = {
        user : {
            id : req.user._id,
            name : req.user.name,
            email : req.user.email,
        }
      }
      jwt.sign(payload,"SECRETKEY", {expiresIn: 60} , (err,token)=>{
        if(err){
          throw err
        }
        //react app - store token in localstorage 
        res.redirect(`${keys.f_url}/oauth/${token}/success/${true}`)
    })
  }
  )

  router.get('/dashboard' , passport.authenticate('jwt' ,{session :false}),async (req,res)=>{
  
   try {
     const user =  await ( User.findOne({_id : req.user._id}).select('-password'))
     res.json(user)
   }
   catch(err){
     console.error(err.message)
     res.status(500).send("Server Error")
   }
      
  })

module.exports = router;

