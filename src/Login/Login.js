let login1;
/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
class Login {
    /**
     * Konstruktor
     * @param {App} app Zentrale Instanz der App-Klasse
     */
    constructor(app) {
        this._app = app;
    }

    /**
     * Seite anzeigen. Wird von der App-Klasse aufgerufen.
     */
    async show() {
        // Anzuzeigenden Seiteninhalt nachladen
        let html = await fetch("Login/Login.html");
        let css = await fetch("Login/Login.css");

        if (html.ok && css.ok) {
            html = await html.text();
            css = await css.text();
        } else {
            console.error("Fehler beim Laden des HTML/CSS-Inhalts");
            return;
        }

        // Seite zur Anzeige bringen
        let pageDom = document.createElement("div");
        pageDom.innerHTML = html;



        this._app.setPageCss(css);
        this._app.setPageContent(pageDom.querySelector("main"));

        document.getElementById('login').addEventListener("click",login);

        login1=this;
    }


}

function login(){
let benutzername = document.getElementById('textfeldBenutzername').value;
let passwort = document.getElementById('textfeldPasswort').value;

 if(login1._app.database.checkLogin(benutzername,passwort)){
   window.location.href="#/uebersicht/";

 }else {

   alert("Falsche Anmeldedaten");
 }

}
