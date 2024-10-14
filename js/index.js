var searchemail = document.querySelector(`.searchemail`);
var searchpass = document.querySelector(".searchpass");


var x = document.querySelector(".btn-login");
if (x) {
    x.addEventListener('click', function () {

        var loginmsg = isemailfound();
        if (loginmsg == true ) {
            clearData2();
            var url = './Home.html';
            window.open(url);
        }
        else {
            alert(loginmsg);
        }

    })

}


function clearData2() {
    searchemail.value = "";
    searchpass.value = "";
}


function isemailfound() {
    for (var i = 0; i < allusers.length; i++) {
        if (searchemail.value == allusers[i].email) {
            for (var j = 0; j < allusers.length; j++) {
                if (searchpass.value == allusers[i].pass) {
                    sessionStorage.setItem('username' ,  allusers[i].name);
                    return true;
                }
            }
            return "password doesn`t match";
        }
    }
    return "email is not founded";
}


