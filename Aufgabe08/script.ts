namespace Aufgabe08 {

    let submit: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
    submit.addEventListener("click", hdlCommunicate);

    let formData: FormData = new FormData(document.forms[0]);

    async function hdlCommunicate(): Promise<void> {

        let url: string = "https://jiaies2020.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();

        let response: Response = await fetch(url);
        let requestURL: string = await response.url;
        console.log(requestURL);
        
        /*for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }*/
    }
}
