/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
class Casino {
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
        let html = await fetch("ReglementCasino/casino.html");
        let css = await fetch("ReglementCasino/style.css");

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

        $('#coin').bind("webkitAnimationEnd", myEndFunction);

        $('#coin').bind("animationend", myEndFunction);
          kontostand = 50;
          showBudget();

    }


}

/**$( document ).ready(function() {



});

*/

function myEndFunction() {

    if(result===user_color){
       alert("Gewonnen");

       kontostand += $('#commitment').val() * 2;

       $('#red').attr("disabled", false);
       $('#black').attr("disabled", false);
    }else{
        alert("Verloren");
        $('#red').attr("disabled", false);
        $('#black').attr("disabled", false);
    }

    showBudget();

    $('#red').attr("disabled", false);
    $('#black').attr("disabled", false);
}
var user_color;
var result;
var kontostand;
var euro = "€";


function coinflip(color) {
  if(kontostand > 0 && $('#commitment').val() > 0 && kontostand >= $('#commitment').val() ){
    $('#black').attr("disabled", true);
    $('#red').attr("disabled", true);

    kontostand -= $('#commitment').val()

    result = getRandomInt(2);

    $('#coin').removeClass();

    setTimeout(function(){
        if(result === 0){
            $('#coin').addClass('heads');
            console.log('it is head');
        }
        else{
            $('#coin').addClass('tails');
            console.log('it is tails');
        }
    }, 100);
    user_color = color;
  }
  else{
    if(kontostand <= 0){
    alert("Sie haben leider kein Guthaben mehr.");
    }
    else if (kontostand < $('#commitment').val()) {
      alert("Bitte niedrigeren Einsatz eingeben");
    }
    else{
      alert("Bitte einen Betrag größer als 0 eingeben.");
    }
  }
}

function showBudget(){
 $('#budget').html(kontostand + euro);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
