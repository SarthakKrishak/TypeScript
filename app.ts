//🔴Arrays


import { clearAppStateForDatabase } from "@excalidraw/excalidraw/types/appState";

let arr = [1, 2, 3, "sarthak", { name: "Krishak" }]
// In JS it can take any value in the Array and same case with typescript but if will tell you what type of array is this when you hover over the array name.

// If you want that it should store a particular type then,
let arr2: number[] = [1, 2, 3, 4, 5]
let arrr3: string[] = ["sarthak","krihsak"];

//🔴Tuples

let arr3:[string,number] =["sarthak",25]
//In this we have to first specify the type,size and after that we have to give a value for that type.


//🔴Enums (Enumerations)
enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    "Super_Admin"= "super_admin"
}

// After this we can use this similar to objects.
UserRoles.GUEST;


//🔴Any , Unknown , Void , Null , Undefined , Never.

//we can give a type of a number is the following way,
let a: number;
a = 12;

//and if we write like the following,
let b;

//Then its type is ANY.and we make sure that none of the variable should have ANY type while writing the code.

let c: unknown;

function abcd():void
{
    console.log("Hello");
}

function abc(): number{
    return 132;
}
function ab(): string{
    return "sarthak";
}

function hel(): boolean{
    return true;    
}
    

//🔴Interface and extends

interface user{
    name: string,
    email: string,
    password: string,
    gender?:string      // ? tells thatThis is optional
}

//When we are writing extends then all the properties will be applicable and we can give a extra property.
interface admin extends user{
    admin:boolean
}

//if we make two inteface with same name then they are merged
interface ABCD{
    name:string
}
interface ABCD{
    email:string
}

// const obj = {
//     name: "sarthak",
//     email: "sarthak@gmail.com",
//     password:"abcd"
// }

function abe(obj: user) {
}

abe({name:"sarthak",email:"sarhtak@gmail.com",password:"abcd"});


//🔴Type Aliasing

//We can create a type,
type sankhya = number;
let e: sankhya;

//Major use case can be understood by the following,
type random = string | number | null;   //( It can be string or number or null. )
let f: random;

//🔴Intersection Types.
let g: string | null;

type USER = {
    name: string,
    email:string
}

type ADMIN = USER & {
    admin:boolean
}

function nbm(q: ADMIN) {
    q.admin;
}

//🔴Classes and object
 
class device{
    name = "sarthak";
    price = 12000;
    category = "digital"
}

// By writing this we can create a new device by each time.
let d1 = new device()
let d2 = new device()


//🔴Constructor

//The values which we want to take in the construction we will define that values in the constructor.
class bottle{
    constructor(public name: string, public price: number) {
        
    }
}

let b1 = new bottle('sarthak',2000);


class BiscuitMaker{
    constructor(public name: string, public material: string, public quantity: number) {
        
    }
}

let r1 = new BiscuitMaker("parleG", "maida", 50)
let r2 = new BiscuitMaker("Bourbon", "maida", 100)


//🔴🔴 this keyword

// If we make function inside the class then its called method.
class bab{
    name = "sarhtak";

    changeStuff() {
        this.name 
        this.changeSome
    }

    changeSome() {
        this.changeSome
    }

}
new bab();


//🔴Access Modifiers

// Access Modifiers are used to restrict the access of a class, method or variable to other classes
// There are four types of access modifiers in TypeScript
// 1. public
// 2. private
// 3. protected
// 4. readonly

class person{
    private name;
    constructor(name: string) {
        this.name=name
    }

    change() {
        this.name = "krishak"
    }
}
let h1 = new person('sarthak');
h1.change();

//1. Public ko aap kahi bhi modify kr sakte ho.
//2. private ko aap sirf uss class ke andar modify kr sakte ho.
//3. protected ko aap sirf uss class ke andar modify kr sakte ho aur uss class ke subclass ke andar modify kr sakte ho.


//🔴 ReadOnly

// If we want that a value of a variable shouldn't change anywhere so to do this,

class hello{
    constructor(public readonly name: string) {
    }
    change() {
        this.name= "bablu"
    }
}
let j1 = new hello('sarthak');


//🔴Getter and Setter

class naam{
    constructor(public _name:string,public _age:number){}

    get name() {
        return this._name
    }

    set age(value:number) {
         this._age = value
    }
}
let k1 = new naam('sarthak', 20);
console.log(k1.name);
k1.age = 21;


//🔴Static members

class hero{
    static version = 1.0;

    static getNumber() {
        return Math.random()
    }
}

console.log(hero.getNumber);
console.log(hero.version);

//Bina Instance bnaye hum isko print krva sakte hai.


//🔴Abstract class and methods


//🔴 functions

function qwert(name:string,age:number,cb:(value:string)=> void) {
    
}

qwert("sarthak", 25, (value: string)=>{
    console.log(value);
})


//🔴Rest parameters

//... --> rest/spread

function llo(...arr:number[]) {
    console.log(arr);
    
}
llo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


let array = [1,2,3,4,5]
let array2 = [...array]
console.log(array2);
