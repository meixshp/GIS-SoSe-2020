namespace Chatrooms {

    export interface Messages {
        username: string; 
        message: string;
    }

    let chat1bttn: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("chat1");
    chat1bttn.addEventListener("click", hdlChatroom1);

    let chat2bttn: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("chat2");
    chat2bttn.addEventListener("click", hdlChatroom2);

    let sendbttn: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("send");
    sendbttn.addEventListener("click", hdlSendMsg);

    let logoutbttn: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("logout");
    logoutbttn.addEventListener("click", hdlLogout);
    
    let chatBox: HTMLDivElement = document.getElementById("chatbox") as HTMLDivElement;

    let currentUser: string = "" + localStorage.getItem("username");
    let where: string = "";

    document.getElementById("who")!.innerHTML = "" + currentUser + "&nbsp;&nbsp;";
    
    async function hdlChatroom1(_event: Event): Promise<void> {
        if (localStorage.getItem("username") != null) {

            //Löschen des vorherigen Chats
            while (chatBox.firstChild) {
                chatBox.firstChild.remove();
            }

            let url: string = "https://jiaies2020.herokuapp.com/";
            where = "chatroom1";
            url += where;
            
            let response: Response = await fetch(url);
            let msg: Messages[] = await response.json();

            hdlCreateChatbox(msg);
            hdlCheck4NewMsg(msg, url);
        }
        else
            alert("Du musst eingeloggt sein, um auf die Chatrooms zugreifen zu können.");
    }

    async function hdlChatroom2(_event: Event): Promise<void> {
        if (localStorage.getItem("username") != null) {

            while (chatBox.firstChild) {
                chatBox.firstChild.remove();
            }

            let url: string = "https://jiaies2020.herokuapp.com/";
            where = "chatroom2";
            url += where;
            
            let response: Response = await fetch(url);
            let msg: Messages[] = await response.json();

            hdlCreateChatbox(msg);
            hdlCheck4NewMsg(msg, url);
        }
        else
            alert("Du musst eingeloggt sein, um auf die Chatrooms zugreifen zu können.");
    }

    async function hdlSendMsg(_event: Event): Promise<void> {
        if (localStorage.getItem("username") != null) {
            let formData: FormData = new FormData(document.forms[0]);
            let url: string = "https://jiaies2020.herokuapp.com/";
            // tslint:disable-next-line: no-any
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            url += "send" + where + "?" + "username=" + currentUser + "&" + query.toString(); 

            await fetch(url); 
                
            let resetForm: HTMLFormElement = <HTMLFormElement>document.getElementById("textmsg");
            resetForm.reset();
        }
        else
            alert("Du musst eingeloggt sein, um etwas versenden zu können.");
    }

    function hdlCreateChatbox(_msg: Messages[]): void {
        for (let i: number = 0; i < _msg.length; i++) {
            let row: HTMLDivElement = document.createElement("div");  
            row.setAttribute("class", "row");

            let div: HTMLDivElement = document.createElement("div");
            row.appendChild(div);     

            if (_msg[i].username == currentUser) 
                div.setAttribute("class", "messageByMe");
            else 
                div.setAttribute("class", "messageByOthers");

            let h4: HTMLHeadingElement = document.createElement("h4");                  //Name
            div.appendChild(h4).innerHTML = _msg[i].username;

            let description: HTMLParagraphElement = document.createElement("p");        //Nachricht
            div.appendChild(description).innerHTML = _msg[i].message;

            chatBox.appendChild(row);
        }
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function hdlCheck4NewMsg(_msg: Messages[], _url: string): Promise<void> {
        let response: Response = await fetch(_url);
        let msgNew: Messages[] = await response.json();
        if (_msg.length != msgNew.length) {                          //Vergleich zw. erstem Array und ständig aktualisiertem Array                   
            hdlCreateChatbox(msgNew.slice(_msg.length));    	    //alte Nachrichten werden aus dem neuen Array entfernt
            _msg = msgNew;
        }
        setInterval(hdlCheck4NewMsg, 5000, _msg, _url);
    }

    function hdlLogout(_event: Event): void {
        localStorage.clear();
        window.location.href = "Login.html";
    }
}