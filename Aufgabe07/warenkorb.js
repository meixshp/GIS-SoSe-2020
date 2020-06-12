"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let cartSum = 0;
    for (let i = 0; i < (localStorage.length / 3); i++) {
        //if (lager[i].kategorie == "under")
        let cartDiv = document.createElement("div");
        cartDiv.id = "" + i;
        cartDiv.setAttribute("class", "charInCart");
        document.getElementById("korbinhalt")?.appendChild(cartDiv);
        let img = document.createElement("img"); //Bild
        img.setAttribute("src", "" + localStorage.getItem("image" + i));
        img.setAttribute("alt", "" + localStorage.getItem("name" + i));
        cartDiv.appendChild(img);
        let h4 = document.createElement("h4"); // Name
        cartDiv.appendChild(h4).innerHTML = "" + localStorage.getItem("name" + i);
        let price = document.createElement("p"); //Preis
        cartDiv.appendChild(price).innerHTML = "" + localStorage.getItem("preis" + i) + " €";
        let button = document.createElement("button"); //Button
        button.innerHTML = "löschen";
        button.setAttribute("index", i.toString());
        button.addEventListener("click", handleDeleteFromCart);
        cartDiv.appendChild(button);
        cartSum += +localStorage.getItem("preis" + i);
    }
    let summe = document.createElement("h3");
    summe.innerHTML = "Summe: " + cartSum.toFixed(2) + " €";
    document.getElementById("korbinhalt")?.appendChild(summe);
    let buttonAll = document.createElement("button"); //Button
    buttonAll.innerHTML = "alles löschen";
    buttonAll.addEventListener("click", handleDeleteWholeCart);
    document.getElementById("korbinhalt")?.appendChild(buttonAll);
    //Function zum Löschen eines Artikels
    function handleDeleteFromCart(_event) {
        let target = _event.target;
        let transform = "" + target.getAttribute("index");
        let minusPrice = +localStorage.getItem("preis" + transform);
        cartSum = cartSum - minusPrice;
        localStorage.removeItem("name" + transform);
        localStorage.removeItem("image" + transform);
        localStorage.removeItem("preis" + transform);
        document.getElementById(transform)?.remove();
        location.reload();
    }
    //Function zum Löschen aller Artikel
    function handleDeleteWholeCart(_event) {
        localStorage.clear();
        location.reload();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map