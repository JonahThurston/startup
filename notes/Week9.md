WEEK 9???
Deployment and Development vs production environments
Irl use continuous integration into staging and production environments
Auto to staging, manual to production
We use a .sh that pushes to production for us
Ours is called interruptive deployment because it interrupts the users midservice
Rolling drain and replace - multiple servers with load balancer. Drain, stop, start… repeat
This means that your nth API has to be at least n-1 compatible
Canary - gradual with error monitoring
Slowly roll out one new server at a time, looking for errors as you go. 
blue/green
Swap staging and production when your ready
A/B
Kinda like blue/green but more for marketing decisions, give some subset of the customers to new special deployment 
Can be based on demographics

Storage
We’ll use mongoDB
Uploading files to server as user
Frontend - basic html file input (onchange = uploadFile(this?))  (new FormData(); fetch body: formData}); )
Backend - npm package called multer (storage: multer.diskStorage({}))
See slides for exact code
Limited space, no backup, servers are transient, multiple servers hosting data
Mongodb stuff
Const db = client.db(‘startup’)
db.startup.find()
db.startup.find({beds:{$gte:2}})
db.startup.find({status:”open”, beds: {$lt: 3}})
Week 10
Auth services, simon login
Storing passwords
Hashed obfuscates clear text
To hack you need access and hash algorithm
Salting hashes means adding a random id on the password before hashing it and also storing that with the hash  
Bcrypt- salt, hash, and compare
hashedPassword = await bcrypt.hash(“too many secrets”, 10);
If (await bcrypt.compare(“toomanysecrets”, hashedPassword)) {
console.log(“passwords match”)
}
Auth tokens
Const uuid = require(‘uuid’);
Const token = uuid.v4()
Cookies
Backend leaves something behind as a trail
Response
HTTP header:
Set-Cookie: session=x83yzi; Secure; HttpOnly; SameSite=Strict
Secure = https only
Httponly = !js
SameSite = only given back to origin
Next request
Cookie: session=x85yzi
Example
Npm init -y
Npm install express cookie-parser uuid


app.use(cookieParser());
app.get(‘cookie’, (req, res) => {
Const token = uuid.v4();
res.cookie(‘token’,token, {
Secure: true,
httpOnly, true,
sameSite: ‘strict’
});
app.get('*', (req, res) => {
 const token = req?.cookies.token;
 res.send({ token: token });
});


app.listen(3000, () => {
 console.log('listening 3000');
});
TESTING front end
Npm init playwright@latest
Import {test, expect} from ‘@playwright/test’;
test(‘testWelcomeButton’, async({page}) => {
Await page.goto(‘url’);
Const hello = page.getByTestId(‘msg’);
Await expect(hello).toHaveText(‘text’);
Const changeBtn = page.getByRole(‘button, {name: ‘change welcome’});
await changeBtn.click();
await expect(hello).toHaveText('I feel not welcomed');
});
Testing backend
Jest
Npm init
Npm install express
Npm install jest supertest -D
store.test.js
test(‘that Javascript can add’, () => {
expect(1+1).tobe(2);
});
server.js
const express = require("express");
const app = express();


app.use(express.json());


// Endpoints
app.get("/store/:storeName", (req, res) => {
  res.send({ name: req.params.storeName });
});


app.put("/store/:storeName", (req, res) => {
  req.body.updated = true;
  res.send(req.body);
});


module.exports = app;
index.js
const app = require("./server");


const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});


store.test.js
const request = require("supertest");
const app = require("./server");


test("getStore returns the desired store", (done) => {
  request(app)
    .get("/store/provo")
    .expect(200)
    .expect({ name: "provo" })
    .end((err) => (err ? done(err) : done()));
});


test("updateStore saves the correct values", (done) => {
  request(app)
    .put("/store/provo")
    .send({ items: ["fish", "milk"] })
    .expect(200)
    .expect({ items: ["fish", "milk"], updated: true })
    .end((err) => (err ? done(err) : done()));
});


WebSocket
Proxy messages between two clients
Sending notifications to client
Example
Npm init -y
Npm install ws
Code
index.js
const { WebSocketServer } = require('ws');


const wss = new WebSocketServer({ port: 9900 });


wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);


    ws.send(`I heard you say "${msg}"`);
  });


  ws.send('Hello webSocket');
});


Browser
const socket = new WebSocket('ws://localhost:9900');


socket.onmessage = (event) => {
  console.log('received: ', event.data);
};


socket.send('I am listening');



