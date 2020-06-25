namespace Aufgabe09 {

    let htmlbttn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonHTML");
    htmlbttn.addEventListener("click", hdlHTMLButton);

    let jsonbttn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonJSON");
    jsonbttn.addEventListener("click", hdlJSONButton);

    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://jiaies2020.herokuapp.com/";
    
    

    async function hdlHTMLButton(): Promise<void> {
        url += "html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        
        let response: Response = await fetch(url);
        let responseStr: string = await response.text();

        //zur DOM hinzufügen
        document.getElementById("answer")!.innerHTML = responseStr;
    }

    async function hdlJSONButton(): Promise<void> {
        url += "json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseStr: string = await response.json();

        //Konsolenausgabe
        console.log(responseStr);  
    }
}
