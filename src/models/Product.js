import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
)

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: null,
        },
        brand: {
            type: String,
            default: null,
        },
        category: {
            type: Array,
            default: [],
            ref: 'Category',
        },
        description: {
            type: String,
            default: null,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },
        createBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        // reviews: [reviewSchema],
        // rating: {
        //     type: Number,
        //     default: 0,
        // },
        // numReviews: {
        //     type: Number,
        //     required: true,
        //     default: 0,
        // },
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product
