import * as express from 'express';
const router = express.Router();
import { getBirthForm, registerBirth } from '../controllers/birth';
import { getDeathForm, registerDeath } from '../controllers/death';
import { getLoginForm, login } from '../controllers/auth';
import { getReport } from '../controllers/report';

function auth(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (req.session && req.session.username) {
    next(); // User is authenticated.
  } else {
    res.redirect('/login');
  }
}

/* GET home page. */
router.get('/', auth, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logout', function(req, res) {
  req.session.destroy();
  req.session.reset();
  res.redirect('/');
});

router.get('/birth', auth, getBirthForm);
router.post('/birth', auth, registerBirth);

router.get('/death', auth, getDeathForm);
router.post('/death', auth, registerDeath);

router.get('/report', auth, getReport);

router.get('/login', getLoginForm);
router.post('/login', login);


export default router;
