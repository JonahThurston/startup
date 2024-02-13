Uploading Simon.css:
- for some reason my .sh was associated with notepad so I had to figure out how to run it from the console instead of open a notepad.
- command used to deploy simon.css
- ./deployFiles.sh -k ~/Keys/startupKeys.pem -h wut2watch.click -s simon

Week Five:
- Responsive design
- Meta means telling the browser im in control don't try to fix it for me
- <meta
-  name=”viewport”
 - content=”width=device-width, initial-scal=1”
- />
  - Float means we can put floating in the text
- Aside{
 Float: right;
 Padding: 3em
 Margin: 0.5em
 }
-Display
-Arguments:
-None: allocates no space for it
-Block: occupies entire width of display by default
-Inline: doesnt occupy entire width
-Flex: 
-Body {
-Display: flex;
-Flex-direction: column;
-Margin: 0;
-Height: 100vh;’
-}
-Header {
-Flex: 0 80px;
-Background: hsl (223, 57%, 38%);
-}
-Footer{
-Flex 0 30px;
-Background: hsl (180, 10%, 10%);
-}
-Main {
-Flex: 1;
= isplay: flex
=Flex-direction: row;
=} 
- Grid:
- .container {
- Display: grid
- Grid-template-columns:
- repeat(auto-fill, minmax(300px, 1fr));
- Grid-auto-rows: 300px;
- Grid-gap: 1em;
- }
-  @media (orientation: portrait) {
-  iv {
- Transform: rotate (270deg);
- }
- Body {
- Flex-direction: column;
- }
- @media ((orientation: portrait) and (max-height: 500px)){
- Aside{
- Display: none
  



- Debugging CSS
- 3.6 debugging frameworks simon find out why its borders touch on the bottom
- CSS frameworks
- Bootstrap
 -CDN - content delivery network
- To pull bootstrap from CDN need two things
- In head<link
- Rel = “stylesheet”
- Href = “https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css”
- />
- In body <script
- Src = “https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.js”
- />


- Java Script
- Inspired by Scheme
- Interpreted
- Dynamically typed
- Node.js is an executable wrapping around the v8 js interpreter, has some extra libraries
 -Playgrounds:
  - owser debug console, codepen, vscode, node.js
- Examples:
- console.log(‘Hello’ + ‘world’)
- Single or double quotes work
- Const words = [“hello”, “world”]
- words.forEach((word) -> console.log(word));
- Function join(a,b){
- Return a + ‘ ‘ + b
- }
- Declare a file with a .js extension and slap javascript in there
- Put in html
- <script src=”index.js”></script>
- <script>
- Function sayGoodbye() {
- alert(‘goodbye’)
- }
- </script>
- <button onclick=”sayHello()”>Say Hello</button>
- <button onclick=”let i=1; i++; consoleLog(i).......
