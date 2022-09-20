import express from 'express'
const router = express.Router()
import categoryController from '../../controllers/CategoryController.js'
import * as authMiddleware from '../../middleware/authMiddleware.js'
import categoryValidator from '../../validators/CategoryValidator.js'

router.use(authMiddleware.admin)
router
    .route('/')
    .get(categoryController.index)
    .post(categoryValidator, categoryController.store)
router
    .route('/:id')
    .get(categoryController.show)
    .put(categoryValidator, categoryController.update)
    .delete(categoryController.destroy)

export default router
