// var addon = require('./build/Release/addon');
// console.log(addon.add(3));

// var addon = require('./build/Release/callback');
// addon(function (msg) {
//     console.log(msg);
// });

// var addon = require('./build/Release/objectfactory');
// var obj1 = addon('hello');
// var obj2 = addon('world');
// console.log(obj1.msg+' '+obj2.msg);


// var addon = require('./build/Release/functionfactory');
// var fn = addon();
// console.log(fn());


// var addon = require('./build/Release/c++object');
// var obj = new addon.MyObject(10);
// console.log( obj.plusOne() ); // 11
// console.log( obj.plusOne() ); // 12
// console.log( obj.plusOne() ); // 13



// var createObject = require('./build/Release/createobject');
// var obj = createObject(10);
// console.log( obj.plusOne() ); // 11
// console.log( obj.plusOne() ); // 12
// console.log( obj.plusOne() ); // 13
// var obj2 = createObject(20);
// console.log( obj2.plusOne() ); // 21
// console.log( obj2.plusOne() ); // 22
// console.log( obj2.plusOne() ); // 23


var addon = require('./build/Release/passingobjects');
var obj1 = addon.createObject(10);
var obj2 = addon.createObject(20);
var result = addon.add(obj1, obj2);
console.log(result); // 30


