import express from 'express'
const router = express.Router()
import userController from '../../controllers/UserController.js'
import * as authMiddleware from '../../middleware/AuthMiddleware.js'
import updateUserValidator from '../../validators/UpdateUserValidator.js'

router.use(authMiddleware.protect)
router
    .route('/profile')
    .get(userController.getProfile)
    .put(updateUserValidator, userController.updateProfile)

export default router
