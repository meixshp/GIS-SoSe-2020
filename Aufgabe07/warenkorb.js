"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let cartSum = 0;
    for (let i = 0; i < (localStorage.length / 3); i++) {
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
        cartSum += +localStorage.getItem("preis" + i); //Gesamtsumme
        console.log("Im Warenkorb: " + localStorage.getItem("name" + i));
    }
    let summe = document.createElement("h3"); //Gesamtsumme
    summe.innerHTML = "Summe: " + cartSum.toFixed(2) + " €";
    document.getElementById("korbinhalt")?.appendChild(summe);
    let buttonAll = document.createElement("button"); //Button
    buttonAll.id = "deleteAll";
    buttonAll.innerHTML = "alles löschen";
    buttonAll.addEventListener("click", handleDeleteWholeCart);
    document.getElementById("korbinhalt")?.appendChild(buttonAll);
    //Function zum Löschen eines Artikels
    function handleDeleteFromCart(_event) {
        let target = _event.target;
        let addedNum = "" + target.getAttribute("index");
        console.log("Gelöscht: " + localStorage.getItem("name" + addedNum));
        let minusPrice = +localStorage.getItem("preis" + addedNum);
        cartSum = cartSum - minusPrice;
        summe.innerHTML = "Summe: " + cartSum.toFixed(2) + " €";
        localStorage.removeItem("image" + addedNum);
        localStorage.removeItem("name" + addedNum);
        localStorage.removeItem("preis" + addedNum);
        document.getElementById(addedNum)?.remove();
    }
    //Function zum Löschen aller Artikel
    function handleDeleteWholeCart(_event) {
        localStorage.clear();
        console.log("Alles weg");
        location.reload();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map