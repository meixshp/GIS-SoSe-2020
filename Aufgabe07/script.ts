namespace Aufgabe07 {

    let underCounter: number = 0;
    let fanCounter: number = 0;    

    let full: HTMLElement = document.getElementById("content") as HTMLDivElement;

    let inCart: number = 0;     //anzahl der produkte im warenkorb
    let cartSum: number = 0;    //gesamtpreis der artikel im warenkorb

    let cartDisplay: HTMLDivElement = document.getElementById("inCart") as HTMLDivElement;
    let underrated: HTMLDivElement = document.getElementById("underrated") as HTMLDivElement;
    let fanfaves: HTMLDivElement = document.getElementById("fanfaves") as HTMLDivElement;

    export function main(_lager: JSON[]): void {
        let lager: JSON[] = _lager;
        for (let i: number = 0; i < lager.length; i++) {

            let div: HTMLDivElement = document.createElement("div");  //jeden Artikel einzeln erstellen
            div.setAttribute("class", "char");

            //let index: string = "article" + i;
            //div.id = index;

            //Kategoriezuteilung
            if (lager[i].kategorie == "under") { //underrated

                if (underCounter == 0) { //überschrift
                    if (full) {
                        let title: HTMLElement = document.createElement("p");
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
                        let title: HTMLElement = document.createElement("p");
                        title.setAttribute("id", "fanf");
                        title.innerHTML = "fan favourites";
                        fanfaves.appendChild(title);
                    }
                }

                fanfaves.appendChild(div);
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
            button.setAttribute("index", i.toString());
            button.innerHTML = "hinzufügen";
            button.addEventListener("click", addToCart);
            div.appendChild(button);
        }
    }

    //Button-Methode
    function addToCart(_event: Event): void {
        inCart = inCart + 1;

        cartDisplay.setAttribute("style", "visibility: visible");
        cartDisplay.innerHTML = "" + inCart;

        let target: HTMLElement = (<HTMLElement>_event.target);
        let transform: string = "" + target.getAttribute("index");
        let currentId: number = +transform;
        
        cartSum = cartSum + lager[currentId].preis;
        console.log("Die aktuelle Summe beträgt " + cartSum + " €.");
    }

    //Kategorien-Anzeige
    let categoryUV: HTMLElement = document.getElementById("menuUV") as HTMLElement;
    categoryUV.addEventListener("click", handleCategoryUV);

    let categoryFF: HTMLElement = document.getElementById("menuFF") as HTMLElement;
    categoryFF.addEventListener("click", handleCategoryFF);

    let showAll: HTMLElement = document.getElementById("menuALL") as HTMLElement;
    showAll.addEventListener("click", handleShowAll);

    let menuAll: HTMLSpanElement = document.getElementById("menuALLSpan") as HTMLSpanElement;
    
    //Methoden zur Kategorien-Anzeige
    function handleCategoryUV(_event: Event): void {
        underrated.setAttribute("style", "display:normal");
        fanfaves.setAttribute("style", "display:none");
        menuAll.setAttribute("style", "visibility: visible");
    }

    function handleCategoryFF(_event: Event): void {
        underrated.setAttribute("style", "display:none");
        fanfaves.setAttribute("style", "display:normal"); 
        menuAll.setAttribute("style", "visibility: visible");
    }

    function handleShowAll(_event: Event): void {
        underrated.setAttribute("style", "display:normal");
        fanfaves.setAttribute("style", "display:normal");
        menuAll.setAttribute("style", "visibility: hidden");
    }
}