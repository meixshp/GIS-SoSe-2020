"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let submit = document.getElementById("button");
    submit.addEventListener("click", hdlCommunicate);
    async function hdlCommunicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://jiaies2020.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        let response = await fetch(url);
        // let requestURL = await response.url;
        console.log(response.text);
        /*for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }*/
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map
