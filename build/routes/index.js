"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var birth_1 = require("../controllers/birth");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/birth', birth_1.getBirthForm);
router.post('/birth', birth_1.registerBirth);
router.get('/death', function (req, res, next) {
    res.render('deathreg');
});
router.get('/report', function (req, res, next) {
    res.render('reports');
});
exports["default"] = router;
//# sourceMappingURL=index.js.map