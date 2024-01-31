Week 3
Caddy
Directs uses subdomains to send to the correct service or page
curl -v -s https://byu.edu > dev/null
Checks web certificates
Does handshakes
How we do secure connections
sudo service caddy restart
Saves any changes to caddy file

Console
Operating systems
Linux, mac, windows, WSL
Console
Navigate your disk
Run console applications
Installing git bash for windows
Warp on mac
Commands
Echo - output the parameters of command
Cd- change directory
Mkdir- make directory
Rmdir- remove directory
Rm- remove file(s)
Mv- move files
Cp- copy files
Ls- list files
Curl- command line client url browser
Grep- regular exp search
Find- find files
Top- view running processes
Df- view disk statistics
Cat - output file
Less - interactive file output
Wc- count words lines and bytes
Ps- view processes
Kill - kill a process
Sudo - execute as admin
ssh - remote shell
Scp- securely copy files to a remote computer
History- show history of commands
Ping- test connection
Tracert- trace network
Dig- dns information
Man- look in the manual
Pipe and redirect
Printf “hello world” > test.txt
Ls -l | grep ‘Nov’ | wc -l
Curl -s www.google.com > google.html
Cat google.html | grep ‘<a’ | wc
Curl -s www.google.com | wc
Control keys
Ctrl c- kill
Ctrl r- recall command
Ctrl z- background command
vs code
Live server
GitLens
HTML
<html>
<body>Hello world</body>
</html>
<!DOCTYPE html>
<html lang=”en”>
     <head>
	<title> First HTML</title>
     </head>

     <body>
	Hello world
     </body>

</html>
Html is a tree
Html
Head
Title
First HTML(text node)
Body
Hello world(text node)
<img alt=”beach” height=”1000” src=”https://images.pexels.com/photos/21787/pexels-photo.jpg?w=600&h=300”>
Link references
Absolute: <a href=”https://cs260.click/profile.png” />
Relative:
<a href=”profile.png” />
<a href=”../images/profile.png” />
Elements:
Html
Head
Title
Body
Header
Main
Footer
Section -a section of main content

Div - a block division of content
Span - an inline span of content
h<1-9> - text heading from h1 the highest to h9 the lowest
P - paragraph of txt
Table
Ol,ul - ordered or unordered list
A - anchor the text to a hyperlink
Img

Characters
&: &amp;
<:  &lt;
>: &gt;
“: &quot;
‘:  &apos;
🙂: &#12345;

Make your own tags by giving class=”” or id=”” to divs then defining those in css
