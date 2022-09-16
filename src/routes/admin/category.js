import express from 'express'
const router = express.Router()
import categoryController from '../../controllers/CategoryController.js'
import * as authMiddleware from '../../middleware/authMiddleware.js'

router.use(authMiddleware.admin)
router.route('/').get(categoryController.index).post(categoryController.store)
router.route('/:id').put(categoryController.update).delete(categoryController.destroy)

export default router
