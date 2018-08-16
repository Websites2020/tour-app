function logOut() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    window.location.href = "/page6";
}