namespace Aufgabe07 {

    async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let lager: JSON[] = [];
    lager =  await response.json();
    main(lager);
    }

    let requestURL: string = "https://meixshp.github.io/GIS-SoSe-2020/Aufgabe07/newData.json";
    communicate(requestURL);   
}