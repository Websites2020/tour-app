
$('.carousel').carousel({
    interval: 10,
    pause: false
  })

function tourReq() {
    alert("Your tour request has been made.  Thank you.  Hang tight as locals will contact you about it via email.")
}

function getData() {
    $.get("/show", function(data, status){
        console.log("getData works")
        // var arr = JSON.parse(data);
        var arr = data;
        console.log(data);
        for (var i=0; i<arr.length; i++)
    {
       $("#listings").append(`
        <div class="card border-info">
        <h5 class="card-header"><b>State/Country:</b> ${arr[i].country}</h5>
        <div class="card-body">
        <h5 class="card-title"><b>City:</b> ${arr[i].city}</h5>
        <div style="list-style-type: none;" class="card-text">
        <p><b>Description:</b> ${arr[i].description}<br><b>Number of People:</b> ${arr[i].people}<br><b>Date (YYYY/MM/DD):</b> ${arr[i].date}<br><b>Time:</b> ${arr[i].time}<br><b>Offer (in local currency):</b> ${arr[i].budget}</p>
        </div>
        <a id='myBtn${[i]}' href="#" class="btn btn-primary">Contact</a>
        </div>
        </div>
        <br>
        `);
        
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