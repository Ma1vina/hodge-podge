function showPassword(target){
    var input = document.getElementById("Pwd");
    if (input.getAttribute("type") == "password") {
        target.classList.add("view"); 
        input.setAttribute("type", "text");
}else{
    target.classList.remove("view");
		input.setAttribute("type", "password");
}
return false;
}


function getEntrance() {
    var login = document.getElementById("username").value;
    var password = document.getElementById("Pwd").value;
    if(login == "Марина" && password == "123123"){
        alert("Welcome!")
    }else if(login == "Дмитрий" && password == "321321"){
        alert("Welcome!")
} else {
    alert("Inccorect login or password!");
}
}



// var button = document.getElementById("show");
//          button.onclick = show;
//          var input = document.getElementById("Pwd");
//          var icon = document.getElementById("show1");
//          function show () {
//           if(input.getAttribute('type') == 'password') {
//            input.removeAttribute('type');
//            input.setAttribute('type', 'text');
//            button.innerHTML='Hide password  <i id="Pwd" class="far fa-eye-slash">';
//           } else {
//            input.removeAttribute('type');
//            input.setAttribute('type', 'password');
//            button.innerHTML='Show password  <i id="swow1" class="checkPwd">';
//           }
//          }