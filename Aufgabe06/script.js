"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let underCounter = 0;
    let fanCounter = 0;
    let full = document.getElementById("content");
    let inCart = 0; //anzahl der produkte im warenkorb
    let cartSum = 0; //gesamtpreis der artikel im warenkorb
    let cartDisplay = document.getElementById("inCart");
    let underrated = document.getElementById("underrated");
    let fanfaves = document.getElementById("fanfaves");
    //Hauptmethode
    for (let i = 0; i < Aufgabe06.lager.length; i++) {
        let div = document.createElement("div"); //jeden Artikel einzeln erstellen
        div.setAttribute("class", "char");
        //let index: string = "article" + i;
        //div.id = index;
        //Kategoriezuteilung
        if (Aufgabe06.lager[i].kategorie == "under") { //underrated
            if (underCounter == 0) { //überschrift
                if (full) {
                    let title = document.createElement("p");
                    title.setAttribute("id", "uv");
                    title.innerHTML = "underrated villagers";
                    underrated.appendChild(title);
                }
            }
            underrated.appendChild(div);
            underCounter++;
        }
        else { //fanfaves    
            if (fanCounter == 0) { //überschrift  
                if (full) {
                    let title = document.createElement("p");
                    title.setAttribute("id", "fanf");
                    title.innerHTML = "fan favourites";
                    fanfaves.appendChild(title);
                }
            }
            fanfaves.appendChild(div);
            fanCounter++;
        }
        let img = document.createElement("img"); //Bild
        img.setAttribute("src", Aufgabe06.lager[i].image);
        img.setAttribute("alt", Aufgabe06.lager[i].name);
        div.appendChild(img);
        let h3 = document.createElement("h3"); // Name
        div.appendChild(h3).innerHTML = Aufgabe06.lager[i].name;
        let description = document.createElement("p"); //Beschreibung
        description.setAttribute("class", "description");
        div.appendChild(description).innerHTML = Aufgabe06.lager[i].beschreibung;
        let price = document.createElement("p"); //Preis
        div.appendChild(price).innerHTML = Aufgabe06.lager[i].preis + " €";
        let button = document.createElement("button"); //Button
        button.setAttribute("index", i.toString());
        button.innerHTML = "hinzufügen";
        button.addEventListener("click", addToCart);
        div.appendChild(button);
    }
    //Button-Methode
    function addToCart(_event) {
        inCart = inCart + 1;
        cartDisplay.setAttribute("style", "visibility: visible");
        cartDisplay.innerHTML = "" + inCart;
        let target = _event.target;
        let transform = "" + target.getAttribute("index");
        let currentId = +transform;
        cartSum = cartSum + Aufgabe06.lager[currentId].preis;
        console.log("Die aktuelle Summe beträgt " + cartSum + " €.");
    }
    //Kategorien-Anzeige
    let categoryUV = document.getElementById("menuUV");
    categoryUV.addEventListener("click", handleCategoryUV);
    let categoryFF = document.getElementById("menuFF");
    categoryFF.addEventListener("click", handleCategoryFF);
    let showAll = document.getElementById("menuALL");
    showAll.addEventListener("click", handleShowAll);
    //Methoden zur Kategorien-Anzeige
    function handleCategoryUV(_event) {
        underrated.setAttribute("style", "display:normal");
        fanfaves.setAttribute("style", "display:none");
    }
    function handleCategoryFF(_event) {
        underrated.setAttribute("style", "display:none");
        fanfaves.setAttribute("style", "display:normal");
    }
    function handleShowAll(_event) {
        underrated.setAttribute("style", "display:normal");
        fanfaves.setAttribute("style", "display:normal");
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map