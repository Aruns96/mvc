const path = require('path');
const productControllers = require("../controllers/products")

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', productControllers.getProduts);

module.exports = router;
