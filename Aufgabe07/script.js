"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let underCounter = 0;
    let fanCounter = 0;
    let full = document.getElementById("content");
    let inCart = 0; //anzahl der produkte im warenkorb
    let cartSum = 0; //gesamtpreis der artikel im warenkorb
    let cartDisplay = document.getElementById("inCart");
    let underrated = document.getElementById("underrated");
    let fanfaves = document.getElementById("fanfaves");
    function main(lager) {
        for (let i = 0; i < lager.length; i++) {
            let div = document.createElement("div"); //jeden Artikel einzeln erstellen
            div.setAttribute("class", "char");
            //let index: string = "article" + i;
            //div.id = index;
            //Kategoriezuteilung
            if (lager[i].kategorie == "under") { //underrated
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
            img.setAttribute("src", lager[i].image);
            img.setAttribute("alt", lager[i].name);
            div.appendChild(img);
            let h3 = document.createElement("h3"); // Name
            div.appendChild(h3).innerHTML = lager[i].name;
            let description = document.createElement("p"); //Beschreibung
            description.setAttribute("class", "description");
            div.appendChild(description).innerHTML = lager[i].beschreibung;
            let price = document.createElement("p"); //Preis
            div.appendChild(price).innerHTML = lager[i].preis + " €";
            let button = document.createElement("button"); //Button
            button.setAttribute("index", i.toString());
            button.innerHTML = "hinzufügen";
            button.addEventListener("click", addToCart);
            div.appendChild(button);
        }
    }
    Aufgabe07.main = main;
    //Button-Methode
    function addToCart(_event) {
        inCart = inCart + 1;
        cartDisplay.setAttribute("style", "visibility: visible");
        cartDisplay.innerHTML = "" + inCart;
        let target = _event.target;
        let transform = "" + target.getAttribute("index");
        let currentId = +transform;
        cartSum = cartSum + lager[currentId].preis;
        console.log("Die aktuelle Summe beträgt " + cartSum + " €.");
    }
    //Kategorien-Anzeige
    let categoryUV = document.getElementById("menuUV");
    categoryUV.addEventListener("click", handleCategoryUV);
    let categoryFF = document.getElementById("menuFF");
    categoryFF.addEventListener("click", handleCategoryFF);
    let showAll = document.getElementById("menuALL");
    showAll.addEventListener("click", handleShowAll);
    let menuAll = document.getElementById("menuALLSpan");
    //Methoden zur Kategorien-Anzeige
    function handleCategoryUV(_event) {
        underrated.setAttribute("style", "display:normal");
        fanfaves.setAttribute("style", "display:none");
        menuAll.setAttribute("style", "visibility: visible");
    }
    function handleCategoryFF(_event) {
        underrated.setAttribute("style", "display:none");
        fanfaves.setAttribute("style", "display:normal");
        menuAll.setAttribute("style", "visibility: visible");
    }
    function handleShowAll(_event) {
        underrated.setAttribute("style", "display:normal");
        fanfaves.setAttribute("style", "display:normal");
        menuAll.setAttribute("style", "visibility: hidden");
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map