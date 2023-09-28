const path = require('path');
const productControllers = require("../controllers/products")

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', productControllers.getProduct);

// /admin/add-product => POST
router.post('/add-product', productControllers.postProduct);

exports.routes = router;

