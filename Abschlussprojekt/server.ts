import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

export namespace Chatrooms {

    console.log("Starting server");
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

    let databaseURL: string = "mongodb+srv://jiaiesNewuser:jiaiesNewuserpw@gisgehtab.9jp9v.mongodb.net/Chat?retryWrites=true&w=majority";

    let orders: Mongo.Collection;

    connect("User");
    async function connect(_collection: string): Promise<void> {    
        
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseURL, options);
        await mongoClient.connect();
        orders = mongoClient.db("Chat").collection("_collection");
        console.log("Connection ", orders != undefined);
    }

    let storageArray: string [] = []; 

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);

            //Login
            if (q.pathname == "/login") {
                if (orders.findOne(q.query))
                    _response.write("true");
                else 
                    _response.write("false");
            }

            //User hinzufügen
            else if (q.pathname == "/register") {
                if (orders.findOne(q.query)) 
                    _response.write("false");
                else {
                    orders.insertOne(q.query);
                    _response.write("true");
                } 
            }              

            //Nachrichten Chatroom 1
            else if (q.pathname == "/chatroom1") {
                connect("Chatroom1");
                _response.write(JSON.stringify(await receiveData()));
            }
            
            //Nachrichten Chatroom 2
            else if (q.pathname == "/chatroom2") {
                connect("Chatroom2"); 
                _response.write(JSON.stringify(await receiveData()));
            }
            
            //senden
            else if (q.pathname == "/sendchatroom1") {
                connect("Chatroom1");
                orders.insertOne(q.query);
            }

            else if (q.pathname == "/sendchatroom2") {
                connect("Chatroom2");
                orders.insertOne(q.query);
            }

            console.log("Hat geklappt!");
            _response.end();
        }
    }

    //sucht nach Daten in der Datenbank
    async function receiveData(): Promise<string[]> {
        let storage: Mongo.Cursor<string> = orders.find();
        storageArray = await storage.toArray();
        return storageArray;
    }

}