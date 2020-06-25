import * as Http from "http";
import * as url from "url";

export namespace Aufgabe09 {

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

        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
            //für html-ausgabe später
            if (q.pathname == "/html") {
                for (let key in q.query) {
                    _response.write(key + ": " + q.query[key] + "<br/>");
                }
            }
            //für json-konsolenausgabe später
            else if (q.pathname == "/json") {
                let jsonContent: string = JSON.stringify(q.query);
                _response.write(jsonContent);
            }
        }

        _response.end();
    }
}