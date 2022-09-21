import orderRoutes from './order.js'
// import productRoutes from './product.js'
import userAdminRoutes from './admin/user.js'
import userFrontEndRoutes from './frontend/user.js'
import uploadRoutes from './upload.js'
import authRoutes from './auth.js'
import categoryAdminRoutes from './admin/category.js'
import productAdminRoutes from './admin/product.js'
// import authMiddleware from '../middleware/authMiddleware.js'

const routes = (app) => {
    app.use('/api/auth', authRoutes)

    //admin
    app.use('/api/admin/users', userAdminRoutes)
    app.use('/api/admin/category', categoryAdminRoutes)
    app.use('/api/admin/product', productAdminRoutes)
    //frontend
    app.use('/api/users', userFrontEndRoutes)
    app.use('/api/orders', orderRoutes)
    // app.use('/api/products', productRoutes)
    app.use('/api/upload', uploadRoutes)

    app.get('/api/config/paypal', (req, res) =>
        res.send(process.env.PAYPAL_CLIENT_ID)
    )
}

export default routes
