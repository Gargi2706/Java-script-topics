function funNAME(){
 body
 } // Function Declaration
 
 const funNAME = function(){
    body
 } // Function Expression

 const myFunction = (X,Y)=> {
    return X + Y;
 }; // Arrow Function

 const Obj ={
    myFunction(a,b){
        return a * b;
    }
 } // object method 



 let x = addFunction(2,5); // function call (we can call before or after the function declaration)
 function addFunction(a,b){
    return a+b;
 }
 document.getElementById("demo").innerHTML = x;
 console.log(x);



 const stu ={
    fisrtNmane : "abc",
    lastName : "xyz",
    id:  100,
    fullName : function () {
        return this.fisrtNmane + " " + this.lastName; // THIS IN OBJECT
    }
 };
 document.getElementById("demo1").innerHTML = stu.fullName();
 console.log(stu.fullName());



 function myFunction1(){
    return this; // THIS IN FUNCTION
 }
 console.log(myFunction1());


 const example={
   firstName: "dgfs",
   lastName: "dvfg",
   sayHello: () => {
    return this.firstName;  // this in arrow funtion
  }
 };
 let helloo = person.sayHello();
hello();


 const thisExample={
   firstName : " hjh",
   lastName : "hjhsk",
   fullName : function(){
      return this.firstName + " " + this.lastName;
   }
 };
 thisExample.fullName(); // this refers to the object

 let hello=()=>{
    document.getElementById("demo3").innerHTML= " this is" + this
 }
window.addEventListener("load" , hello);
document.getElementById("btn").addEventListener("click" , hello);



 const person={
   fullName: function(){
      return this.firstName + " " + this.lastName
   }
 }
const person1={
   firstName : "abc",
   lastName : "pqr"
 }
 const person2={
   firstName : "xyz",
   lastName : "ewd"
 }
document.write(person.fullName.call(person1));  // CALL METHOD
document.write(person.fullName.call(person2));


// method call() : (object.function()) = this:object == func() : normal call do not allow to chose this value.s
// call() method : functionName.call(thisValue, arg1, arg2,...) === func.call() // pass argument one by one(seperated by comma)

// apply() method : functionName.apply(thisValue, [arg1, arg2,arg3]) === func.apply() 
                    //pass argument as array , calls function immediately
 
function abc(city , country){
   console.log(this.name +"is from" + city +  " "  + country);
}
const person3 = { name: "xyz"};
abc.apply(person3, ["rajkot" , "india"]);



const user ={ 
   name : " abc",
   greet(){
      this.name;
   }
};
const user2 ={
   name : " pqr"
};
user.greet.apply(user2); 


// bind() method : functionName.bind(thisValue, arg1, arg2,...) === func.bind()
                  //returns new function, call later with fixed this value , fixed this value , we can not change valur of this on excution of function
 
const person4={
   firstName : "abc",
   lastName : "xyz",
   fullName : function(){
      return this.firstName + " " + this.lastName;
   }
};
const person5 = {firstName : "pqr", lastName : "ewd"};
const person6 = {firstName : "lmn", lastName : "opq"};
const bindExample= person4.fullName.bind(person5)
console.log(bindExample());


const student={
   firstName : " rohit",
   lastName : " sharma",
   display : function(){
       let fullName = getElementById("demo2").innerHTML = this.firstName + " " + this.lastName;
   }
};
let displayName = student.display.bind(student);
setTimeout(displayName, 2000);