function loadTourist() {

    var tuser = sessionStorage.getItem("user");
    var tpass = sessionStorage.getItem("password");

    $.post("/matchTourist", {usrName: tuser, usrPass: tpass}, function(data){
        // console.log(data[0])
        if (data[0].username===tuser && data[0].password===tpass) {

    $("#tLoad").append(
        `<div class="row">
                <div class="col-md-12">
                    <header>
                    <nav class="navbar">
                        <span class="title"><img src="./images/logo.png" height="70px" alt="logo">&trade;</span>
                            <ul class="nav justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link" href="/page1">Post</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/page2">Search</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="page4">How it Works</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/page3">Sign Up</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onclick="logOut()" href="#">Log Out</a>
                                </li>
                                <!-- <div id="google_translate_element"></div> -->
                            </ul>
                    </nav>
                    </header>
                </div>
            </div>
            <br>
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h3>Tourists: Create a Tour</h3>
    <!-- <form onsubmit="store()"> -->
    <form style="font-size: 18px;" onsubmit="tourReq()" action="/insertAcc" method="POST">
        Username: <span class="helperText2">(not publicly displayed)</span><br>
        <input style="font-size: 18px;" id="user" type="text" name="user" value=${data[0].username} readonly><br>
        <b>Location Details:</b><br>
        In what city would you like your tour to be in?<br>
        <input style="font-size: 18px;" id="location" type="text" name="city" maxlength="99" required><br>
        What state or country is the city in?<br>
        <input style="font-size: 18px;" id="state" type="text" name="country" maxlength="99" required><br>
        <b>Tour Details:</b><br>
        What do you want to see/do on your tour?<br>
        <textarea style="font-size: 18px;" id="description" class="large-text-box" type="text" cols="32" rows="10" name="description" maxlength="499" placeholder="Ex: Vist museums, eat lunch at a local cafe, see street art." required></textarea><br>
        How many people are going to be on this tour?<br>
        <input style="font-size: 18px;" id="people" type="number" name="people" min="1" max="999" required><br>
        What is your desired date for this tour?<br>
        <input style="font-size: 18px;" id="date" type="date" name="date" required><br>
        Desired time? (hh:mm am/pm)<br>
        <input style="font-size: 18px;" id="time" type="time" name="time" required><br>
        <b>Posting Details:</b><br>
        What is the best contact email?<br>
        <input style="font-size: 18px;" id="email" type="email" name="email" maxlength="99" required><span class="helperText2">(publicly displayed)</span><br>
        How much do you want to offer your Local Guide?<br>
        <input style="font-size: 18px;" id="offer" type="number" name="budget" min="1" max="99999" required><span class="helperText2">(in visting country's currency)</span><br><br>
        <!-- <button type="button" onclick="store()">Submit</button> -->
        <input class="btn btn-info" type="submit" value="Post">
    </form>
            </div>
            <div class="col-md-7">
            <h3>Your Active Tour Requests</h3>
            <br>
            <div id="touristListings"></div>
            </div>
        </div>
    </div>
    <footer><hr>&nbsp;Daniel Button &copy; 2018<span class="ourEmail">Questions, Comments, Help? Contact: tourwithalocal.us@gmail.com</span></footer>`
    )

    $.post("/showTAcc", {usrID: data[0].userID}, function(data2, status){
        // console.log("getdata2 works")
        // var arr = JSON.parse(data2);
        var arr = data2;
        // console.log(data2);
        for (var i=0; i<arr.length; i++)
    {
        $("#touristListings").append(`
        <div class="card border-info">
        <h5 class="card-header"><b>State/Country:</b> ${arr[i].country}</h5>
        <div class="card-body">
        <h5 class="card-title"><b>City:</b> ${arr[i].city}</h5>
        <div style="list-style-type: none;" class="card-text">
        <p><b>Description:</b> ${arr[i].description}<br><b>Number of People:</b> ${arr[i].people}<br><b>Date (YYYY/MM/DD):</b> ${arr[i].date}<br><b>Time:</b> ${arr[i].time}<br><b>Offer (in local currency):</b> ${arr[i].budget}<br><b>Email:</b> ${arr[i].email}</p>
        </div>
        <button id='deleteBtn${arr[i].tourID}' value='${arr[i].tourID}' class="btn btn-danger">Delete</button>
        </div>
        </div>
        <br>
        `);

        var deleteBtn = document.getElementById(`deleteBtn${arr[i].tourID}`);
        deleteBtn.onclick = function() {
            // console.log(this.value)
            $.post("/deleteListing", {tourID: this.value}, function(data3, status){
                // console.log(data3)
                window.location.href = "/page9"
            })
        }

}}) // end showTAcc

        } // end if statement
        else {
            $("#tLoad").prepend(`<div class="container">
            <div class='row'>
            <div class="col-md-12">
            <h1>User account unidentifiable.  Please enable cookies</h1>
            <a href="/">Home</a>
            </div>
            </div>
            </div>`)
        } // end else statement

    }) // end matchTourist post

}  // end loadTourist function

function logOut() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    window.location.href = "/page5";
}