const express = require('express')

const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login
router.post('/login', loginUser)

// signup
router.post('/signup', signupUser)

// 
router.get('/', (req, res) => {
    res.json({ mssg: 'get a ----' })
})


module.exports = router