import categoryModel from '../models/Category.js'
import * as apiResponse from '../helpers/ApiRespone.js'

const categoryController = {
    index: async (req, res) => {
        try {
            const categories = await categoryModel
                .find({ active: true })
                .populate('childrens')
            apiResponse.apiSuccess(res, __('Success'), categories, 200)
        } catch (error) {
            console.error(error)
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },
    store: async (req, res) => {
        try {
            const { name, sort, active } = req.body
            const category = await categoryModel.create({
                name,
                sort,
                active,
            })

            if (req.body.parent) {
                const parent = await categoryModel.findById(req.body.parent)
                if (parent) {
                    parent.childrens.push(category._id)
                    await parent.save()
                }
            }

            apiResponse.apiSuccess(res, __('Success'), category, 200)
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },
    update: (req, res) => {},
    delete: (req, res) => {},
}

export default categoryController
