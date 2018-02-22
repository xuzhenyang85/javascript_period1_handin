# Javascript period 1 - Hand in

### Explain and Reflect:

Q: Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

Svar: 
Forskllen mellem Java og JavaScript:
Java er en OOP programming sprog hvor JavaScript er en OOP scripting sprog.
Java opretter applikationer som kører i en virtuel maskine eller browser hvor JavaScript kode er køre kun på en browser.
Java kode har brug for kompilet hvor JavaScript kode er alle i tekster.
De har brug for forskellen plug-ins.


Q: Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers

Svar:
ES6(ES2015): evolution af JavaScript, ny features: arrow functions, promises kan være paralle, class, Inheritance, generators, kan være brugt i 'alle' browser via brug en transpiler, og næsten alle i Node.js via Babel.
TypeScript: En gratis åben source(programming) sprog, udviklet af Microsoft, superset af JavasScript, dvs. alt du kan finde i JavaScript er TypeScript. Og optional static typing, mange af de features fra ES6 og ES7. Det bliver transpiler til maskine sprog, og det er JavaScript.
ES7: Async og Await som er async. 

Q: Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.
Svar:
Node er en åben source project designet til at hjælpe man skrive JavaScript program som snakker med netværker, file system eller andre I/O sources. 
Det er non-blocking(callback) og letter at læse og forstå. 
npm: at bruge npm og at tildele kode, styre dependencies i ens projekt. npm er standard pakke styring for Node.js.
fits: require 

Q: Explain about the Event Loop in Node.js
Svar:
Det er hvad der er tillade Node.js til perform non-blocking I/O opretationer. Når Node.js startet, den initializes den event loop. Og processen vil modtage input script, hvor det er async API kalder. 
Timers - I/O callbacks - idle, prepare - poll (incoming connections, data) - check - close callback, hver bokse vil være ligesom en fase af den event loop, hver fase har en FIFO(first in first out) køen. 

Q: Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
Svar:
Babel transpiler ES2015(ES6) til ES5
WebPack er en static modul bundler for JavaScript applikation. Når den startet vil den bygge en dependency graph som inkluderer applikations behov, og pakkerne af disse moduler til en eller flere bundles. 
Hoved koncept (propeties)
entry: der begynder dependency graph bliver bygget. 
output: skal fortælle bundles hvilken mappe og hvad name.
loaders: give rettigheder webpack til process mere end kun JavaScript filer(webpack forstår kun js), evne til at konvertere filer til gydig moduler så webpack kan køre. f.eks. txt
plugins interface: via at bruge require(), kan give en stor mændge af plugins. powerful 

Q: Explain the purpose of “use strict” and also Linters, exemplified with ESLint 
Svar:
Definetion af JavaScript kode skal være gemmenføres i "streng tilstand". Det gør det letter at skrive "sikker" JavaScript
Eksempel:
"use strict";
x = 3.14;       // This will cause an error because x is not declared

ESLinkt:
"use strict";

// strict mode

function foo() {
    // strict mode
}


### Explain using sufficient code examples the following features in JavaScript. 

Q: Variable/function-Hoisting


Q: this in JavaScript and how it differs from what we know from Java/.net.

Q: Function Closures and the JavaScript Module Pattern

Q: Immediately-Invoked Function Expressions (IIFE)

Q: JavaScripts Prototype

Q: User defined Callback Functions

Q: Explain the methods map, filter and reduce

Q: Provide examples of user defined reusable modules implemented in Node.js


### ES6-7 and TypeScript

Q: Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

Q: Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

Q: Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

Q: Provide examples with es6, running in a browser, using Babel and Webpack

Q: Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics


### Callbacks, Promises and async/await

### Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:

Q: Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")

Q: Example(s) that demonstrate how to execute asynchronous code in serial or parallel

Q: Example(s) that demonstrate how to implement our own promise-solutions.

Q: Example(s) that demonstrate error handling with promises

Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.

Provide examples to demonstrate 
Why this often is the preferred way of handling promises
Error handling with async/await
Serial or parallel execution with async/await.

