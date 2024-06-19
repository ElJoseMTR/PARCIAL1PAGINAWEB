if (localStorage.getItem('username') && localStorage.getItem('role')){
    console.log("bien")
}else{
    window.location.href = "../html/nopermision.html";
    console.log("NO PERMISION")

}