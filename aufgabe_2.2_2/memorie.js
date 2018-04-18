/*
Aufgabe: Nr.2.2
Name: Lina-Maria Straub
Matrikel: 257767
Datum: 18.04.2018

(Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.) Der TS Teil wurde durch Vergleichen
der Abgaben mehrerer Kommilitonen (Marco Bohn, Sina Seiffert) verfasst und verstanden.

*/
/*hier alle karten inhalte (Array) und die dazu geh�rigen zust�nde mit leerem Array */
var memorie;
(function (memorie) {
    var karten_inhalt = ["Reh", "Maus", "Hund", "Ele", "Eule", "Igel", "Wal", "Tiger", "Laus", "Ente"];
    var karten_offen = []; /*das Array hier leer da karten_zustand hier dann sichtbar machen*/
    var karten_zustand = ["verdeckt", "genommen", "sichtbar"];
    /* HAUPTPROGRAMM*/
    /*Anzahl der Spieler anzeigen und ausw�hlen lassen bevor das Spiel beginnt
        Promt ist ein Dialogfenster mit Eingabefunktion
        Die parseInt Funktion konvertiert das erste Argument zu einem String,
        analysiert diesen und gibt eine ganze Zahl zur�ck*/
    function spieler_eingang() {
        var spieler_eingabe = prompt("Spieleranzahl zwischen 1 und 4 Spielern w�hlen");
        var spieler = parseInt(spieler_eingabe);
        return spieler;
    }
    /*Anzahl der Karten anzeigen und ausw�hlen lassen bevor das Spiel beginnt*/
    function kartenanzahl_eingang() {
        var kartenpaaranzahl_eingabe = prompt("Kartenpaaranzahl zwischen 5 und 10 w�hlen");
        var kartenpaaranzahl = parseInt(kartenpaaranzahl_eingabe);
        return kartenpaaranzahl;
    }
    var spieler = spieler_eingang();
    var anzahl = kartenanzahl_eingang();
    /* Karten Verdoppeln da im Array karten_inhalt nur einmal Vorhanden  */
    function kartenanzahl_doppelt(i) {
        for (var n = 1; n <= i; n++) {
            var inhalt = karten_inhalt[0];
            karten_offen.push(inhalt);
            karten_offen.push(inhalt);
            var entfernen = karten_inhalt.splice(0, 1);
        }
    }
    /* Spieler�bersicht   */
    function spieler_erstellen(_spieler) {
        var node = document.getElementById("spielerbereich");
        var childNodeHTML;
        for (var z = 1; z <= _spieler; z++) {
            childNodeHTML = "<div class='spielerbereich" + z + "'>";
            childNodeHTML += "Spieler " + z; /*Spieler z = Spieler1 Spieler2 Spieler3 Spieler4*/
            childNodeHTML += "<p> Punkte: </p>"; /*Punktanzahl unter den Spielern*/
            childNodeHTML += "</div>";
            node.innerHTML += childNodeHTML;
        }
    }
    /* Erstellen der Karten mit unterschiedlichem Status */
    function karten_erstellen(_anzahl) {
        var node = document.getElementById("spielbrett");
        var childNodeHTML;
        var n = 0;
        for (var n_1 = 0; n_1 < (_anzahl * 2); n_1++) {
            var min = 0;
            var max = (karten_offen.length * 2);
            var gemischt = Math.floor(Math.random() * karten_offen.length); /*Math-floor: Rundet eine Zahl auf eine ganze Zahl ab.*/
            /*Math.random: Gibt eine Pseudozufallszahl zwischen 0 und 1 zur�ck.*/
            childNodeHTML = "<div class='karte" + zustand_zufall() + "' id='Karte" + n_1 + "'>"; /*um CSS anzuwenden mit n hier die kartenzahl Karte0, Karte1...*/
            childNodeHTML += karten_offen[gemischt];
            childNodeHTML += "</div>";
            node.innerHTML += childNodeHTML;
            var content = karten_offen[gemischt];
            var entfernen = karten_offen.splice(gemischt, 1);
            n_1++;
        }
    }
    /*Zustand der Karten festlegen wie oben im namespace & karten_zustand genannt */
    function zustand_zufall() {
        var zufall_kartenzustand = Math.random();
        if (zufall_kartenzustand <= .5) {
            return "verdeckt";
        }
        else if (zufall_kartenzustand > .5 && zufall_kartenzustand <= .75) {
            return "genommen";
        }
        else if (zufall_kartenzustand > .75) {
            return "sichtbar";
        }
    }
    function memorie_komplett() {
        kartenanzahl_doppelt(anzahl);
        karten_erstellen(anzahl);
        spieler_erstellen(spieler);
    }
    window.addEventListener("load", memorie_komplett);
})(memorie || (memorie = {}));
//# sourceMappingURL=memorie.js.map