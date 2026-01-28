class Car{ 
    constructor(name, color){ // add constructor method
        this.name = name;
        this.color=color;
    }
}
const myCar1 = new Car("HSDLG", "WHITE");
const myCar2 = new Car("DGSHG", "black");


class Student{
    constructor(name , year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date= new date();
        return date.getFullYear() - this.year;
    }
}
const student1 = new Student("avjd" , 22);



//CLASS INHERITANCE : USE THE extends Keyword
class personn{
  constructor(name){
    this.name=name;
  }
  greet(){
    console.log(this.name);
  }
}
class student extends personn{
  constructor(name,id){
    super(name);
    this.id=id;
  }
  study(){
    console.log(this.name + "is stydying")
  }
}
const s1 = new student("dfsfad", 34);
s1.greet();
s1.study();



// get set ( get : read value , set : update ,for validation , security , datacontrol)
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Invalid age");
      return;
    }
    this._age = value;
  }
}


// static method : called using class , no object needed , not require object data 
class User {
  greet() {
    console.log("Hello");
  }
}

const u1 = new User();
u1.greet(); // mormal method


class User {
  static greet() {
    console.log("Hello");
  }
}

User.greet(); //using static method


// callback : passed as an argument to another function and is called later
function greet(){
  comsole.log("helo");
}
function greeting(callback){
  callback();
}
greeting(greet);//callback recieve greet (greet=callback function)


//classic callback
comsole.log("helloo"); //1
setTimeout(function(){
  console.log("Hello world");//3
} , 3000)
console.log("hyy"); //2



//callback with parameter
function calculate(a,b , callback){
  let result = a+b;
  callback(result);
}
function display(value){
    console.log("result is: " , value)
}
calculate(3, 4, display);


function displayResult(value){
  console.log(value);
}
function multiply(a, b , callback){
  let mul = a* b ;
  callback(mul);
}
multiply(8,5, displayResult)


const array=[3, -4 , 45 , 12, -8,5];
const array1 = removeNeg(array, (x) => x >= 0);
function removeNeg(number, callback){
  const array2 = [];
  for (const x of number){
    if(callback(x)){
      array2.push(x);
    }
  }
  return array2;
}


// promisse : is the value that will availavle in future(pending , fullflled , rejected)
//creating a promise
let myPromise = new Promise(function(resolve , reject){
  let success = true;

if(success){
  resolve("completed")
}else{
reject("rejected")
}
});

Promise
.then(result=> console.log("result"))
.catch(error => console.log("error"));

//Async : return the promise
//Await : wait for the primise to finish