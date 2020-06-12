namespace Aufgabe07 {

    let cartSum: number = 0;
    
    for (let i: number = 0; i < (localStorage.length / 3); i++) {

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
        
        console.log("Im Warenkorb: " + localStorage.getItem("name" + i));
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
        let addedNum: string = "" + target.getAttribute("index");
        console.log("Gelöscht: " + localStorage.getItem("name" + addedNum));

        let minusPrice: number = +localStorage.getItem("preis" + addedNum)!;
        cartSum = cartSum - minusPrice;
        summe.innerHTML = "Summe: " + cartSum.toFixed(2) + " €";

        localStorage.removeItem("image" + addedNum);
        localStorage.removeItem("name" + addedNum);
        localStorage.removeItem("preis" + addedNum);

        document.getElementById(addedNum)?.remove();
    }

    //Function zum Löschen aller Artikel
    function handleDeleteWholeCart(_event: Event): void {
        localStorage.clear();
        console.log("Alles weg");
        location.reload();
    }
}