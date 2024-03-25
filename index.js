const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

const serverStorage = new Map();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Get score
secureApiRouter.get('/getScore/:name', async (req, res) => {
  let scoresToGet = `${req.params.name}Score`
  if(serverStorage.has(scoresToGet)){
    scoreObject = serverStorage.get(scoresToGet)
    res.send(scoreObject);
  } else{
    scoreObject = {score: 0};
    serverStorage.set(scoresToGet, scoreObject)
    res.send(scoreObject);
  }
});

// set a score for username
secureApiRouter.post('/setScore/:name', async (req, res, next) => {
  let name = req.params.name
  let scoreToSet = `${name}Score`
  serverStorage.set(scoreToSet, req.body)
  res.send(serverStorage.get(scoreToSet));
});

// Get table
secureApiRouter.get('/getTable/:name', async (req, res) => {
  let tableToGet = `${req.params.name}Table`
  if(serverStorage.has(tableToGet)){
    tableObject = serverStorage.get(tableToGet)
    res.send(tableObject);
  } else{
    tableObject = [
      false, false, false, false , false, false, false, false, false, false,
      false, false, false, false , false, false, false, false, false, false,
      false, false, false, false , false, false, false, false, false, false,
      false, false, false, false , false, false, false, false, false, false,
      false, false, false, false , false, false, false, false, false, false,
      ];
    serverStorage.set(tableToGet, tableObject)
    res.send(tableObject);
  }
});

// set a table for username
secureApiRouter.post('/setTable/:name', async (req, res, next) => {
  let name = req.params.name
  let tableToSet = `${name}Table`
  serverStorage.set(tableToSet, req.body)
  res.send(serverStorage.get(tableToSet));
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
