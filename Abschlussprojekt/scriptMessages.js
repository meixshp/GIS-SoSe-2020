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
    async function hdlChatroom1(_event) {
        if (localStorage.getItem("username") != null) {
            //Löschen des vorherigen Chats
            while (chatBox.firstChild) {
                chatBox.firstChild.remove();
            }
            let url = "https://jiaies2020.herokuapp.com/";
            where = "chatroom1";
            url += where;
            let response = await fetch(url);
            let msg = await response.json();
            hdlCreateChatbox(msg);
            hdlCheck4NewMsg(msg, url);
        }
        else
            alert("Du musst eingeloggt sein, um auf die Chatrooms zugreifen zu können.");
    }
    async function hdlChatroom2(_event) {
        if (localStorage.getItem("username") != null) {
            while (chatBox.firstChild) {
                chatBox.firstChild.remove();
            }
            let url = "https://jiaies2020.herokuapp.com/";
            where = "chatroom2";
            url += where;
            let response = await fetch(url);
            let msg = await response.json();
            hdlCreateChatbox(msg);
            hdlCheck4NewMsg(msg, url);
        }
        else
            alert("Du musst eingeloggt sein, um auf die Chatrooms zugreifen zu können.");
    }
    async function hdlSendMsg(_event) {
        if (localStorage.getItem("username") != null) {
            let formData = new FormData(document.forms[0]);
            let url = "https://jiaies2020.herokuapp.com/";
            // tslint:disable-next-line: no-any
            let query = new URLSearchParams(formData);
            url += "send" + where + "?" + "username=" + currentUser + "&" + query.toString();
            await fetch(url);
            let resetForm = document.getElementById("textmsg");
            resetForm.reset();
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
            if (_msg[i].username == currentUser)
                div.setAttribute("class", "messageByMe");
            else
                div.setAttribute("class", "messageByOthers");
            let h4 = document.createElement("h4"); //Name
            div.appendChild(h4).innerHTML = _msg[i].username;
            let description = document.createElement("p"); //Nachricht
            div.appendChild(description).innerHTML = _msg[i].message;
            chatBox.appendChild(row);
        }
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    async function hdlCheck4NewMsg(_msg, _url) {
        let response = await fetch(_url);
        let msgNew = await response.json();
        if (_msg.length != msgNew.length) { //Vergleich zw. erstem Array und ständig aktualisiertem Array                   
            hdlCreateChatbox(msgNew.slice(_msg.length)); //alte Nachrichten werden aus dem neuen Array entfernt
            console.log(msgNew);
            console.log(_msg);
            _msg = msgNew;
            console.log(msgNew);
            console.log(_msg);
        }
        setInterval(hdlCheck4NewMsg, 5000, _msg, _url);
    }
    function hdlLogout(_event) {
        localStorage.clear();
        window.location.href = "Login.html";
    }
})(Chatrooms || (Chatrooms = {}));
//# sourceMappingURL=scriptMessages.js.map