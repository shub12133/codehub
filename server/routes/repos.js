const express = require('express')
const router = express.Router()
const { Gitlab } = require('@gitbeaker/node')

const api = new Gitlab({
  host: 'https://gitlab.com',
  token: 'Aqo8yL2zwM3SQXqs-sEL',
});

//path - /api/repos/users
router.get('/users',async (req,res)=>{
try{ 
   let users = await api.Users.all();
   console.log(users)
   res.json(users)
}catch(err){
  res.status(500).json(err)
}
})

router.get('/projects',async (req,res)=>{
 let projects= await api.Projects.all({ maxPages: 2, perPage: 40 })
  .then((projects) => {
    console.log("pr",projects);
    res.json(projects)
  })
  .catch((err)=> {
    console.log("err",err)
  })
})
module.exports = router