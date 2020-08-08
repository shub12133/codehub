var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth')
const repoRouter = require('./routes/repos')
const cors = require('cors')
const keys = require('./config').keys
var app = express();
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// DB config 
const db = keys.mongoURI

//connect to MOngodb
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("MongoDb connected"))
.catch((err)=> console.log(err))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

passport.serializeUser(function(user,done){
  done(null,user)
});

passport.deserializeUser(function(user,done){
  done(null,user)
})

//passport init 
app.use(passport.initialize())
app.use(passport.session())
//import 
require('./config/passport')(passport)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth' , authRouter)
app.use('/api/repos' , repoRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const port = process.env.PORT || 3001;

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
