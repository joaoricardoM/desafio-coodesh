const Product = require("../models/product");

class ProductRepository {
	async createOrUpdateProduct(productData) {
		return await Product.findOneAndUpdate(
			{ code: productData.code },
			productData,
			{ upsert: true, new: true }
		);
	}

	async findByCode(code) {
		return await Product.findOne({ code });
	}

	async deleteByCode(code) {
		return await Product.findOneAndUpdate(
			{ code },
			{ status: "trash" },
			{ new: true }
		);
	}

	async findAll(page = 1, limit = 10) {
		return await Product.find()
			.skip((page - 1) * limit)
			.limit(limit);
	}

	async getTotalCount() {
		return await Product.countDocuments();
	}
}

module.exports = new ProductRepository();
