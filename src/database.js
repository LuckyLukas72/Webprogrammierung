"use strict";

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

            },{
                benutzer:    "Gerd",
                passwort:    "0000",

            },{
                benutzer:    "Alina",
                passwort:    "1111",

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
