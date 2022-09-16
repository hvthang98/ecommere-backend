import express from 'express'
const router = express.Router()
import categoryController from '../../controllers/CategoryController.js'
import * as authMiddleware from '../../middleware/authMiddleware.js'

router.use(authMiddleware.admin)
router.route('/').get(categoryController.index).post(categoryController.store)

export default router
