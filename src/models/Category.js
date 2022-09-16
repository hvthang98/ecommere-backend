import mongoose from 'mongoose'

const schema = mongoose.Schema(
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

const methods = {
    
}

schema.methods = { ...schema.methods, ...methods }

const category = mongoose.model('Category', schema)

export default category
