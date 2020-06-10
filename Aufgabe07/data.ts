namespace Aufgabe07 {
    export interface Artikel {
        kategorie: string; 
        image: string;
        name: string;
        beschreibung: string;
        preis: number;
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        lager =  await response.json();
        main();
    }

    let requestURL: string = "https://meixshp.github.io/GIS-SoSe-2020/Aufgabe07/newData.json";
    communicate(requestURL);   
}