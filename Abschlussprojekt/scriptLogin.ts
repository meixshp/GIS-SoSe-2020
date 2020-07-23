namespace Chatrooms {

    let loginbttn: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("login");
    loginbttn.addEventListener("click", hdlLoginButton);

    let registerbttn: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("register");
    registerbttn.addEventListener("click", hdlRegisterButton);

    async function hdlLoginButton(_event: Event): Promise<void> {           //Login
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://jiaies2020.herokuapp.com/";
        //let url: string = "http://localhost:8100/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "login" + "?" + query.toString();
        
        let userLogin: Response = await fetch(url);
        let userLoginString: string =  await userLogin.text();

        if (userLoginString == "true") {    //wenn Nutzername vorhanden ist und Passwort stimmt
            let usernameStr: string = (<HTMLInputElement><unknown>document.getElementById("username")).value; 
            localStorage.clear();
            localStorage.setItem("username", usernameStr);         //Usernamen im LocalStorage speichern
            window.location.href = "Chatrooms.html";
        }
        else 
            alert("Der Nutzername oder das angegebene Passwort ist falsch.");
    }

    async function hdlRegisterButton(_event: Event): Promise<void> {        //Registrierung
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://jiaies2020.herokuapp.com/";
        //let url: string = "http://localhost:8100/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "register" + "?" + query.toString();      

        if (formData.get("password")!.toString().length > 2 && formData.get("username")!.toString().length > 2) {   //beides soll mind. 3 Zeichen haben (damit kein Leerzeichen)
            let userRegister: Response = await fetch(url);
            let userRegisterString: string = await userRegister.text();

            if (userRegisterString == "true") {
              console.log("Erfolgreiche Registrierung!");
              alert("Deine Registrierung war erfolgreich!");
            }
            else
                alert("Der Nutzername ist schon vergeben.");
        }
        else
            alert("Dein Nutzername bzw. Passwort muss mindestens 3 Zeichen beinhalten.");
    }
}