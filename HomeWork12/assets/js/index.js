let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*function focusInput() {
    document.getElementById("email").focus();
}*/

function validate() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "") {
        alert(`Email is empty!`);
        return false;
    }
    if (password =="") {
        alert(`Password is empty!`);
        return false;
    } else if (password.length < 8) {
        alert(`Password must has aleast 8 characters!`);
        return false;        
    }
    if (email == "admin@gmail.com" && password == "admindeptrai") {
        alert(`Welcome!`);
        return true;
    } else {
        alert(`Unknown!`);
        return false;
    }
}
