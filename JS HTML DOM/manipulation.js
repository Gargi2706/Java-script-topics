//changing HTML & CSS Elements using DOM methods

// changing HTML content
    document.getElementById("p1").innerHTML= "Hello World!"; //by Id

// changing HTML attributes
    document.getElementById("p1").setAttribute("class", "intro"); //by Id
    document.getElementById("image").setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif"); //by Id

    // changing CSS styles : style.property

    document.getElementById("p1").style.color = "blue"; //by Id
    document.getElementById("p1").style.fontSize = "30px"; //by Id
    document.getElementById("p1").style.border = "2px solid black"; //by Id

    // using Event like onclick
    function changeText(){
        document.getElementById("p1").innerHTML = "You clicked the paragraph!";
    }


    document.getElementById("text").innerHTML = "text chnaged";