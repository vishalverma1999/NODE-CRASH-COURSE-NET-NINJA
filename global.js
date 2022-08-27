// Node Basics
// just like we use Anonymous function in browser side, we can use it server side also
const greet = (name)=> {
    console.log(`hello, ${name}`);
}

greet('munnu');
greet('tanu');

// objects, variable, classes are same, BUT THERE ARE DIFFERNCES TOO
// 1st difference) Global Object
// so inside the browser the window is the global object, but in node our global object is not 'window' but 'global' and that represents the global context in a node

// console.log(global);  

//  ek baar chalega wo bhi 3 sec baad only
// global.setTimeout(()=>{        // we can remove global keyword, just like we don't wanna use window keyword to access its methods
//     console.log('in the timeout');
//     clearInterval(int);        // means it will clear the setInterval function, hence it will stop executing
// }, 3000)

// const int = setInterval(()=>{          //  har ek second mein chalega
//     console.log('in the interval')
// }, 1000)

// give full path with directory and filename respectively, quite useful when interacting with different directories
// console.log(__dirname);
// console.log(__filename);

// global object in node is different from the global object in window, so some of the things in the window object rather most of them, we can't actually access things like Dom methods. so for example I couldn't access the query selector, b/c documents is not defined, because documents is in the window object and we don't have that in the global namespace of node js but that's okay because we don't really need to do all of that stuff that we want to do in a window like interact with a webpage we're going to be using nodejs on the back end or on the server side so we don't need access to all of those things available on the window object
// dom object is not available in node
console.log(document.querySelector);   // ReferenceError: document is not defined