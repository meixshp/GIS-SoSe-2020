"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe10 = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var Aufgabe10;
(function (Aufgabe10) {
    console.log("Starting server");
    //lokaler Server wird aufgerufen
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    let databaseURL = "mongodb+srv://jiaiesNewuser:jiaiesNewuserpw@gisgehtab.9jp9v.mongodb.net/Test?retryWrites=true&w=majority";
    connect(databaseURL);
    let orders;
    async function connect(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("Students");
        console.log("Connection ", orders != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            //um sich die vorhandenen Daten anzeigen zu lassen
            if (q.pathname == "/retrieve") {
                let storage = orders.find();
                let storageArray = await storage.toArray();
                _response.write(JSON.stringify(storageArray));
            }
            //um etwas hinzuzufügen
            else if (q.pathname == "/store") {
                orders.insertOne(q.query);
            }
            console.log("Hat geklappt!");
            _response.end();
        }
    }
})(Aufgabe10 = exports.Aufgabe10 || (exports.Aufgabe10 = {}));
//# sourceMappingURL=server.js.map