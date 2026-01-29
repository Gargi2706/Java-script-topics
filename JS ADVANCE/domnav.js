//parentNode ,ChildNode , firstChild , lastChild , nextSibling , previousSibling

document.getElementById("demo1").inneHTML = document.getElementById("demo").innerHTML
document.getElementById("demo3").innerHTML=document.getElementById("demo2").firstChild.nodeValue
document.getElementById("demo5").innerHTML=document.getElementById("demo4").childNodes[0].nodeValue


//creating new html element (nodes)
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

//remove exsiting element : element.remove();
function myFunction(){
    document.getElementById("p3").remove();
}

document.getElementById("demo7").innerHTML= screen.availWidth;
document.getElementById("demo8").innerHTML= screen.availHeight;
document.getElementById("demo9").innerHTML= screen.colorDepth;
document.getElementById("demo10").innerHTML= window.location.href;
document.getElementById("demo10").innerHTML= window.location.pathname;




//repplacing html element
const parent = document.getElementsByClassName("p5");
const child= document.getElementsById("p6");
const paraa = document.createElement("p8");
const nodee = document.createTextNode("This is new.");
paraa.appendChild(nodee);
parent.replaceChild(paraa,child);

//collectiom
const myCollection = document.getElementsByTagName("p");
document.getElementById("demo6").innerHTML = "This document contains " + myCollection.length + " paragraphs.";


// window methos
window.innerHeight();
window.innerWidth();
window.open(); 
window.close();
window.moveTo();
window.resizeTo();

//window screen
screen.width();
screen.height();
screen.availWidth();
screen.availHeight();
screen.colorDepth();
screen.pixelDepth();
