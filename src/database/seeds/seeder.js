import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './users.js'
import products from './products.js'
import user from '../../models/User.js'
import product from '../../models/Product.js'
import order from '../../models/Order.js'
import { connectDB } from '../../config/database.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await order.deleteMany()
        await product.deleteMany()
        await user.deleteMany()

        const createdUsers = await user.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        })

        await product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await order.deleteMany()
        await product.deleteMany()
        await user.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
