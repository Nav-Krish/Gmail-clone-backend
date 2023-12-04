const express = require('express')
const router=express.Router()

const {forgotPassword,resetPassword,login,register}=require('../controllers/user')


router.post('/login', login)
router.post('/register', register)
router.post('/forgot_password', forgotPassword)
router.post('/reset_password/:id/:token', resetPassword)



module.exports=router