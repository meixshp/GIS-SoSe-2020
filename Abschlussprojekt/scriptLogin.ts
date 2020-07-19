namespace Chatrooms {

    let loginbttn: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("login");
    loginbttn.addEventListener("click", hdlLoginButton);

    let registerbttn: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("register");
    registerbttn.addEventListener("click", hdlRegisterButton);

    async function hdlLoginButton(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://jiaies2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "login" + "?" + query.toString();
        
        let userLogin: Response = await fetch(url);
        let userLoginString: string =  await userLogin.text();

        if (userLoginString == "true") { 
            let usernameStr: string = (<HTMLInputElement><unknown>document.getElementById("username")).value; 
            localStorage.clear();
            localStorage.setItem("username", usernameStr);
            window.location.href = "Chatrooms.html";
        }
        else 
            alert("Der Nutzername oder das angegebene Passwort ist falsch.");
    }

    async function hdlRegisterButton(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://jiaies2020.herokuapp.com/";
        if (formData.get("password") != "" || formData.get("password") !=  " ") {
            // tslint:disable-next-line: no-any
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            url += "register" + "?" + query.toString();      

            let userRegister: Response = await fetch(url);
            let userRegisterString: string = await userRegister.text();

            if (userRegisterString == "true") {
                console.log("Erfolgreiche Registrierung!");
                alert("Deine Registrierung war erfolgreich!");
            }
            else
                alert("Der Nutzername ist schon vergeben.");
        }
        else {
            alert("Bitte gebe ein Passwort ein.");
        }
    }
}