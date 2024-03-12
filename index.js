const express = require('express');
const app = express();
const serverStorage = new Map();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Get score
apiRouter.get('/getScore/:name', (req, res) => {
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

// Get table
apiRouter.get('/getTable/:name', (req, res) => {
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
apiRouter.post('/setTable/:name', (req, res, next) => {
    let name = req.params.name
    let tableToSet = `${name}Table`
    serverStorage.set(tableToSet, req.body)
    res.send(serverStorage.get(tableToSet));
});

// set a score for username
apiRouter.post('/setScore/:name', (req, res, next) => {
  let name = req.params.name
  let scoreToSet = `${name}Score`
  serverStorage.set(scoreToSet, req.body)
  res.send(serverStorage.get(scoreToSet));
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
