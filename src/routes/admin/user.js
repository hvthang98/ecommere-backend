import express from 'express'
const router = express.Router()
import userController from '../../controllers/UserController.js'
import * as authMiddleware from '../../middleware/AuthMiddleware.js'
import updateUserValidator from '../../validators/UpdateUserValidator.js'

router.use(authMiddleware.admin)
router.route('/').get(userController.getUsers)
router
    .route('/:id')
    .get(userController.getUserById)
    .put(updateUserValidator, userController.updateUser)
    .delete(userController.deleteUser)

export default router
