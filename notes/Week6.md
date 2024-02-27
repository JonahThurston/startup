
WEEK 6
- Js
- Use strict equality ===
-Falsy (false, 0, -0, ‘’, NaN, null, undefined)
Truthy != falsy
for(let i = 1; i < 3; i++) {}
Switch (pet) { case ‘fish’ : break; default: ;
Functions
First order types
Inner functions: scoped within their definition
Anonymous functions
Let f = function x (i) {
Return i
}
console.log(f(3));
Arrow functions
Const arrow () => 1;
Takes no parameters and returns one
Const arrowWithBlock = (a) => {
A;
};
Takes one parameter, returns nothing
Closures
Arrow functions can make closures
Functions can make and return functions. 
They make closures where they can access the scope of the necessary variables 
Function strings()
Debugger
Let s = ‘cats dogs rats mice’; // string literal
S = new string(‘cats dogs …’); //string object
Console.log(s.tUppperCase)
console.log(s.split)
s.endsWith
s.replace(‘dogs’, puppies)
s.slice(3.7)
s.match(petRegex)
s.replace(petRegex, ‘animal’)
petRegex.test(s)


arrays()
Let numbers = []
For 
numbers.push(i)
numbers.pop()
Pops last item
Numbers[1]
numbers.slice(3,5)
Numbers.length
for(entry of numbers)
console.log(entry)
numbers.map((n) => n*100)
numbers.reduce((p,c) => p+c)
C = current (numbers)
p = previous (initialized to numbers[0] by default) 
Continuously sets p to p+c
numbers.forEach((n) => console.log(n%2))
numbers.filter((n) => n%2)
Returns only indexes that result in truthy
So in this case only odds
numbers.some((n) => n>5)

Exceptions
Try{
(() => {
Throw ‘trouble in river city’;
})():
} catch (error) {
console.log(‘error: ‘ + error);
} finally {
console.log(‘finally!’);
}

templateLiterals
Let name = ‘amigo’
Let hello = (n) +> ‘hola’ + n;
‘Template ${‘lite’ + ‘rals”}! ${hello(name)}’);

Special operators
Let x = null || 5
Results in x = 5
X = x || 10
Results in x staying 5
Nullish coalescing operator
Nullish = null or undefined
console.log(undefined ?? null ?? ‘coalescing’)
Let z
Z ?? (z = x)
If z is nullish execute whats in parens
Let y;
Y ??= 30
Y ??= 40
Will result in y being 30 because its only nullish when its undefined
Objects
Let obj = {
Animal: ‘fish’
};
Obj.count = 3;
Obj.location = {
Cities: [‘utah’ , ‘new york’],
Origin: ‘ocean’,
};
Obj.print = function () {
Return bakldafjdlas;
};
Results in an object called obj with an animal, count, location, and print
For (const property in obj){
Sadfjka;
}
for (const value of object.keys(obj)) {
Sajdlf
}


spread() {
Injecting some variable into the context of another variable
Let input = [1,2,30;
Input = [...input, 4, 5, 6]
Let base = {a: ‘rat’, b: ’cat’{
Base = {c: ‘dog’, …base, d: ‘bird’}
Variadic:
Const sumAndMult(multiplier, …numbers) => {
numbers.reduce((a,n) => a + multiplier * n);
}
Array operators
//array of objects
For (const beach of beaches) {
//break when west otherwise print
}
beaches.map((n) => ({..n, island: ‘Oahu’});
Maps the island name to each object
This makes a new object with a new island property on every element
x.r?.() || fallback()
object.rule() which might not exist but we want to try to call it and then something else on that
If it exists itll do
Otherwise itll call fallback
Iterative generators exist
Uses * and yields but we’re skipping it for now
Destructuring arrays
Let x,y,z
Const a = [1,2]
X = a
[x] = a
Array destructuring
A is an array and I only want the first value of array
[x, y] = a
Gets the first two values of the array
[x, y, z] = a
Tries to get the first three vars but theres only two in it so z is still undefined
[x, y, z = 100] = a
Default val for z
[x, , y. …z]
Get the first, skip the second, grab three, put everything else variadically into array z
Destructuring parameter
Function af([a = 3, b = ‘taco’] = []) {}
Default array value of empty
Default a of 3 and default b of taco
af();
Param defaults to 3 and taco
af([20])
Param of 20 and taco
Function of({a = 3, b = {animal: rat}} = {}){};
Default object value of empty
Default a of 3
Default b of animal: rat
of({b : {animal: dog}});
Destructuring returns
Function({a =3, b = ‘rat’}){
Return [a, b, ‘cat]
}
[x, y, z] =function({a: 10})
10 rat cat;
Json
Javascript object notation
Const obj text = JSON.stringify(obj);
JSON.parse(objText));
Stringify throws out functions
Classes
Class location { 
Static defaultPlace = ‘east’;
constructor(location) {
This location = location || Location.defaultPlace;
}
Compatibility
Remember to do strict compatibility


Document Object model
Takes both html and css and makes an object of it
Manipulate it with js
Function displayElement(el) {
console.log(el.tagname);
For const child of el.children) {
displayElement(child)
}
}
displayElement(document)
Walks the entire tree and outputs 
Const listElements = document.querySelectorAll(‘p’);
for(const el of listElements){
console.log(el.textContent);
}
el.innerHTML = ‘<div> class=”injected”> <b>Hello</b>!</div>’;
Function insertChild(selector, text) {
Const newChile = document.createElement(‘div’)
newChild.textContent = text;
Const parentElement = document.querySelector……..
Event handlers
<button onclick = ‘alert(“clicked”)’>click me</button>
.addEventListener
