// This will change color
function ChangeColor(){
    document.getElementById("Change").style.color = "red"
    document.getElementById("btn").innerHTML = "I can change Color!"
}

// This will change text
function ChangeColor2(){
    document.getElementById("Change").innerHTML = "TEHTÄVÄ 1"
    document.getElementById("btn2").innerHTML = "WoW"
}

// This will show age
function Age(){
    let age = document.getElementById("age").value;
    let voteable
    if (age < 18){
        voteable = "Too young"
        document.getElementById("test").innerHTML = voteable + " to drink beer.";
    } else if (age >= 18) {
        voteable = "Old enough"
        document.getElementById("test").innerHTML = voteable + " to drink beer.";
    } else {
        voteable = "That is not a number dumbass!"
        document.getElementById("test").innerHTML = voteable;
    }
}

// This will print Huuhuu 5 times making a loop
function OnCLick(){
    let text = "";
    let i = 1;
    
    do {
        text += "<br>Huuhuu?!";
        i++;
    }

    while (i < 6) {
        document.getElementById("Huuhuu").innerHTML = text;
    }
}

// This will show Animals in order with a ! in the end
function ChangeList(){
    let text = "";
    let i = 0;
    const myList = ["Koira","Kissa","Hevonen", "Hiiri","Marsu"]

    do {
        text += "<br>" + myList[i] + "!";
        i++;
    }

    while (i < 5) {
        document.getElementById("BetterList").innerHTML = text;
    }
}

// This will show the full name with an "Hei:" at the start
function fullName(){
    let name = document.getElementById("name").value
    let lname = document.getElementById("lname").value
    var text = name + " " + lname
    document.getElementById("information").innerHTML = "Hei: " + text // moi2
}