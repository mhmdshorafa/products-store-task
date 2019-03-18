const productsModels = require('../pg/models/products');
const createResponse = require('../utils/createResponse');

const get = async (req, res, next) => {

    try {
        const { page } = req.query;
        const products = await productsModels.get(page);

        res.json(products);
    }
    catch(err) {
        res.json(createResponse(false, 'failed to fetch products', [])).status(500)
    }
  }

const create = async (req, res) => {

    try {
        const { body: productData } = req;
        const product = await productsModels.create(productData);

        res.json(product);
    }
    catch(err) {
        res.json(createResponse(false, 'failed to create products', [])).status(500)
    }
  }

const del = async (req, res) => {

    try {
        
        const { id } = req.params;
         await productsModels.del(id);

        res.json(parseInt(id));
    }
    catch(err) {
        res.json(createResponse(false, 'failed to fetch products', [])).status(500)
    }
  }

const update = async (req, res) => {

    try {
        
        const { id } = req.params;
        const newProduct = req.params;
        const product = await productsModels.update(id, newProduct);

        res.json(product);
    }
    catch(err) {
        res.json(createResponse(false, 'failed to fetch products', [])).status(500)
    }
  }

  module.exports = {
      get, create, del, update
  }
