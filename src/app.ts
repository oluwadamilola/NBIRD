import * as express from 'express';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan'
import * as bodyParser from 'body-parser';
import * as session from 'client-sessions';

import routes from './routes/index';
import knex from './db';

const app = express();

// view engine setup using nunjucks.
const viewsFolder = path.join(__dirname, '../', 'views');
nunjucks.configure(viewsFolder, {
  autoescape: true,
  express: app,
});
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'public')));
app.disable('x-powered-by');

app.use(session({
  cookieName: 'nbird',
  requestKey: 'session',
  secret: 'A large unguessable string.', // process.env.SESSION_SECRET
  duration: 24 * 60 * 60 * 1000,
  cookie: {
    httpOnly: true,
    /**
     * The secure option can only be enabled using the https protocol
     * Secure proxy option should be used instead in production.
     * This should be set to false.
     */
    secure: false,
    ephemeral: false,
  }
}));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err: any = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
