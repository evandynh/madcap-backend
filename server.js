var express      = require('express'),
    app          = express(),
    mongoose     = require('mongoose'),
    morgan       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    path         = require('path'),
    cors         = require('cors')

require('dotenv').config()

mongoose.connect('mongodb://localhost/madcap');

// =========================================================================
// ========== MIDDLEWARE ===============================================
// =========================================================================
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


// =========================================================================
// ========== ROUTES ===============================================
// =========================================================================
var routes = require('./config/routes');

app.use(validateContentType);

app.use('/', routes)

app.use(addFailedAuthHeader);

// =========================================================================
// ========== PORT ===============================================
// =========================================================================
var port = process.env.PORT || 3000

app.listen(port, function(req, res){
  console.log('Madcap api running on port: ', port)
})

function validateContentType(req, res, next) {
  var methods = ['PUT', 'PATCH', 'POST'];
  if (                                    // If the request is
    methods.indexOf(req.method) !== -1 && // one of PUT, PATCH or POST, and
    Object.keys(req.body).length !== 0 && // has a body that is not empty, and
    !req.is('json')                       // does not have an application/json
  ) {                                     // Content-Type header, then …
    var message = 'Content-Type header must be application/json.';
    res.status(400).json(message);
  } else {
    next();
  }
}

// When there is a 401 Unauthorized, the repsonse shall include a header
// WWW-Authenticate that tells the client how they must authenticate
// their requests.
function addFailedAuthHeader(err, req, res, next) {
  var header = {'WWW-Authenticate': 'Bearer'};
  if (err.status === 401) {
    if (err.realm) header['WWW-Authenticate'] += ` realm="${err.realm}"`;
    res.set(header);
  }
  next(err);
}
