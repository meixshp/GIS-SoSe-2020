"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    //counter, da immer nur 3 artikel in einem div
    let underCounter = 0;
    let fanCounter = 0;
    //counter, um 3er-divs zu zählen
    let underCounterDiv = 0;
    let fanCounterDiv = 0;
    //id-zuordnung der 3er-divs
    let divUnderId = "";
    let divFanId = "";
    //content-div zwischenspeichern
    let full = document.getElementById("content");
    for (let i = 0; i < Aufgabe05.lager.length; i++) {
        let div = document.createElement("div"); //jeden Artikel einzeln erstellen
        div.setAttribute("class", "char");
        //Kategoriezuteilung
        if (Aufgabe05.lager[i].kategorie) { //underrated
            if (underCounter == 0) { //überschirft
                if (full)
                    full.innerHTML += "<p id=\"uv\">underrated villagers</p>";
            }
            //falls neuer 3er-div erstellt werden muss, da aktueller voll
            if (underCounter % 3 == 0) {
                underCounterDiv++;
                let underrated = document.createElement("underrated");
                divUnderId = "underrated" + underCounterDiv;
                underrated.id = divUnderId;
                document.getElementById("content")?.appendChild(underrated);
            }
            document.getElementById(divUnderId)?.appendChild(div);
            underCounter++;
        }
        else { //fanfaves
            if (fanCounter == 0) { //überschrift
                if (full)
                    full.innerHTML += "<p id=\"fanf\">fan favourites</p>";
            }
            //falls neuer 3er-div erstellt werden muss, da aktueller voll
            if (fanCounter % 3 == 0) {
                fanCounterDiv++;
                let fanfaves = document.createElement("fanfaves");
                divFanId = "fanfaves" + fanCounterDiv;
                fanfaves.id = divFanId;
                document.getElementById("content")?.appendChild(fanfaves);
            }
            document.getElementById(divFanId)?.appendChild(div);
            fanCounter++;
        }
        let img = document.createElement("img"); //Bild
        img.setAttribute("src", Aufgabe05.lager[i].image);
        img.setAttribute("alt", Aufgabe05.lager[i].name);
        div.appendChild(img);
        let h3 = document.createElement("h3"); // Name
        div.appendChild(h3).innerHTML = Aufgabe05.lager[i].name;
        let description = document.createElement("p"); //Beschreibung
        description.setAttribute("class", "description");
        div.appendChild(description).innerHTML = Aufgabe05.lager[i].beschreibung;
        let price = document.createElement("p"); //Preis
        div.appendChild(price).innerHTML = Aufgabe05.lager[i].preis + " €";
        let button = document.createElement("button"); //Button
        div.appendChild(button).innerHTML = "hinzufügen";
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map