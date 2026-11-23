// Three Types Var let const

// Syntax = variableKey - let,var, const
            // variableName - it can be any name - location, names
            // data type - string, number, boolean, array, object, tuple, union type, null, undefined
            // variableValue - value assigned to the variable

// Syntax - variableKey variableName: dataType = variableValue

// var - it is function scoped, it can be redeclared and reinitialized, it can be accessed before initialization
var mobileNumber : number = 1234567890;
var mobileNumber : number = 65688584;
var mobileNumber : number = 898754545;

// let - it is block scoped, it can be reinitialized but cannot be redeclared, it cannot be accessed before initialization

let cart : string | number | boolean  ; // only declared value is not assigned

cart = "10"; // value is assigned to the variable

cart = 20; // value is reinitialized to the variable

cart = true; // value is reinitialized to the variable

let emailId : string = "john@example.com";

emailId = "siri@gmail.com";

// features of let keyword
// 1. block scoped
// 2. cannot be redeclared
// 3. can be reinitialized
// 4. cannot be accessed before initialization
// 5. can be used in loops
// 6. can be used in if else conditions

// Const - it is block scoped, it cannot be redeclared and reinitialized, it cannot be accessed before initialization

const userNames : string = "John";

const usersss : boolean = true;


const u : number = 10;

console.log(userNames);
console.log(usersss);
console.log(u);



