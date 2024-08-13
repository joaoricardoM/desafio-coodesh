const productService = require("../services/productService");

class ProductController {
	async getApiDetails(req, res) {
		res.json({
			message: "API is working",
			dbStatus: "Connected",
			lastCronRun: "Not implemented",
			uptime: process.uptime(),
			memoryUsage: process.memoryUsage(),
		});
	}

	async getProduct(req, res) {
		const product = await productService.getProduct(req.params.code);
		if (!product) return res.status(404).json({ message: "product Not Found" });
		res.json(product);
	}

	async listProducts(req, res) {
		const { page = 1, limit = 10 } = req.query;
		const products = await productService.listProducts(
			parseInt(page),
			parseInt(limit)
		);
		res.json(products);
	}

	async updateProduct(req, res, next) {
        console.log(req.body); // Isso agora deve exibir o conteúdo correto do corpo da requisição
        try {
          const productData = req.body;
          const updatedProduct = await productService.updateProduct(req.params.code, productData);
          res.json(updatedProduct);
        } catch (error) {
          next(error);
        }
      }
      

    async deleteProduct(req, res) {
        const deleteProduct = await productService.deleteProduct(req.params.code);
        res.json(deleteProduct);
    }
}

module.exports = new ProductController()
