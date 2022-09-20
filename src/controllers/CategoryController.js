import categoryModel from '../models/Category.js'
import * as apiResponse from '../helpers/ApiRespone.js'

const categoryController = {
    /**
     * Get categories and sub category into level 3 of category parent
     *
     * @path /admin/category
     * @method GET
     * @param {*} req
     * @param {*} res
     * @return {JSON} json
     */
    index: async (req, res) => {
        try {
            const categories = await categoryModel
                .find({ active: true, showFirstLevel: true })
                .populate({
                    path: 'childrens',
                    options: {
                        sort: { sort: 1 },
                    },
                    populate: {
                        path: 'childrens',
                        options: {
                            sort: { sort: 1 },
                        },
                    },
                })
                .sort({ sort: 1 })
            apiResponse.apiSuccess(res, __('Success'), categories, 200)
        } catch (error) {
            console.error(error)
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },
    /**
     * Create a category
     *
     * @method POST
     * @path /admin/category
     * @param {*} req
     * @param {*} res
     * @return {JSON} json
     */
    store: async (req, res) => {
        try {
            const { name, sort, active, showFirstLevel } = req.body
            const category = await categoryModel.create({
                name,
                sort,
                active,
                showFirstLevel,
            })

            if (req.body.parent) {
                categoryController.addSubCategory(req.body.parent, category.id)
            }

            apiResponse.apiSuccess(res, __('Success'), category, 200)
        } catch (error) {
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },
    /**
     * Get detail a category
     *
     * @path /admin/category/:id
     * @method GET
     * @param {*} req
     * @param {*} res
     * @return {JSON} json
     */
    show: async (req, res) => {
        const { id } = req.params
        try {
            const category = await categoryModel
                .findOne({ _id: id, active: true })
                .populate({
                    path: 'childrens',
                    options: {
                        sort: { sort: 1 },
                    },
                    populate: {
                        path: 'childrens',
                        options: {
                            sort: { sort: 1 },
                        },
                    },
                })
            if (!category) {
                apiResponse.apiError(res, __('Category not found'), [], 404)
            }
            apiResponse.apiSuccess(res, __('Success'), category, 200)
        } catch (error) {
            console.error(error)
            apiResponse.apiError(res, __('An error occurred'), [], 400)
        }
    },
    /**
     * Update a category
     *
     * @path /admin/category/:id
     * @method PUT
     * @param {*} req
     * @param {*} res
     * @returns {JSON} json
     */
    update: async (req, res) => {
        const { id } = req.params
        const { name, sort, active, showFirstLevel } = req.body

        try {
            const category = await categoryModel.findOneAndUpdate(
                { _id: id },
                { name, sort, active, showFirstLevel },
                { upsert: true }
            )
            if (req.body.parent) {
                const parentNewId = req.body.parent
                //save category childrent into category parent
                categoryController.addSubCategory(parentNewId, category.id)
            } else {
                categoryController.deleteParentCategory(category.id)
            }

            return apiResponse.apiSuccess(res, __('Success'), [], 200)
        } catch (err) {
            console.log(err)
        }

        return apiResponse.apiError(res, __('Error'), [], 400)
    },
    /**
     * Delete a category
     *
     * @path /admin/category/:id
     * @method DELETE
     * @param {*} req
     * @param {*} res
     * @return {JSON} json
     */
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
    /**
     * Add a sub category into category
     *
     * @param {string} parentId
     * @param {string} childrenId
     * @return {void}
     */
    addSubCategory: async (parentId, childrenId) => {
        const parent = await categoryModel.findById(parentId)
        if (parent && parent.childrens.indexOf(childrenId) == -1) {
            parent.childrens.push(childrenId)
            parent.save()
        }
    },
    /**
     * Remove category parent of sub category
     *
     * @param {string} childrenId
     * @return {void}
     */
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
