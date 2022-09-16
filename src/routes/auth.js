import express from 'express'
import authController from '../controllers/AuthController.js'
import loginValidator from '../validators/LoginValidator.js'
import registerValidator from '../validators/RegisterValidator.js'
const router = express.Router()

router.post('/login', loginValidator, authController.login)
router.post('/register', registerValidator, authController.register)

export default router
