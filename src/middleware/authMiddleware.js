import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/User.js'
import * as ApiRespone from '../helpers/ApiRespone.js'

const protect = async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            ApiRespone.apiError(res, __('Token is invalid'), [], 401)
        }
    }

    if (!token) {
        ApiRespone.apiError(res, __('Token is invalid'), [], 401)
    }
}

const admin = async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')
            if (req.user && req.user.isAdmin) {
                next()
            }else{
                ApiRespone.apiError(res, __('Token is invalid'), [], 401)
            }
        } catch (error) {
            ApiRespone.apiError(res, __('Token is invalid'), [], 401)
        }
    }

    if (!token) {
        ApiRespone.apiError(res, __('Token is invalid'), [], 401)
    }
}

export { protect, admin }
