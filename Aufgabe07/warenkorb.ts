namespace Aufgabe07 {

    let cartSum: number = 0;

   

    for (let i: number = 0; i < (localStorage.length / 3); i++) {

       //if (lager[i].kategorie == "under")


        let cartDiv: HTMLDivElement = document.createElement("div");  
        cartDiv.id = "" + i;
        cartDiv.setAttribute("class", "charInCart");
        document.getElementById("korbinhalt")?.appendChild(cartDiv);

        let img: HTMLImageElement = document.createElement("img");                              //Bild
        img.setAttribute("src", "" + localStorage.getItem("image" + i));
        img.setAttribute("alt", "" + localStorage.getItem("name" + i));
        cartDiv.appendChild(img);

        let h4: HTMLHeadingElement = document.createElement("h4");                              // Name
        cartDiv.appendChild(h4).innerHTML = "" + localStorage.getItem("name" + i);

        let price: HTMLParagraphElement = document.createElement("p");                          //Preis
        cartDiv.appendChild(price).innerHTML = "" + localStorage.getItem("preis" + i) + " €";

        let button: HTMLButtonElement = document.createElement("button");                       //Button
        button.innerHTML = "löschen";
        button.setAttribute("index", i.toString());
        button.addEventListener("click", handleDeleteFromCart);
        cartDiv.appendChild(button);

        cartSum += +localStorage.getItem("preis" + i)!;
    }

    let summe: HTMLHeadingElement = document.createElement("h3");
    summe.innerHTML = "Summe: " + cartSum.toFixed(2) + " €";
    document.getElementById("korbinhalt")?.appendChild(summe);

    let buttonAll: HTMLButtonElement = document.createElement("button");                       //Button
    buttonAll.innerHTML = "alles löschen";
    buttonAll.addEventListener("click", handleDeleteWholeCart);
    document.getElementById("korbinhalt")?.appendChild(buttonAll);


    //Function zum Löschen eines Artikels
    function handleDeleteFromCart(_event: Event): void {

        let target: HTMLElement = (<HTMLElement>_event.target);
        let transform: string = "" + target.getAttribute("index");

        let minusPrice: number = +localStorage.getItem("preis" + transform)!;
        cartSum = cartSum - minusPrice;

        localStorage.removeItem("name" + transform);
        localStorage.removeItem("image" + transform);
        localStorage.removeItem("preis" + transform);

        document.getElementById(transform)?.remove();
    
        location.reload();
    }

    //Function zum Löschen aller Artikel
    function handleDeleteWholeCart(_event: Event): void {
        localStorage.clear();
        location.reload();
    }
}