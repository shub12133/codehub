const express = require('express')
const router = express.Router()
const { Gitlab } = require('@gitbeaker/node')

const api = new Gitlab({
    token: 'personaltoken',
  });;

console.log(api)
module.exports = router