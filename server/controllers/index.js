const express = require('express')
const router = express.Router()
const { getAll } = require('./getAll')


// here is the route file of BE

router.get('/api/home', getAll)

module.exports = router