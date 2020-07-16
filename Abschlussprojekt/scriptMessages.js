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
    let currentUser = "" + localStorage.getItem("username");
    let where = "";
    document.getElementById("who").innerHTML = "" + currentUser + "&nbsp;&nbsp;";
    async function hdlChatroom1(_event) {
        if (localStorage.getItem("username") != null) {
            document.getElementById("info").setAttribute("style", "display:none");
            let url = "https://jiaies2020.herokuapp.com/";
            where = "chatroom1";
            url += where;
            let response = await fetch(url);
            let msg = await response.json();
            console.log(msg);
            //setTimeout(hdlCreateChatbox, 5000, msg);
            hdlCreateChatbox(msg);
        }
    }
    async function hdlChatroom2(_event) {
        if (localStorage.getItem("username") != null) {
            document.getElementById("info").setAttribute("style", "display:none");
            let url = "https://jiaies2020.herokuapp.com/";
            where = "chatroom2";
            url += where;
            let response = await fetch(url);
            let msg = await response.json();
            setTimeout(hdlCreateChatbox, 5000, msg);
        }
    }
    // tslint:disable-next-line: typedef
    function hdlCreateChatbox(_msg) {
        let chatBox = document.getElementById("chatbox");
        for (let i = 0; i < _msg.length; i++) {
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            let div = document.createElement("div");
            row.appendChild(div);
            let h4 = document.createElement("h4"); //Name
            div.appendChild(h4).innerHTML = _msg[i].username;
            if (_msg[i].username == currentUser) {
                div.setAttribute("class", "messageByMe");
                let deletebttn = document.createElement("span");
                div.appendChild(deletebttn).innerHTML = "x";
                //deletebttn.addEventListener("click", hdlDeleteMsg);
            }
            else
                div.setAttribute("class", "messageByOthers");
            let description = document.createElement("p"); //Nachricht
            div.appendChild(description).innerHTML = _msg[i].message;
            chatBox.appendChild(row);
        }
        chatBox.scrollTop = chatBox.scrollHeight;
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
    }
    function hdlLogout(_event) {
        localStorage.clear();
        window.location.href = "Login.html";
    }
})(Chatrooms || (Chatrooms = {}));
//# sourceMappingURL=scriptMessages.js.map