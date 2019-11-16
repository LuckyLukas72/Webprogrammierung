"use strict";

function myFunction() {
  var x = document.getElementById("meineNavigation");
  if (x.className === "Navigation") {
    x.className += "Responsive";
  } else {
    x.className = "Navigation";
  }
}

/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
class Uebersicht {
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
        let html = await fetch("Uebersichtsseite/Uebersicht.html");
        let css = await fetch("Uebersichtsseite/Uebersicht.css");

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
    }


}
