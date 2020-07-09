import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe10 {

    console.log("Starting server");
    //lokaler Server wird aufgerufen
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen); 
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    let databaseURL: string = "mongodb+srv://jiaiesNewuser:jiaiesNewuserpw@gisgehtab.9jp9v.mongodb.net/Test?retryWrites=true&w=majority";
    connect(databaseURL);

    let orders: Mongo.Collection;

    async function connect(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("Students");
        console.log("Connection ", orders != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);

            //um sich die vorhandenen Daten anzeigen zu lassen
            if (q.pathname == "/retrieve") {
                let storage: Mongo.Cursor<string> = orders.find();
                let storageArray: string [] = await storage.toArray();
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
}