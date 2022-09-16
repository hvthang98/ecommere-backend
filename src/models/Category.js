import mongoose from 'mongoose'

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        sort: {
            type: Number,
            default: 0,
        },
        active: {
            type: Boolean,
            default: false,
        },
        childrens: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Category',
            },
        ],
    },
    {
        timestamps: true,
    }
)

const category = mongoose.model('Category', categorySchema)

export default category
