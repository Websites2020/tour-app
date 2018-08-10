
// var btn = document.getElementById(`myBtn${[a]}`);
// console.log(btn);
// var span = document.getElementsByClassName("close")[0];
// var modal = document.getElementById('myModal');

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

function getData() {
    $.get("/show", function(data, status){
        // var arr = JSON.parse(data);
        var arr = data;
        console.log(data);
        for (var i=0; i<arr.length; i++)
    {
        $("ul").append(`<li style="font-size: 20px;"><b>City:</b> ${arr[i].city}<br><b>State/Country:</b> ${arr[i].country}<br><b>Description:</b> ${arr[i].description}<br><b>Number of People:</b> ${arr[i].people}<br><b>Date (YYYY/MM/DD):</b> ${arr[i].date}<br><b>Time:</b> ${arr[i].time}<br><b>Offer:</b> $${arr[i].budget}</li>`).append(`<button style="background-color: blue;
        border: none;
        color: white;
        padding: 7px 14px;
        margin: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;" id='myBtn${[i]}'>Contact</button>`);
        
        var btn = document.getElementById(`myBtn${[i]}`);
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
    })
}

function send() {
    console.log("this works");
    var form = document.getElementById("email");
    // var email = localStorage.getItem("email").split(',');

    $.get("/show", function(data, status){
        // var arr = JSON.parse(data);
        var email = data;
        console.log(email);
        for (var j=0; j<email.length; j++)
    {

    var mailTo = `mailto:${email[j].email}`;
    form.action = mailTo;
    form.submit()
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

})

}

function signup(){
    window.location.href = "/page3";
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

function construction() {
    alert("The sign up page is currently under construction.  In the mean time, please use the account-free versions of the site.")
}