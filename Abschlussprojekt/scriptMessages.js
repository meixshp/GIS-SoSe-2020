"use strict";
var Chatrooms;
(function (Chatrooms) {
    let chat1bttn = document.getElementById("chat1");
    chat1bttn.addEventListener("click", hdlChatroom1);
    let chat2bttn = document.getElementById("chat2");
    chat2bttn.addEventListener("click", hdlChatroom2);
    let sendbttn = document.getElementById("send");
    sendbttn.addEventListener("click", hdlSendMsg);
    let logoutbttn = document.getElementById("logout");
    logoutbttn.addEventListener("click", hdlLogout);
    let chatBox = document.getElementById("chatbox");
    let currentUser = "" + localStorage.getItem("username");
    let where = "";
    document.getElementById("who").innerHTML = "" + currentUser + "&nbsp;&nbsp;";
    let msg1 = []; //Array für Chatroom1
    let msg2 = []; //Array für Chatroom2
    async function hdlChatroom1(_event) {
        if (localStorage.getItem("username") != null) {
            //Löschen des vorherigen Chats
            while (chatBox.firstChild) {
                chatBox.firstChild.remove();
            }
            let url = "https://jiaies2020.herokuapp.com/";
            //let url: string = "http://localhost:8100/";
            where = "chatroom1";
            url += where;
            let response = await fetch(url);
            msg1 = await response.json();
            hdlCreateChatbox(msg1); //sendet sie zur Function, die sie anzeigen lässt
            setInterval(hdlCheck4NewMsg, 5000, url); //soll im 5sek-Takt prüfen, ob es zu neuen Nachrichten gekommen ist
        }
        else
            alert("Du musst eingeloggt sein, um auf die Chatrooms zugreifen zu können.");
    }
    async function hdlChatroom2(_event) {
        if (localStorage.getItem("username") != null) {
            //Löschen des vorherigen Chats
            while (chatBox.firstChild) {
                chatBox.firstChild.remove();
            }
            let url = "https://jiaies2020.herokuapp.com/";
            //let url: string = "http://localhost:8100/";
            where = "chatroom2";
            url += where;
            let response = await fetch(url);
            msg2 = await response.json();
            hdlCreateChatbox(msg2); //sendet sie zur Function, die sie anzeigen lässt
            setInterval(hdlCheck4NewMsg, 5000, url); //soll im 5sek-Takt prüfen, ob es zu neuen Nachrichten gekommen ist
        }
        else
            alert("Du musst eingeloggt sein, um auf die Chatrooms zugreifen zu können.");
    }
    async function hdlSendMsg(_event) {
        if (localStorage.getItem("username") != null) { //kann nur ausgeführt werden, wenn sich im LocalStorage ein Username befindet
            let formData = new FormData(document.forms[0]);
            let url = "https://jiaies2020.herokuapp.com/";
            //let url: string = "http://localhost:8100/";
            if (formData.get("message").toString().length != 0) { //Nachricht soll mind. 1 Zeichen beinhalten
                // tslint:disable-next-line: no-any
                let query = new URLSearchParams(formData);
                url += "send" + where + "?" + "username=" + currentUser + "&" + query.toString();
                await fetch(url);
            }
        }
        else
            alert("Du musst eingeloggt sein, um etwas versenden zu können.");
    }
    function hdlCreateChatbox(_msg) {
        for (let i = 0; i < _msg.length; i++) {
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            let div = document.createElement("div");
            row.appendChild(div);
            if (_msg[i].username == currentUser) //Unterscheidung, ob fremder Nutzer oder man selbst
                div.setAttribute("class", "messageByMe");
            else
                div.setAttribute("class", "messageByOthers");
            let h4 = document.createElement("h4"); //Username
            div.appendChild(h4).innerHTML = _msg[i].username;
            let description = document.createElement("p"); //Nachricht
            div.appendChild(description).innerHTML = _msg[i].message;
            chatBox.appendChild(row);
        }
        chatBox.scrollTop = chatBox.scrollHeight; //Scrollbar soll unten, bei aktuellsten Nachrichten, bleiben
    } //hier gefunden: https://stackoverflow.com/questions/40903462/how-to-keep-a-scrollbar-always-bottom
    async function hdlCheck4NewMsg(_url) {
        let response = await fetch(_url);
        let _msg = await response.json();
        if (_url == "https://jiaies2020.herokuapp.com/chatroom1") {
            //if (_url == "http://localhost:8100/chatroom1") {
            if (_msg.length != msg1.length) { //Vergleich zw. erstem Array und ständig aktualisiertem Array
                let slice = _msg.slice(msg1.length); //alte Nachrichten werden aus aktuellem Array rausgeschnitten                
                msg1 = _msg; //Array wird aktualisiert
                if (where == "chatroom1") //Nachricht soll nur angezeigt werden, wenn sich Nutzer im richtigen Chatroom befindet 
                    hdlCreateChatbox(slice);
            }
        }
        else if (_url == "https://jiaies2020.herokuapp.com/chatroom2") {
            //else if (_url == "http://localhost:8100/chatroom2") {
            if (_msg.length != msg2.length) { //Vergleich zw. erstem Array und ständig aktualisiertem Array
                let slice = _msg.slice(msg2.length); //alte Nachrichten werden aus aktuellem Array rausgeschnitten                   
                msg2 = _msg; //Array wird aktualisiert
                if (where == "chatroom2") //Nachricht soll nur angezeigt werden, wenn sich Nutzer im richtigen Chatroom befindet
                    hdlCreateChatbox(slice);
            }
        }
    }
    function hdlLogout(_event) {
        localStorage.clear();
        window.location.href = "Login.html";
    }
})(Chatrooms || (Chatrooms = {}));
//# sourceMappingURL=scriptMessages.js.map