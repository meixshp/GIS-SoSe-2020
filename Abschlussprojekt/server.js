"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chatrooms = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var Chatrooms;
(function (Chatrooms) {
    console.log("Starting server");
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
    let databaseURL = "mongodb+srv://jiaiesNewuser:jiaiesNewuserpw@gisgehtab.9jp9v.mongodb.net/Chat?retryWrites=true&w=majority";
    let orders;
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(databaseURL, options);
    connect();
    async function connect() {
        await mongoClient.connect();
        console.log("Connection ", orders != undefined);
    }
    let storageArray = [];
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            //Login
            if (q.pathname == "/login") {
                orders = mongoClient.db("Chat").collection("User");
                if (orders.findOne(q.query))
                    _response.write("true");
                else
                    _response.write("false");
            }
            //User hinzufügen
            else if (q.pathname == "/register") {
                orders = mongoClient.db("Chat").collection("User");
                if (orders.findOne(q.query))
                    _response.write("false");
                else {
                    orders.insertOne(q.query);
                    _response.write("true");
                }
            }
            //Nachrichten Chatroom 1
            else if (q.pathname == "/chatroom1") {
                orders = mongoClient.db("Chat").collection("Chatroom1");
                _response.write(JSON.stringify(await receiveData()));
            }
            //Nachrichten Chatroom 2
            else if (q.pathname == "/chatroom2") {
                orders = mongoClient.db("Chat").collection("Chatroom2");
                _response.write(JSON.stringify(await receiveData()));
            }
            //senden
            else if (q.pathname == "/sendchatroom1") {
                orders = mongoClient.db("Chat").collection("Chatroom1");
                orders.insertOne(q.query);
            }
            else if (q.pathname == "/sendchatroom2") {
                orders = mongoClient.db("Chat").collection("Chatroom2");
                orders.insertOne(q.query);
            }
            console.log("Hat geklappt!");
            _response.end();
        }
    }
    //sucht nach Daten in der Datenbank
    async function receiveData() {
        let storage = orders.find();
        storageArray = await storage.toArray();
        return storageArray;
    }
})(Chatrooms = exports.Chatrooms || (exports.Chatrooms = {}));
//# sourceMappingURL=server.js.map