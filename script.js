function store(){
    console.log("this worked");
    var one = document.getElementById("location");
    localStorage.setItem("location", one.value);
    var two = document.getElementById("description");
    localStorage.setItem("description", two.value);
    var three = document.getElementById("date");
    localStorage.setItem("date", three.value);
    var four = document.getElementById("time");
    localStorage.setItem("time", four.value);
    var five = document.getElementById("email");
    localStorage.setItem("email", five.value);
   };

function getData(){
    var storedValueOne = localStorage.getItem("location");
    var storedValueTwo = localStorage.getItem("description");
    var storedValueThree = localStorage.getItem("date");
    var storedValueFour = localStorage.getItem("time");

    $("ul").append(`<li>${storedValueOne}<br>${storedValueTwo}<br>${storedValueThree}<br>${storedValueFour}</li>`).append("<button id='myBtn'>Bid</button>")


var btn = document.getElementById("myBtn");
console.log(btn);
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById('myModal');

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

}

function send() {
    console.log("this works");
    var form = document.getElementById("email");
    var email = localStorage.getItem("email");
    var mailTo = `mailto:${email}`;
    form.action = mailTo;
    form.submit()
    alert("message sent")
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function logout(){
    window.location.href = "./index.html";
}