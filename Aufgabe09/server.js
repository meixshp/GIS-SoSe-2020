"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe09 = void 0;
const Http = require("http");
const url = require("url");
var Aufgabe09;
(function (Aufgabe09) {
    console.log("Starting server");
    //localer Server wird aufgerufen
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest); //anfrage wird gesendet
    server.addListener("listening", handleListen); //beobachtet einfach
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            //für html-ausgabe später
            if (q.pathname == "/html") {
                for (let key in q.query) {
                    _response.write(key + ": " + q.query[key] + "<br/>");
                }
            }
            //für json-konsolenausgabe später
            else if (q.pathname == "/json") {
                let jsonContent = JSON.stringify(q.query);
                _response.write(jsonContent);
            }
        }
        _response.end();
    }
})(Aufgabe09 = exports.Aufgabe09 || (exports.Aufgabe09 = {}));
//# sourceMappingURL=server.js.map