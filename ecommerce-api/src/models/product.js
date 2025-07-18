import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        min: 0
    },
    stock:{
        type: Number,
        required: true,
        min: 0
    },
    imagesUrl:[{
        type: [String],
        default: 'https://placehold.co/800x600.png',
        required: true
    }],
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        trim: true
    },

});

const Product = mongoose.model('Product', productSchema);

export default Product;