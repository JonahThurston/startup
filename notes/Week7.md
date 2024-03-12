Week 7???
How the internet works
Device makes a network request out to the internet
Domain Name System maps domain names to IP addresses
Infrastructure layering
Simple tc/ip
Link - fiber, hardware, lan
IP - establishing connections, sending packages
TCP/UDP - transport, moving connection information packets
HTTPS - application functionality like web browsing
Web server
Multiple services
Web service, takes HTTP request and sends back app data (HTML, JS, CSS)
There's a port associated with every service, but we don't want to expose a bunch of ports from our server, so normally do gateway’s
Domain names
[subdomain.]*secondary.top
Localhost (127.0.0.1) 
DNS record types
A / AAA: address. Specific IP addresses IPV4 and IPV6
CNAME: canonical Name Alias
NS: Name Server, Proff of ownership
TEXT: Metadata used for policies and verification
SOA: start of authority. Propagation information
Leasing a domain name
IANA internet assigned numbers authority
Registrar orders for renting domain
Registry authoritative DNS records
Registrant Leesee (you)
fetch(url)
.then(r => r.text())
.then(text => console.log(text))

fetch( ‘https://chucknorislink’)
.then (r => r.json())
.then (j => console.log(j.value))

Const r = await fetch(‘url’)
Const j = await r.json()
console.log(j.content)

Uniform Resource Locator
scheme://subdomain.domain.tld:portNum/path?p=parameter#anchorNum

HTTP request
POST /api/city?q=provo HTTP/1.1
(method path version)
Host: cs260.click
User-Agent: curl/7.77.0
Content-Length: 14
Accept: application/json, text/plain, image/jpeg, */*
Accept-encoding: gzip, deflate

{“user”:”tim”}
body
Methods
GET
POST - create new
PUT - update existing
DELETE
OPTIONS

Ressponse
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 15
Connection: keep-alive
Content-Encoding: gzip

{“user”:”tim”}

Status Codes
2xx: success, 204 No content
3xx: 301/302 redirect, 304 not modified
4xx: 400 bad request, 404 not found, 403 forbidden, 429 too many requests
5xx: 500 server error, 503 not available
Headers:
Authorization
Accept
Content-type
Cookie
Host
Origin
Content


Node.js allows us to run js outside a browser (for instance in a server)
NVM - node version manager
Node - js runtime exe
NPM node package manager
Download from nodejs.org or terminal command
Node Package Manager
Do make smth a package cd into the directory then run npm init
Run packages with npm run test
Bring down a package: npm install give-me-a-joke
Remember to git ignore dependencies so you don't copy it back and forth
Two ways to import modules
Common bad: const value = require(‘givejoke’)
Don't use in browsers just servers
ES modules smth: import from …
Service deliverable
Const http = require(‘http’)
Const server = http.createServer(function (req, res) {
res.writeHead(200,{ ‘Content-Type’: ‘text/html’});
Res.write(‘<h1>Hello node.js</h1>’);
Res.write(‘<p>[${req.method}] ${req.url}</p>’);
res.end():
});
server.listen(3000, () => {
console.log(‘web service listening on port 3000’)
});
