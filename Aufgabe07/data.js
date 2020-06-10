"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    /*  interface Artikel {
          kategorie: string;
          image: string;
          name: string;
          beschreibung: string;
          preis: number;
      }
  
      let artikel01: Artikel = {
          kategorie: "under",
          image: "media/u.wendy.png",
          name: "Wendy",
          beschreibung: "Tier: Schaf, Charakter: Peppy",
          preis: 18.55
      };
  
      let artikel02: Artikel = {
          kategorie: "under",
          image: "media/u.merengue.png",
          name: "Merengue",
          beschreibung: "Tier: Nashorn, Charakter: Normal",
          preis: 19.15
      };
  
      let artikel03: Artikel = {
          kategorie: "under",
          image: "media/u.flora.png",
          name: "Flora",
          beschreibung: "Tier: Flamingo, Charakter: Peppy",
          preis: 18.05
      };
  
      let artikel04: Artikel = {
          kategorie: "under",
          image: "media/u.lucky.png",
          name: "Lucky",
          beschreibung: "Tier: Hund, Charakter: Lazy",
          preis: 19.55
      };
  
      let artikel05: Artikel = {
          kategorie: "under",
          image: "media/u.merry.png",
          name: "Merry",
          beschreibung: "Tier: Katze, Charakter: Peppy",
          preis: 18.55
      };
  
      let artikel06: Artikel = {
          kategorie: "under",
          image: "media/u.tia.png",
          name: "Tia",
          beschreibung: "Tier: Elefant, Charakter: Normal",
          preis: 19.55
      };
  
      let artikel07: Artikel = {
          kategorie: "fave",
          image: "media/f.apollo.png",
          name: "Apollo",
          beschreibung: "Tier: Adler, Charakter: Cranky",
          preis: 26.55
      };
  
      let artikel08: Artikel = {
          kategorie: "fave",
          image: "media/f.whitney.png",
          name: "Whitney",
          beschreibung: "Tier: Wolf, Charakter: Snooty",
          preis: 25.55
      };
  
      let artikel09: Artikel = {
          kategorie: "fave",
          image: "media/f.pekoe.png",
          name: "Pekoe",
          beschreibung: "Tier: Bärenbaby, Charakter: Normal",
          preis: 22.05
      };
  
      let artikel10: Artikel = {
          kategorie: "fave",
          image: "media/f.fauna.png",
          name: "Fauna",
          beschreibung: "Tier: Reh, Charakter: Normal",
          preis: 24.15
      };
  
      let artikel11: Artikel = {
          kategorie: "fave",
          image: "media/f.marshal.png",
          name: "Marshal",
          beschreibung: "Tier: Eichhörnchen, Charakter: Smug",
          preis: 29.55
      };
  
      let artikel12: Artikel = {
          kategorie: "fave",
          image: "media/f.pietro.png",
          name: "Pietro",
          beschreibung: "Tier: Schaf, Charakter: Smug",
          preis: 23.05
      };
      */
    /* export let lager: Artikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];
     let allJSON: string = JSON.stringify(lager);
     console.log(allJSON); */
    let lager = [];
    async function communicate(_url) {
        let response = await fetch(_url);
        lager = await response.json();
        Aufgabe07.main(lager);
        console.log(lager.length);
    }
    let requestURL = "https://meixshp.github.io/GIS-SoSe-2020/Aufgabe07/newData.json";
    communicate(requestURL);
    console.log(lager.length);
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map