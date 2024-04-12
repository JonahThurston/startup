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



WEEK 10?
Security
OWASP - open worldwide application security project
Broken Access control
Least privilege access violation. 
URL bypass control:   /payment/:accountId
Resource path allows access:      ../../../etc/passwd
Cryptographic Failures
Transmitting data as a clear text
Not encrypting at rest or transit
Weak cryptography (sha1, md5)
Misused cryptography (no salt, wrong params)
Injection
User supplied data is not sanitized
User supplied data programmatically executed
Insecure design
Not aware of best practices
Unlimited tribal accounts
Customer data not segmented
Single layer defense
Security misconfiguration
Development info exposed
Using default configurations
Unnecessary features installed
System not hardened
Vulnerable components
unnecessary / unused packages imported
Untrusted/verified sources
Out of date software
Not tracking vulnerability bulletins
Package versions not locked
Id and auth failures
Credential stuffing
Brute force attacks
Permitting weak passwords
Weak credential recovery
Credentials in URL
Not expiring auth tokens
Software integrity failures
Unverified cdn usage
Unverified packages
Unverified updates
Insecure cd/ci platforms
Logging failure
Not logging critical requests
Not monitoring system performance
Logs not audited, automatic or manual
Logs not stored centrally
No real-time response
Server side request forgery
Executing sketchy get requests from a secure location
Web frameworks
Smplify common patterns
Provide common components
Improve performance
Increase device coverage
React
Jordan Walke
JSX - combining JS and HTML
Use bable to transpile, make sure to tell codepen and npm to do that
Make different components that you can reference from any page
Ex; ReactDOM.render(<p>HelloWorld</p>, document.querySelector(#root));
Ex: Const Hello = () => {
Return <p> HelloWorld</p>;
}
ReactDom.render(<Hello />, document.querySelector(“#root”);
Properties example:
Const Hello = ({phrase}) => {
return(
<div>
<p>Hello {phrase}</p>
</div>
);
};
ReactDOM.render(<Hello phrase=”function” />, document.querySelector(“#root”));
