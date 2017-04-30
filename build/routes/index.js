"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/birth', function (req, res, next) {
    res.render('birthreg');
});
router.post('/birth', function (req, res, next) {
    res.send(req.body);
});
router.get('/death', function (req, res, next) {
    res.render('deathreg');
});
router.get('/report', function (req, res, next) {
    res.render('reports');
});
exports["default"] = router;
//# sourceMappingURL=index.js.map