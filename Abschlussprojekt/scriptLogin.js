"use strict";
var Chatrooms;
(function (Chatrooms) {
    let loginbttn = document.getElementById("login");
    loginbttn.addEventListener("click", hdlLoginButton);
    let registerbttn = document.getElementById("register");
    registerbttn.addEventListener("click", hdlRegisterButton);
    async function hdlLoginButton(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://jiaies2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "login" + "?" + query.toString();
        let userLogin = await fetch(url);
        let userLoginString = await userLogin.text();
        if (userLoginString == "true") {
            let usernameStr = document.getElementById("username").value;
            localStorage.clear();
            localStorage.setItem("username", usernameStr);
            window.location.href = "Chatrooms.html";
        }
        else
            alert("Der Nutzername oder das angegebene Passwort ist falsch.");
    }
    async function hdlRegisterButton(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://jiaies2020.herokuapp.com/";
        if (formData.get("password") != null) {
            // tslint:disable-next-line: no-any
            let query = new URLSearchParams(formData);
            url += "register" + "?" + query.toString();
            let userRegister = await fetch(url);
            let userRegisterString = await userRegister.text();
            if (userRegisterString == "true") {
                console.log("Erfolgreiche Registrierung!");
                alert("Deine Registrierung war erfolgreich!");
            }
            else
                alert("Der Nutzername ist schon vergeben.");
        }
        else {
            alert("Bitte gebe ein Passwort ein.");
        }
    }
})(Chatrooms || (Chatrooms = {}));
//# sourceMappingURL=scriptLogin.js.map