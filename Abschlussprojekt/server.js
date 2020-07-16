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
    let orders1;
    let orders2;
    let orders3;
    connect();
    async function connect() {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(databaseURL, options);
        await mongoClient.connect();
        orders1 = mongoClient.db("Chat").collection("User");
        orders2 = mongoClient.db("Chat").collection("Chatroom1");
        orders3 = mongoClient.db("Chat").collection("Chatroom2");
        console.log("Connection ", orders1 != undefined);
    }
    let storageArray = [];
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            //Login
            if (q.pathname == "/login") {
                if (await orders1.findOne({ username: q.query.username, password: q.query.password }))
                    _response.write("true");
                else
                    _response.write("false");
            }
            //User hinzufügen
            else if (q.pathname == "/register") {
                if (orders1.findOne({ username: q.query.username }))
                    _response.write("false");
                else {
                    orders1.insertOne(q.query);
                    _response.write("true");
                }
            }
            //Nachrichten Chatroom 1
            else if (q.pathname == "/chatroom1") {
                _response.write(JSON.stringify(await receiveData(orders2)));
            }
            //Nachrichten Chatroom 2
            else if (q.pathname == "/chatroom2") {
                _response.write(JSON.stringify(await receiveData(orders3)));
            }
            //senden
            else if (q.pathname == "/sendchatroom1") {
                orders2.insertOne(q.query);
            }
            else if (q.pathname == "/sendchatroom2") {
                orders3.insertOne(q.query);
            }
        }
        console.log("Hat geklappt!");
        _response.end();
    }
    //sucht nach Daten in der Datenbank
    async function receiveData(_orders) {
        let storage = _orders.find();
        storageArray = await storage.toArray();
        return storageArray;
    }
})(Chatrooms = exports.Chatrooms || (exports.Chatrooms = {}));
//# sourceMappingURL=server.js.map