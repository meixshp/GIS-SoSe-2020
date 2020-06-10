"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let artikel01 = {
        kategorie: "under",
        image: "media/u.wendy.png",
        name: "Wendy",
        beschreibung: "Tier: Schaf, Charakter: Peppy",
        preis: 18.55
    };
    let artikel02 = {
        kategorie: "under",
        image: "media/u.merengue.png",
        name: "Merengue",
        beschreibung: "Tier: Nashorn, Charakter: Normal",
        preis: 19.15
    };
    let artikel03 = {
        kategorie: "under",
        image: "media/u.flora.png",
        name: "Flora",
        beschreibung: "Tier: Flamingo, Charakter: Peppy",
        preis: 18.05
    };
    let artikel04 = {
        kategorie: "under",
        image: "media/u.lucky.png",
        name: "Lucky",
        beschreibung: "Tier: Hund, Charakter: Lazy",
        preis: 19.55
    };
    let artikel05 = {
        kategorie: "under",
        image: "media/u.merry.png",
        name: "Merry",
        beschreibung: "Tier: Katze, Charakter: Peppy",
        preis: 18.55
    };
    let artikel06 = {
        kategorie: "under",
        image: "media/u.tia.png",
        name: "Tia",
        beschreibung: "Tier: Elefant, Charakter: Normal",
        preis: 19.55
    };
    let artikel07 = {
        kategorie: "fave",
        image: "media/f.apollo.png",
        name: "Apollo",
        beschreibung: "Tier: Adler, Charakter: Cranky",
        preis: 26.55
    };
    let artikel08 = {
        kategorie: "fave",
        image: "media/f.whitney.png",
        name: "Whitney",
        beschreibung: "Tier: Wolf, Charakter: Snooty",
        preis: 25.55
    };
    let artikel09 = {
        kategorie: "fave",
        image: "media/f.pekoe.png",
        name: "Pekoe",
        beschreibung: "Tier: Bärenbaby, Charakter: Normal",
        preis: 22.05
    };
    let artikel10 = {
        kategorie: "fave",
        image: "media/f.fauna.png",
        name: "Fauna",
        beschreibung: "Tier: Reh, Charakter: Normal",
        preis: 24.15
    };
    let artikel11 = {
        kategorie: "fave",
        image: "media/f.marshal.png",
        name: "Marshal",
        beschreibung: "Tier: Eichhörnchen, Charakter: Smug",
        preis: 29.55
    };
    let artikel12 = {
        kategorie: "fave",
        image: "media/f.pietro.png",
        name: "Pietro",
        beschreibung: "Tier: Schaf, Charakter: Smug",
        preis: 23.05
    };
    Aufgabe07.lager = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];
    let allJSON = JSON.stringify(Aufgabe07.lager);
    console.log(allJSON);
    function connect(_url) {
        // try to communicate
        let promise = fetch(_url);
        // establish the functions to call when communications 1. succeeds, 2. fails
        promise.then(handleSuccess, handleFailure);
    }
    function handleFailure(_response) {
        console.log("Failure", _response);
    }
    function handleSuccess(_response) {
        console.log("Success", _response);
    }
    connect("newData.json");
    let allArticles;
    let requestURL = "newData.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        allArticles = request.response;
        console.log(allArticles);
    };
    //let myObj: Artikel = JSON.parse(allJSON);
    //document.getElementById("demo").innerHTML = myObj.name;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map