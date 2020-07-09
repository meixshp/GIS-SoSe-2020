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
        console.log("Connected!");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
            let jsonToString: string = "";
            console.log("Connected1!");
            //um sich die vorhandenen Daten anzeigen zu lassen
            if (q.pathname == "/retrieve") {
                console.log("Connected2!");
                // tslint:disable-next-line: typedef
                orders.find().toArray(function(error: Mongo.MongoError, results: String[]) {
                    if (error)  
                        throw error;

                    for (let i: number = 0; i < results.length; i++) {
                        jsonToString += JSON.stringify(results[i]) + "<br>";
                    }
                    console.log(jsonToString);
                });
            }
            //um etwas hinzuzufügen
            else if (q.pathname == "/store") {
                orders.insertOne(q.query);
                console.log("Connected3!");
            }

            //um Daten zu löschen
            //else if (q.pathname == "/delete") {
                
            //}        
            _response.write(jsonToString);
            _response.end();
        }

    }
}