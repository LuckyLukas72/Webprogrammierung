



/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
class ErscheintB {
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
        let html = await fetch("Erscheint_bald_Seite/erscheint_bald_seite_BlackJack.html");
        let css = await fetch("Erscheint_bald_Seite/erscheint_bald_Seite_BlackJack.css");

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


var endDatum = new Date("Aug 16, 2020 00:00:00").getTime();


var aktualisierung = setInterval(function() {

  var jetzt = new Date().getTime();


  var differenz = endDatum - jetzt;

  var tage = Math.floor(differenz / (1000 * 60 * 60 * 24));
  var stunden = Math.floor((differenz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuten = Math.floor((differenz % (1000 * 60 * 60)) / (1000 * 60));
  var sekunden = Math.floor((differenz % (1000 * 60)) / 1000);

  document.getElementById('count').innerHTML = tage + "Tage " + stunden + "Stunden "
  + minuten + "Minuten " + sekunden + "Sekunden ";

  if (differenz < 0) {
    clearInterval(aktualisierung);
    document.getElementById("count").innerHTML = "ES IST SO WEIT !!!";
  }
}, 1000);
