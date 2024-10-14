
var userName = document.querySelector(`input[type="text"]`);
var userEmail = document.querySelector(`input[type="email"]`);
var userPass = document.querySelector(`input[type="password"]`);


var allusers = [];

if (localStorage.getItem("allusers") != null) {
    allusers = JSON.parse(localStorage.getItem("allusers"));
}

var btn = document.querySelector(".btn-signup");

if (btn) {
    btn.addEventListener('click', function () {

        var msgerr = validation();

        if (msgerr == true) {

            var userdata = {
                name: userName.value,
                email: userEmail.value,
                pass: userPass.value
            }

            allusers.push(userdata);
            localStorage.setItem("allusers", JSON.stringify(allusers));
            clearData();

            window.location.href = "./index.html";
        }
        else {
            alert(msgerr);
        }
    })
}


function clearData() {
    userName.value = "";
    userEmail.value = "";
    userPass.value = "";
}


function validation() {
    var validatename = /^[A-Z][a-z]{3,}$/;
    var validateemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validatepass = /[a-zA-Z1-9]{8,16}/;

    if (validatename.test(userName.value) == false) {
        return "Name is not valid";
    }
    else if (validateemail.test(userEmail.value) == false) {
        return "email is not valid";
    }
    else if (validatepass.test(userPass.value) == false) {
        return "Password Must be more than 8 letters"
    }

    for (var i = 0; i < allusers.length; i++) {
        if (userEmail.value == allusers[i].email) {
            return `This email is used before
                    use another one`
        }
    }

    return true;

}


