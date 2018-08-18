// var arr;

$('.carousel').carousel({
    interval: 10,
    pause: false
  })

function tourReq() {
    alert("Your tour request has been made.  Thank you.  We are now using are patented system in finding Locals to be your tour guide.")
}

function getData() {
    $.get("/show", function(data, status){
        // console.log("getData works")
        // var arr = JSON.parse(data);
        var arr = data;
        // console.log(data);
        for (var i=0; i<arr.length; i++)
    {
       $("#listings").append(`
        <div class="card">
        <h5 class="card-header"><b>State/Country:</b> ${arr[i].country}</h5>
        <div class="card-body">
        <h5 class="card-title"><b>City:</b> ${arr[i].city}</h5>
        <div style="list-style-type: none;" class="card-text">
        <p><b>Description:</b> ${arr[i].description}<br><b>Number of People:</b> ${arr[i].people}<br><b>Date (YYYY/MM/DD):</b> ${arr[i].date}<br><b>Time:</b> ${arr[i].time}<br><b>Offer (in local currency):</b> ${arr[i].budget}.00</p>
        </div>
        <button id='myBtn${arr[i].tourID}' value='${arr[i].email}' href="#" class="btn btn-primary">Contact</button>
        </div>
        </div>
        <br>
        `);
        
        var btn = document.getElementById(`myBtn${arr[i].tourID}`);
        var span = document.getElementsByClassName("close")[0];
        var modal = document.getElementById('myModal');

        btn.onclick = function() {
            // console.log(this.value);
            sessionStorage.setItem('email', this.value);
            modal.style.display = "block";
        }

        span.onclick = function() {
            sessionStorage.removeItem('email');
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                sessionStorage.removeItem('email');
                modal.style.display = "none";
            }
        }

        } 

    })
}

// function send() {
//     console.log("function send()");
//     var form = document.getElementById("sendEmail");

//     var mailTo = btn.value;
//     console.log(mailTo)
//     form.action = mailTo;
//     form.submit()
//     var modal = document.getElementById('myModal');
//     modal.style.display = "none";
// }

function send(e) {
    console.log("function send()");
    var form = document.getElementById("sendEmail");

    var mailTo = sessionStorage.getItem('email');;
    // console.log(mailTo)
    form.action = `mailto:${mailTo}`;
    form.submit()
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    window.location.href = "#";
}

function signup(){
    window.location.href = "/page3";
}

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
//   }

// function construction() {
//     alert("The sign up page is currently under construction.  In the mean time, please use the account-free versions of the site.")
// }