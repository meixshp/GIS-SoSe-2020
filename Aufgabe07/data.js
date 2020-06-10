"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        Aufgabe07.lager = await response.json();
        Aufgabe07.main();
    }
    let requestURL = "https://meixshp.github.io/GIS-SoSe-2020/Aufgabe07/newData.json";
    communicate(requestURL);
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map