const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    code: { type: Number, required: true, unique: true },
    status: {type: String, enum: ['draft', 'trash', 'published'], required: true},
    imported_t: {type: Date, required: true},
    url: String,
    creator: String,
    created_t: Number,
    last_modified_t: Number,
    product_name: String,
    quantity: String,
    brands: String,
    categories: String,
    labels: String,
    cities: String,
    purchase_places: String,
    stores: String,
    ingredients_text: String,
    traces: String,
    serving_size: String,
    serving_quantity: Number,
    nutriscore_score: Number,
    nutriscore_grade: String,
    main_category: String,
    image_url: String,
});

module.exports = mongoose.model('Products', productSchema)