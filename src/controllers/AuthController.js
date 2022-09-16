import userModel from '../models/User.js'
import generateToken from '../utils/GenerateToken.js'
import { apiSuccess, apiError } from '../helpers/ApiRespone.js'

const authController = {
    /**
     * Login user
     *
     * @param {username, password} req
     * @param {token, token_type} res
     * @returns mixed
     */
    login: async (req, res) => {
        const { username, password } = req.body

        const user = await userModel.findOne({ username })

        if (user && (await user.matchPassword(password))) {
            let response = {
                token: generateToken(user._id),
                token_type: 'bearer',
            }

            return apiSuccess(res, 'success', response)
        }

        return apiError(res, 'Invalid email or password', [], 401)
    },
    /**
     * Register user
     *
     * @param {Object} req
     * @param {Object} res
     *
     * @returns mixed
     */
    register: async (req, res) => {
        const { name, username, password } = req.body

        const user = await userModel.create({
            username,
            name,
            email: username,
            password,
        })

        if (user) {
            return apiSuccess(
                res,
                'success',
                {
                    token: generateToken(user._id),
                    token_type: 'bearer',
                },
                201
            )
        }
        return apiError(res, 'An error occurred', [], 400)
    },
}

export default authController
