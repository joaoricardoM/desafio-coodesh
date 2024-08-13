const productRepository = require('../repositories/productRepository');

class ProductService {
    async updateProduct(code, productData) {
        const product = await productRepository.findByCode(code);
        if (!product) throw new Error('Product not found');
        return await productRepository.createOrUpdateProduct({ ...product, ...productData });
      }

  async deleteProduct(code) {
    return await productRepository.deleteByCode(code);
  }

  async getProduct(code) {
    return await productRepository.findByCode(code);
  }

  async listProducts(page, limit) {
    return await productRepository.findAll(page, limit);
  }

  async importProducts(products) {
    const results = [];
    for (const product of products) {
      product.imported_t = new Date();
      product.status = 'draft';
      results.push(await productRepository.createOrUpdateProduct(product));
    }
    return results;
  }
}

module.exports = new ProductService();
