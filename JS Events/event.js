// onchange : element value changes
// onclick : when an element is clicked
// onmouseover : when mouse pointer is over an element
// onmouseout : when mouse pointer leaves an element
// onkeydown : when a key is pressed down
// onload : when the page finishes loading
//ondblclick : when an element is double clicked
// onsubmit : when a form is submitted
// addEventListener : element.addEventListener(event, function);

//onclick
function clickMe(){
    alert("you clicked the button!");
}
function displayDate(){
    document.getElementById("demo").innerHTML = Date();
}

let button = document.getElementById("Btn");
button.addEventListener("click", function(){
    alert("Button clicked using addEventListener");
});

//onmouseover and onmouseout
function mouseOver(){
    document.getElementById("demo1").style.backgroundColor = "lightblue";
}
function mouseOut(){
    document.getElementById("demo1").innerHTML = "Thank you";
}


let button2 = document.getElementById("btn")
button2.addEventListener("mouseover", function(){
    button2.style.backgroundColor = "yellow";
});
button2.addEventListener("mouseout" , function(){
    button2.style.backgroundcolor = "white";
});

//ondblclick
function doubleClick(){
    document.getElementById("demo2").innerHTML = "you double clicked the paragraph!";
}

//onkeydown
function keyDown(){
    document.getElementById("demo3").style.backgroundColor = "lightgrey";
}

const k = document.getElementById("k");
k.addEventListener("keydown", function (event) {
  document.getElementById("demo4").innerHTML = "You pressed: " + event.key;
});

//onkeyup
function keyUp(){
    document.getElementById("demo3").style.backgroundColor = "white";
}

//onload
function pageLoaded(){
    alert("page is loaded");
}

window.onload = pageLoaded;

window.addEventListener("load", function () {
  let img = document.getElementById("photo");
  console.log(img.width); 
});


// timing events : setTimeout , setInterval

// setTimeout : executes a function after a specified number of milliseconds (Sets a clock timeout (runs once)
const btn = document.getElementById("btn1");
btn.addEventListener("click" , function(){
    setTimeout(txt , 3000)
});
function txt(){
    document.getElementById("demo5").innerHTML = " HELLO AGAIN AFTER 3 SECONDS";
}

// setInterval : executes a function repeatedly after a specified number of milliseconds(Executes a function again and again after a fixed time gap,Run repeatedly at intervals)
let count = 0;
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click" , function(){
    setInterval(changeText , 2000)
});
function changeText(){
    count++;
    document.getElementById("demo6").innerHTML = "Count: " + count;
}  

let count1=0;
let id = setInterval(()=>{
    console.log(count1);
    count1++;
    if(count1===10){
        clearInterval(id);
    }
}, 3000)

// remove event listener : name. removeEventListener(event, function);
//blocking events : event.preventDefault();\
//oninput : when an element gets user input ( ex: toUppercase in text box) : <input type="text" oninput="this.value = this.value.toUpperCase()">    
