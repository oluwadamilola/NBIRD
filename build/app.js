"use strict";
exports.__esModule = true;
var express = require("express");
var nunjucks = require("nunjucks");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("client-sessions");
var index_1 = require("./routes/index");
var app = express();
// view engine setup using nunjucks.
var viewsFolder = path.join(__dirname, '../', 'views');
nunjucks.configure(viewsFolder, {
    autoescape: true,
    express: app
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
    secret: 'A large unguessable string.',
    duration: 24 * 60 * 60 * 1000,
    cookie: {
        httpOnly: true,
        /**
         * The secure option can only be enabled using the https protocol
         * Secure proxy option should be used instead in production.
         * This should be set to false.
         */
        secure: false,
        ephemeral: false
    }
}));
app.use('/', index_1["default"]);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports["default"] = app;
//# sourceMappingURL=app.js.map