const express = require('express');
const bodyParser = require('body-parser');
// const createError = require('http-errors');
const path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

const app = express();
const port = /*process.env.PORT || */ 5000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '.\\views');
// app.use(logger('dev'));
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});

const userRoutes = require('./src/routes/user.routes')
const parcelRoutes = require('./src/routes/parcel.routes')
const credentialRoutes = require('./src/routes/credential.routes')

const User = require('./src/models/user.model')
const Parcel = require('./src/models/parcel.model')

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/parcels', parcelRoutes)
app.use('/api/v1/credentials', credentialRoutes)

/* Gestione errori
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
*/

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// module.exports = app;