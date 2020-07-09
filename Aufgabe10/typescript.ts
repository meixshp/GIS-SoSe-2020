namespace Aufgabe10 {

    let retrievebttn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("retrieve");
    retrievebttn.addEventListener("click", hdlRetrieveButton);

    let storebttn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("store");
    storebttn.addEventListener("click", hdlStoreButton);
    
    
    async function hdlRetrieveButton(_event: Event): Promise<void> {
        let url: string = "https://jiaies2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        url += "retrieve";
        
        let response: Response = await fetch(url);
        let responseStr: string = await response.text();

        //zur html hinzufügen
        document.getElementById("content")!.innerHTML = responseStr;
    }

    async function hdlStoreButton(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://jiaies2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "store" + "?" + query.toString();
        await fetch(url);

        //(<HTMLElement> document.getElementById("form")).reset();
    }
}
