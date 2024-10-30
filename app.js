"use strict";
//🔴Arrays
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, "sarthak", { name: "Krishak" }];
// In JS it can take any value in the Array and same case with typescript but if will tell you what type of array is this when you hover over the array name.
// If you want that it should store a particular type then,
let arr2 = [1, 2, 3, 4, 5];
//🔴Tuples
let arr3 = ["sarthak", 25];
//In this we have to first specify the type,size and after that we have to give a value for that type.
//🔴Enums (Enumerations)
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["Super_Admin"] = "super_admin";
})(UserRoles || (UserRoles = {}));
// After this we can use this similar to objects.
UserRoles.GUEST;
//🔴Any , Unknown , Void , Null , Undefined , Never.
//we can give a type of a number is the following way,
let a;
a = 12;
//and if we write like the following,
let b;
//Then its type is ANY.and we make sure that none of the variable should have ANY type while writing the code.
let c;
function abcd() {
    console.log("Hello");
}
function abc() {
    return 132;
}
function ab() {
    return "sarthak";
}
// const obj = {
//     name: "sarthak",
//     email: "sarthak@gmail.com",
//     password:"abcd"
// }
function abe(obj) {
}
abe({ name: "sarthak", email: "sarhtak@gmail.com", password: "abcd" });
let e;
let f;
//🔴Intersection Types.
let g;
function nbm(q) {
    q.admin;
}
//🔴Classes and object
class device {
    constructor() {
        this.name = "sarthak";
        this.price = 12000;
        this.category = "digital";
    }
}
// By writing this we can create a new device by each time.
let d1 = new device();
let d2 = new device();
//🔴Constructor
//The values which we want to take in the construction we will define that values in the constructor.
class bottle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new bottle('sarthak', 2000);
class BiscuitMaker {
    constructor(name, material, quantity) {
        this.name = name;
        this.material = material;
        this.quantity = quantity;
    }
}
let r1 = new BiscuitMaker("parleG", "maida", 50);
let r2 = new BiscuitMaker("Bourbon", "maida", 100);
//🔴🔴 this keyword
// If we make function inside the class then its called method.
