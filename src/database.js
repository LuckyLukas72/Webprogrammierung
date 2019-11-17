"use strict";

/**
 * Klasse Database: Kümmert sich um die Datenhaltung der App
 *
 * Diese Klasse beinhaltet alle Datensätze der App. Entgegen dem Namen handelt
 * es sich nicht wirklich um eine Datenbank, da sie lediglich ein paar statische
 * Testdaten enthält. Ausgefeilte Methoden zum Durchsuchen, Ändern oder Löschen
 * der Daten fehlen komplett, könnten aber in einer echten Anwendung relativ
 * einfach hinzugefügt werden.
 */
class Database {
    /**
     * Konstruktor.
     */
    constructor() {
        this._data = [
            {
                benutzer:    "Raffael",
                passwort:    "1234",

            },{
                benutzer:    "Lukas",
                passwort:    "5678",

            },
        ];
    }

    checkLogin (benutzer,passwort){

      let flag = false;
      this._data.forEach(

        e=>{
          if(e.benutzer === benutzer && e.passwort === passwort)
          flag = true;
          }
      );
      return flag;
    }

}
