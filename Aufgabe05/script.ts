namespace Aufgabe05 {

    //counter, da immer nur 3 artikel in einem div
    let underCounter: number = 0;
    let fanCounter: number = 0;

    //counter, um 3er-divs zu zählen
    let underCounterDiv: number = 0;
    let fanCounterDiv: number = 0;

    //id-zuordnung der 3er-divs
    let divUnderId: string = "";
    let divFanId: string = "";

    //content-div zwischenspeichern
    let full: HTMLElement = document.getElementById("content") as HTMLDivElement;

    for (let i: number = 0; i < lager.length; i++) {

        let div: HTMLDivElement = document.createElement("div");  //jeden Artikel einzeln erstellen
        div.setAttribute("class", "char");

        //Kategoriezuteilung
        if (lager[i].kategorie) { //underrated

            if (underCounter == 0) { //überschirft
                if (full) full.innerHTML += "<p id=\"uv\">underrated villagers</p>";
            }

            //falls neuer 3er-div erstellt werden muss, da aktueller voll
            if (underCounter % 3 == 0) { 

                underCounterDiv++;

                let underrated: HTMLElement = document.createElement("underrated");

                divUnderId = "underrated" + underCounterDiv;
                underrated.id = divUnderId;

                document.getElementById("content")?.appendChild(underrated);
            }

            document.getElementById(divUnderId)?.appendChild(div);

            underCounter++;
        }

        else { //fanfaves
            
            if (fanCounter == 0) { //überschrift
                if (full) full.innerHTML += "<p id=\"fanf\">fan favourites</p>";
            }

            //falls neuer 3er-div erstellt werden muss, da aktueller voll
            if (fanCounter % 3 == 0) {

                fanCounterDiv++;

                let fanfaves: HTMLElement = document.createElement("fanfaves");

                divFanId = "fanfaves" + fanCounterDiv;
                fanfaves.id = divFanId;

                document.getElementById("content")?.appendChild(fanfaves);
            }

            document.getElementById(divFanId)?.appendChild(div);

            fanCounter++;
        }

        let img: HTMLImageElement = document.createElement("img");                  //Bild
        img.setAttribute("src", lager[i].image);
        img.setAttribute("alt", lager[i].name);
        div.appendChild(img);

        let h3: HTMLHeadingElement = document.createElement("h3");                  // Name
        div.appendChild(h3).innerHTML = lager[i].name;

        let description: HTMLParagraphElement = document.createElement("p");        //Beschreibung
        description.setAttribute("class", "description");
        div.appendChild(description).innerHTML = lager[i].beschreibung;

        let price: HTMLParagraphElement = document.createElement("p");              //Preis
        div.appendChild(price).innerHTML = lager[i].preis + " €";

        let button: HTMLButtonElement = document.createElement("button");           //Button
        div.appendChild(button).innerHTML = "hinzufügen";

    }
    
}