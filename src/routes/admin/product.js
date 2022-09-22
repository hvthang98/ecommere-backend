import express from 'express'
import * as authMiddleware from '../../middleware/authMiddleware.js'
import productController from '../../controllers/ProductController.js'
import { upload } from '../../config/storage.js'
const router = express.Router()

router.use(authMiddleware.admin)
router
    .route('/')
    .get(productController.index)
    .post(upload('product/image', 'image').single('image'), productController.store)
router
    .route('product/:id')
    .get(productController.show)
    .put(productController.update)
    .delete(productController.destroy)

export default router
