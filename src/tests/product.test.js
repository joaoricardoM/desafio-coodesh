const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const Product = require('../models/product');

describe('Product API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should list all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
  });

  it('should get a product by code', async () => {
    const res = await request(app).get('/api/products/20221126');
    expect(res.statusCode).toEqual(200);
  });

  it('should update a product', async () => {
    const res = await request(app)
      .put('/api/products/20221126')
      .send({ product_name: 'Updated Product' });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a product', async () => {
    const res = await request(app).delete('/api/products/20221126');
    expect(res.statusCode).toEqual(200);
  });
});
