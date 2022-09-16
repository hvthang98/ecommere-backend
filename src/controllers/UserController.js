import userModel from '../models/User.js'
import * as apiResponse from '../helpers/ApiRespone.js'
import userResource from '../resources/UserResource.js'

const userController = {
    /**
     * @desc Get all users
     * @route GET /api/admin/users/
     *
     * @return json
     */
    getUsers: async (req, res) => {
        try {
            const users = await userModel.find({})
            apiResponse.apiSuccess(
                res,
                __('Success'),
                userResource.collection(users),
                200
            )
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },

    /**
     * @desc    Get user by ID
     * @route   GET /api/admin/users/:id
     * @access  Admin
     *
     * @return json
     */
    getUserById: async (req, res) => {
        try {
            const user = await userModel
                .findById(req.params.id)
                .select('-password')

            if (user) {
                apiResponse.apiSuccess(
                    res,
                    __('Success'),
                    userResource.filter(user),
                    200
                )
            } else {
                apiResponse.apiError(res, __('User not found'), [], 404)
            }
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },

    /**
     * @desc    Update user
     * @route   PUT /api/admin/users/:id
     * @access  Private/Admin\
     *
     * @return json
     */
    updateUser: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            if (user) {
                user.name = req.body.name || user.name
                user.email = req.body.email || user.email
                user.isAdmin = req.body.isAdmin || user.isAdmin

                const updatedUser = await user.save()

                apiResponse.apiSuccess(
                    res,
                    __('Success'),
                    userResource.filter(user),
                    200
                )
            } else {
                apiResponse.apiError(res, __('User not found'), [], 404)
            }
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },

    /**
     * @desc    Delete user
     * @route   DELETE /api/admin/users/:id
     * @access  Private/Admin
     *
     * @returns json
     */
    deleteUser: async (req, res) => {
        try {
            const user = await userModel.findByIdAndDelete(req.params.id)
            apiResponse.apiSuccess(res, __('Success'), [], 200)
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },

    /**
     * @desc    Get user profile
     * @route   GET /api/users/profile
     * @access  Private
     *
     * @return json
     */
    getProfile: async (req, res) => {
        try {
            const user = await userModel.findById(req.user._id)
            if (user) {
                apiResponse.apiSuccess(res, __('Success'), userResource.filter(user), 200)
            } else {
                apiResponse.apiError(res, __('User not found'), [], 404)
            }
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },

    /**
     * @desc    Update user profile
     * @route   PUT /api/users/profile
     * @access  Private
     * 
     * @return json 
     */
    updateProfile: async (req, res) => {
        try {
            const user = await userModel.findById(req.user._id)
            if (user) {
                user.name = req.body.name || user.name
                const updatedUser = await user.save()
                
                apiResponse.apiSuccess(res, __('Success'), userResource.filter(user), 200)
            } else {
                apiResponse.apiError(res, __('User not found'), [], 404)
            }
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },
}

export default userController
