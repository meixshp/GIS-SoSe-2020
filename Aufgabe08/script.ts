namespace Aufgabe08 {

    let submit: HTMLElement = <HTMLElement> document.getElementById("button");
    submit.addEventListener("click", communicate);

    async function communicate(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "https://gis-example.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();

        let response: Response = await fetch(url);
        let requestURL: string = response.url;
        console.log(requestURL);
        
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
}