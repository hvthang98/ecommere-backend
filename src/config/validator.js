import niv from 'node-input-validator'
import mongoose from 'mongoose'

const validator = () => {
    niv.extend('unique', async ({ value, args }) => {
        // default field is _id in this example
        const field = args[1] || '_id'

        let condition = {}

        condition[field] = value

        try {
            // add ignore condition
            if (args[2]) {
                condition['_id'] = { $ne: mongoose.Types.ObjectId(args[2]) }
            }

            let checkExist = await mongoose
                .model(args[0])
                .findOne(condition)
                .select(field)

            // field already exists
            if (checkExist) {
                return false
            }

            return true
        } catch (err) {
            console.error(err)
        }

        return false
    })
}

export default validator
