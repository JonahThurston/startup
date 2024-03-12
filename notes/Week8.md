Week8????
Express
Simple but powerful
Express - constructor and default middleware
app - express application
Req - 
Res- 
Router - adding child routing, helps parsing
Npm init -y
Npm install express
Const express = require(‘express’);
Const app = express();
app.get(‘*’, (req, res) => {
res.send(‘<h1>Hello Express!</h1>’);
});
app.get(‘*’...
Means the function will handle all get requests
.gitignore < node_modules
app.use([path], callback(req, res, next))
app.use(function (req, res, next) {
console.log(‘method: ${req.method}, path: ${req.path}’);
next();
});
app.use(logger(‘dev’));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(‘public’));
Can return a directory of static files we like that
app.get(‘/store/:id/:time’, (req, res) => {
res.send({id: req.params.id, time: req.params.time });
});
app.put(‘/*/id’, (req, res) => {
res.send({update: req.params.id })
});
app.delete(/\/store\/(.+)/, (req, res) => {
res.send({delete: req.params[0] })
});
Const userRouter = express.Router();
app.use(‘/user’, userRouter);
userRouter.get(‘/:id, (req, res) => {
res.send(‘${req.params.id} User Page’)
}); 
ORDER MATTERS


Design discussion
Model user
Sequence diagram. Arrows between “actors”
Different users/server communication
Service endpoints
Create account
Login
Logout
Get user
Get scores
Save scores
Leverage standards
Transfer protocols - http, https, UDP
HTTP verbs- GET, PUT, POST, DELETE
MIME types - application/json, image/png
Http headers - cache, accept, cors
Data format - JSON, YAML
Endpoint design
Grammatical - noun/resource based
Readable - /store/provo/order/28502
Simple - single responsibility principle
Documented - Open API
Remote procedure call (RPC)
Functional requests across a network
POST /updateOrder HTTP/2
{“id”: 2197, “date”: “20220505”}
POST /rpc HTTP/2
{
“cmd”:”updateOrder”,
“Params”:{“id
…..
Representational state transfer (REST)
PUT /order/2197 HTTP/2
{“date”: “20220505”}
GraphQL
Query {
getOrder(id: “2197”) {
orders(filter: {date: {allofterms: “20220505”} } ) {
Store
Description
orderedBy
}
}
}
CORS
Cross site request forgery
If you have a website and your making some request to some other website that domain has to tell chrome that its ok to display that thing
Single origin principle
Prevents welsfargo from identity thefting wellsfargo
Simon
Took all front end code into subdirectory called project
Backend is basically just index.js 
app.use(express.static(‘public’));


Debugging
Make test project
Mkdir bug
Cd bug
Mkdir public
Npm init -y
Npm install express
Make index.html
<html lang="en">
<head>
 <script src="frontend.js"></script>
</head>
<body>
 <button onclick="getJoke()">Get Joke</button>
 <div id="joke"></div>
</body>
</html>
Make frontend.js
function getJoke() {
 fetch('/joke')
   .then((response) => response.json())
   .then((joke) => {
     const jokeElement = document.querySelector('#joke');
     jokeElement.textContent = joke;
   })
   .catch((error) => {
     console.error('Error:', error);
   });
}
Make backend.js
const express = require('express');
const app = express();


app.use(express.static('public'));


app.get('/api/joke', (req, res) => {
 res.send('I just flew in from Chicago and boy are my arms tired');
});


app.listen(5000, () => {
 console.log('Server is running on port 5000');
});
Daemons - pm2
Pm2 ls
cd ~/services/appname
pm2 start index.js -n appname -- 5501
pm2 save
