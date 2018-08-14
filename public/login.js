function addUser() {

var usrData = document.querySelector('input[name="account"]:checked').value;
console.log(usrData)

if (usrData === "1") {
        var user=$("#usrName").val();
        var email=$("#usrEmail").val();
        var pass=$("#usrPass").val();
        $.post("/addTourist",{usrName: user,usrEmail: email, usrPass: pass}, function(data){
          console.log(data.affectedRows)
          if(data.affectedRows === 0) {
            window.location.href='/page8'
          } else {
          window.location.href='/page7'
          }
        });
} else if (usrData === "2") {
    var user=$("#usrName").val();
        var email=$("#usrEmail").val();
        var pass=$("#usrPass").val();
        $.post("/addLocal",{usrName: user,usrEmail: email, usrPass: pass}, function(data){
            console.log(data.affectedRows)
            if(data.affectedRows === 0) {
              window.location.href='/page8'
            } else {
            window.location.href='/page7'
            }
        });
}
alert("processing...")

}