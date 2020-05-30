namespace Aufgabe05 {
    interface Artikel {
        kategorie: boolean; 
        image: string;
        name: string;
        beschreibung: string;
        preis: number;
    }

    let artikel01: Artikel = {
        kategorie: true,
        image: "media/u.wendy.png",
        name: "Wendy",
        beschreibung: "Tier: Schaf, Charakter: Peppy",
        preis: 19.99
    };

    let artikel02: Artikel = {
        kategorie: true,
        image: "media/u.merengue.png",
        name: "Merengue",
        beschreibung: "Tier: Nashorn, Charakter: Normal",
        preis: 19.99
    };

    let artikel03: Artikel = {
        kategorie: true,
        image: "media/u.flora.png",
        name: "Flora",
        beschreibung: "Tier: Flamingo, Charakter: Peppy",
        preis: 19.99
    };

    let artikel04: Artikel = {
        kategorie: true,
        image: "media/u.lucky.png",
        name: "Lucky",
        beschreibung: "Tier: Hund, Charakter: Lazy",
        preis: 19.99
    };

    let artikel05: Artikel = {
        kategorie: true,
        image: "media/u.merry.png",
        name: "Merry",
        beschreibung: "Tier: Katze, Charakter: Peppy",
        preis: 19.99
    };

    let artikel06: Artikel = {
        kategorie: true,
        image: "media/u.tia.png",
        name: "Tia",
        beschreibung: "Tier: Elefant, Charakter: Normal",
        preis: 19.99
    };

    let artikel07: Artikel = {
        kategorie: false,
        image: "media/f.apollo.png",
        name: "Apollo",
        beschreibung: "Tier: Adler, Charakter: Cranky",
        preis: 19.99
    };

    let artikel08: Artikel = {
        kategorie: false,
        image: "media/f.whitney.png",
        name: "Whitney",
        beschreibung: "Tier: Wolf, Charakter: Snooty",
        preis: 19.99
    };

    let artikel09: Artikel = {
        kategorie: false,
        image: "media/f.pekoe.png",
        name: "Pekoe",
        beschreibung: "Tier: Bärenbaby, Charakter: Normal",
        preis: 19.99
    };

    let artikel10: Artikel = {
        kategorie: false,
        image: "media/f.fauna.png",
        name: "Fauna",
        beschreibung: "Tier: Reh, Charakter: Normal",
        preis: 19.99
    };

    let artikel11: Artikel = {
        kategorie: false,
        image: "media/f.marshal.png",
        name: "Marshal",
        beschreibung: "Tier: Eichhörnchen, Charakter: Smug",
        preis: 19.99
    };

    let artikel12: Artikel = {
        kategorie: false,
        image: "media/f.pietro.png",
        name: "Pietro",
        beschreibung: "Tier: Schaf, Charakter: Smug",
        preis: 19.99
    };

    export let lager: Artikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];
}