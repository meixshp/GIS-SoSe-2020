"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let htmlbttn = document.getElementById("buttonHTML");
    htmlbttn.addEventListener("click", hdlHTMLButton);
    let jsonbttn = document.getElementById("buttonJSON");
    jsonbttn.addEventListener("click", hdlJSONButton);
    async function hdlHTMLButton(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://jiaies2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "html" + "?" + query.toString();
        let response = await fetch(url);
        let responseStr = await response.text();
        //zur DOM hinzufügen
        document.getElementById("answer").innerHTML = responseStr;
    }
    async function hdlJSONButton(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://jiaies2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "json" + "?" + query.toString();
        let response = await fetch(url);
        let responseStr = await response.json();
        //Konsolenausgabe
        console.log(responseStr);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=typescript.js.map