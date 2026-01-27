//create object from exsiting object
const person={
    firstName : "abc",
    lastName: " gfjhf"
};
const man = Object.create(person);// create new object
man.firstName = "dfwev";


//object.fromEntries 

//object.assign : copy property from one or more source object to target object.
const user={ //target object
    firstName : "jdfgjh",
    lastName : "djfh",
    age :  21
};
const user2 ={ //source object
    firstName: "gfgf",
    lastName : "dhvugf"

};
Object.assign(user2 , user);

//create the new ovject
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Create two Person objects
const myFather = new Person("dgi", "dsae", 11, "blue");
const myMother = new Person("chvc", "bdbqj", 44, "red");


const person1={ //this in a method
     firstName: "dfgs",
     lastName: " dgvgfg",
     id :87,
     fullNmae : function(){
        return this.firstName + " " + this.lastName;
     }
};
document.write(person.fullName());


//call method
const person2={
    firstName : "ewdd",
    lastName : "dgjsf"
};
const person3 ={
    fullname : function(){
        return this.firstName + " " + this.lastName;
    }
};
person3.fullName.call(person2);


//bind()
const user3={
    firstName: "sfhdf",
    lastName:"dsgfh",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
const userr={
    firstName: "edD",
    lastName:"DFKDG"
};
user3.fullName.bind(userr);


//object destructuring  : taking value from the object and put into variable
const abc={
    name : "dfbfhd",
    id:"sadjh",
    age:55
};
const{name, id , age}=abc // name , id, age == object keys
console.log(name);


const user1 = { name: "Gargi" };
const { username } = user;

console.log(username); // undefined1


const response = {
  status: 200,
  data: {
    user: "Gargi",
    token: "abc123"
  }
};
const {
  data: { user4, token }
} = response;

console.log(user, token);
