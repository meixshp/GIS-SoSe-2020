namespace Aufgabe09 {

    let htmlbttn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonHTML");
    htmlbttn.addEventListener("click", hdlHTMLButton);

    let jsonbttn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonJSON");
    jsonbttn.addEventListener("click", hdlJSONButton);
    
    
    async function hdlHTMLButton(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://jiaies2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "html" + "?" + query.toString();
        
        let response: Response = await fetch(url);
        let responseStr: string = await response.text();

        //zur DOM hinzufügen
        document.getElementById("answer")!.innerHTML = responseStr;
    }

    async function hdlJSONButton(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://jiaies2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "json" + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseStr: string = await response.json();

        //Konsolenausgabe
        console.log(responseStr);  
    }
}
