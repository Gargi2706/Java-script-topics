// finding HTML elements by Id, tag name, class name,CSS selector , html object collection

//by Id
    const element = document.getElementById("demo1");
    document.getElementById("demo").innerHTML = "welcome to the" + " "  + element.innerHTML;

//by Tag Name
    const elements = document.getElementsByTagName("p");
    document.getElementById("demo2").innerHTML = "welcome to the" + " "  + elements[0].innerHTML;

//by Class Name
    const x = document.getElementsByClassName("intro");
    document.getElementById("demo").innerHTML = 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

 //by CSS Selector
        //querySelector
        const text= document.querySelector(".demo4");
        text.innerHTML = "hello world";
        
        //querySelectorAll
        const text= document.querySelectorAll(".demo5");
        text[0].innerHTML="first";

 //by HTML Object Collection - returns html collections ( forms , links , imgs)
        const y = document.forms["myform"];
        let text1="";
        for( let y= 0; y< document.forms.length; y++){
            text1 = text1 + document.forms[y].elements + "<br>";
        }
        document.getElementById("demo6").innerHTML = text1;