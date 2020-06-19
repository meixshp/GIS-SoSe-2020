import * as Http from "http";

export namespace Aufgabe08 {

    console.log("Starting server");
    //localer Server wird aufgerufen
    let port: number = Number(process.env.PORT);

    if (!port)

        port = 8100;

    let server: Http.Server = Http.createServer();

    server.addListener("request", handleRequest); //anfrage wird gesendet

    server.addListener("listening", handleListen); //beobachtet einfach

    server.listen(port);


    function handleListen(): void {

        console.log("Listening");

    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");

        _response.setHeader("Access-Control-Allow-Origin", "*");


        _response.write(_request.url);

        console.log(_request.url);

        _response.end();

    }

}