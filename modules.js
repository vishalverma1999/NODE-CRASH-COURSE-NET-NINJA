// MODULES and REQUIRE
// sometimes we might want to split our code into multiple different files and then import and export things to and from those files and this way we're going to keep our code much more modular reusable and also much easier to maintain as well and we're not just dumping all of our code into one single file
// ---------------------------------------------____________________________________________________________

// importing people file into modules file using 'require'
const xyz = require('./people');    // inside '', enter relative path to whatever file we want to require or import. node will search for people.js automatically an then execute it

// require('./people') returns an empty object
// console.log(xyz);    // empty object

// we can't directly access variable that we used inside people.js, it will throw an error. Rather we need to explicitly first export the things that we want to use in different file and then we can collect exported items using require statement which gives an object containing all the exported items
// console.log(people);    // error , since nothing exported from people file

// console.log(xyz);    // returns people array , since we explicitly exported and we collected exported items in require
// console.log(xyz);    // returns "hello"  , since we explicitly exported and we collected exported items in require
console.log(xyz.people, xyz.ages);    // returns object contaninig people and ages

// we can destructure items while importing 
// const {people, ages} = require('./people');
// console.log(people, ages);

// importing built in files from node core modue
const os = require('os');      // os -> operating system
console.log(os);   // gives info about current os on which it is running
console.log(os.platform(), os.homedir());
// just like os is the core module, we also have file system core module