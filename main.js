function ChangeColor(){
    document.getElementById("btn").style.color = "red"
    document.getElementById("btn").innerHTML = "I can change Color!"
}

function ChangeColor2(){
    document.getElementById("btn2").innerHTML = "I can change text and bg!"
    document.getElementById("btn2").style.background = "green"
}

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

function OnCLick(){
    let text = "";
    let i = 1;
    
    do {
        text += "<br>Huuhuu " + i;
        i++;
    }

    while (i < 6) {
        document.getElementById("Huuhuu").innerHTML = text;
    }
}

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

function fullName(){
    let name = document.getElementById("name").value
    let lname = document.getElementById("lname").value
    var text = name + " " + lname
    document.getElementById("information").innerHTML = "Hei: " + text // moi
}