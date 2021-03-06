"use strict";
var Aufgabe10;
(function (Aufgabe10) {
    let retrievebttn = document.getElementById("retrieve");
    retrievebttn.addEventListener("click", hdlRetrieveButton);
    let storebttn = document.getElementById("store");
    storebttn.addEventListener("click", hdlStoreButton);
    async function hdlRetrieveButton(_event) {
        let url = "https://jiaies2020.herokuapp.com/";
        url += "retrieve";
        let response = await fetch(url);
        let responseStr = await response.text();
        //zur html hinzufügen
        document.getElementById("content").innerHTML = responseStr;
    }
    async function hdlStoreButton(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://jiaies2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "store" + "?" + query.toString();
        await fetch(url);
        let resetForm = document.getElementById("form");
        resetForm.reset();
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=typescript.js.map