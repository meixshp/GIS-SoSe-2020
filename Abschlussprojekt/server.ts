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

    let orders1: Mongo.Collection;
    let orders2: Mongo.Collection;
    let orders3: Mongo.Collection;

    connect();
    async function connect(): Promise<void> {    
        
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseURL, options);
        await mongoClient.connect();
        orders1 = mongoClient.db("Chat").collection("User");
        orders2 = mongoClient.db("Chat").collection("Chatroom1");
        orders3 = mongoClient.db("Chat").collection("Chatroom2");
        console.log("Connection ", orders1 != undefined);
    }

    let storageArray: string [] = []; 

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);

            //Login
            if (q.pathname == "/login") {
                if (orders1.findOne({where: {username: q.query.username, password: q.query.password}}))
                    _response.write("true");
                else 
                    _response.write("false");
            }

            //User hinzufügen
            else if (q.pathname == "/register") {
                if (orders1.findOne({username: q.query.username})) 
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
    async function receiveData(_orders: Mongo.Collection): Promise<string[]> {
        let storage: Mongo.Cursor<string> = _orders.find();
        storageArray = await storage.toArray();
        return storageArray;
    }
}