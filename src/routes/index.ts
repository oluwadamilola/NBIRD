import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/birth', function(req, res, next) {
  res.render('birthreg');
});

router.post('/birth', function(req, res, next) {
  res.send(req.body);
});

router.get('/death', function(req, res, next) {
  res.render('deathreg');
});

router.get('/report', function(req, res, next) {
  res.render('reports');
});

export default router;
