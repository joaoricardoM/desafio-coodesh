const cron = require('node-cron');
const axios = require('axios');
const productService = require('../services/productService');

const importProducts = async () => {
  try {
    const response = await axios.get('https://challenges.coode.sh/food/data/json/products_01.json.gz', { responseType: 'arraybuffer' });
    const products = JSON.parse(response.data.toString('utf-8')).slice(0, 100); // Limitar a 100 produtos
    await productService.importProducts(products);
    console.log('Products imported successfully');
  } catch (error) {
    console.error('Error importing products:', error);
  }
};

importProducts()

cron.schedule('0 3 * * *', importProducts, {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});
