
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
