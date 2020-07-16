namespace Chatrooms {

    export interface Messages {
        _id: string;
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

    let currentUser: string = "" + localStorage.getItem("username");
    let where: string = "";

    document.getElementById("who")!.innerHTML = "" + currentUser + "&nbsp;&nbsp;";
    
    async function hdlChatroom1(_event: Event): Promise<void> {
        if (localStorage.getItem("username") != null) {
            document.getElementById("info")!.setAttribute("style", "display:none");
            let url: string = "https://jiaies2020.herokuapp.com/";
            where = "chatroom1";
            url += where;
            
            let response: Response = await fetch(url);
            let msg: Messages[] = await response.json();

            console.log(msg);

            //setTimeout(hdlCreateChatbox, 5000, msg);
            //hdlCreateChatbox(msg);
        }
    }

    async function hdlChatroom2(_event: Event): Promise<void> {
        if (localStorage.getItem("username") != null) {
            document.getElementById("info")!.setAttribute("style", "display:none");
            let url: string = "https://jiaies2020.herokuapp.com/";
            where = "chatroom2";
            url += where;
            
            let response: Response = await fetch(url);
            let msg: Messages[] = await response.json();

            setTimeout(hdlCreateChatbox, 5000, msg);
            
        }
    }

    // tslint:disable-next-line: typedef
    function hdlCreateChatbox(_msg: Messages[]) {

        let chatBox: HTMLDivElement = document.getElementById("chatbox") as HTMLDivElement;

        for (let i: number = 0; i < _msg.length; i++) {
            let row: HTMLDivElement = document.createElement("div");  
            row.setAttribute("class", "row");

            let div: HTMLDivElement = document.createElement("div");
            row.appendChild(div);              
            
            let h4: HTMLHeadingElement = document.createElement("h4");                  //Name
            div.appendChild(h4).innerHTML = _msg[i].username;

            if (_msg[i].username == currentUser) {
                div.setAttribute("class", "messageByMe");
                let deletebttn: HTMLSpanElement = document.createElement("span");      
                div.appendChild(deletebttn).innerHTML = "x";
                //deletebttn.addEventListener("click", hdlDeleteMsg);
            }
            else 
                div.setAttribute("class", "messageByOthers");

            let description: HTMLParagraphElement = document.createElement("p");        //Nachricht
            div.appendChild(description).innerHTML = _msg[i].message;

            chatBox.appendChild(row);
        }
        chatBox.scrollTop = chatBox.scrollHeight;
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
    }

    function hdlLogout(_event: Event): void {
        localStorage.clear();
        window.location.href = "Login.html";
    }

}