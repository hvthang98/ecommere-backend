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
                categoryController.saveChildrenCategory(
                    req.body.parent,
                    category.id
                )
            }

            apiResponse.apiSuccess(res, __('Success'), category, 200)
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const { name, sort, active } = req.body

        try {
            const category = await categoryModel.findById(id)
            if (req.body.parent) {
                const parentNewId = req.body.parent
                const parentCurrent = await categoryModel.findOne({
                    childrens: {
                        $in: [category.id],
                    },
                })
                if (parentCurrent) {
                    if (parentNewId != parentCurrent.id) {
                        categoryController.deleteParentCategory(category.id)
                    }
                }
                //save category childrent into category parent new
                categoryController.saveChildrenCategory(
                    parentNewId,
                    category.id
                )
            }

            return apiResponse.apiSuccess(res, __('Success'), [], 200)
        } catch (err) {
            console.log(err)
        }

        return apiResponse.apiError(res, __('Error'), [], 400)
    },
    destroy: async (req, res) => {
        const { id } = req.params
        try {
            const category = await categoryModel.findByIdAndDelete(id)
            categoryController.deleteParentCategory(id)

            apiResponse.apiSuccess(res, __('Success'), [], 200)
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },
    saveChildrenCategory: async (parentId, childrenId) => {
        const parent = await categoryModel.findById(parentId)
        if (parent) {
            parent.childrens.push(childrenId)
            parent.save()
        }
    },
    deleteParentCategory: async (childrenId) => {
        const parent = await categoryModel.findOne({
            childrens: {
                $in: [childrenId],
            },
        })
        if (parent) {
            parent.childrens = parent.childrens.filter(
                (child) => child != childrenId
            )
            parent.save()
        }
    },
}

export default categoryController
