/*
Aufgabe: Nr.3
Name: Lina-Maria Straub
Matrikel: 257767
Datum: 22.04.2018

Der TS Code von Aufgabe 2 orientiert sich gr��tenteils an dem von Marco Bohn. Er wurde
interpretiert und verstanden

*/
/*hier alle karten inhalte (Array) und die dazu geh�rigen zust�nde mit leerem Array */
var memorie;
(function (memorie) {
    window.addEventListener("load", memorie_komplett); //evtl auch kein window 
    /*listener
        Das Objekt, welches eine Benachrichtigung erh�lt
        Das load Ereignis wird ausgel�st, sobald eine Ressource
        und die von ihr abh�ngigen Ressourcen das Laden beendet haben.*/
    var karten_inhalt = ["Reh", "Maus", "Hund", "Ele", "Eule", "Igel", "Wal", "Tiger", "Laus", "Ente"];
    var karten_offen = []; /*das Array hier leer da karten_zustand hier dann sichtbar machen*/
    var karten_zustand = ["verdeckt", "genommen", "sichtbar"];
    /*neue Variablen f�r die Karten, welche dann immer eine eigene ID haben
    2 IDs da ja auch 2 Karten f�r insgesamt einen Spielzug, um deren Inhalt dann zu vergleichen
    any (um selbst typ auszusuchen)*/
    //KEIN ANY!
    var idKarte1;
    var idKarte2;
    /*neue Variablen f�r die Klassen der karten*/
    var classKarte1;
    var classKarte2;
    /* variable Conter, der z�hlt wie viele Karten offen sind*/
    var zaehler_counter = 0;
    //neue Arrays f�r die erziehlte Punktezahl der Spieler sp�ter abzuspeichern
    var spieler_eingabe = []; //welche Variablenbezeichnung????
    var punkteanzahl = [0, 0, 0, 0,]; //Punktestand vorinstalliert auf 0.
    function memorie_komplett() {
        kartenanzahl_doppelt(anzahl);
        karten_erstellen(anzahl);
        spieler_erstellen(spieler);
    }
    //Neue Funktion f�r das Event
    window.addEventListener("click", eventfunct);
    function eventfunct(_event) {
        var target = _event.target;
        console.log(_event);
        if (zaehler_counter == 0) {
            document.getElementById(target.id).classList.remove("verdeckt");
            classKarte1 = target.className;
            idKarte1 = target.id;
            document.getElementById(target.id).classList.add("sichtbar");
            zaehler_counter++;
        }
        else if (zaehler_counter == 1) {
            document.getElementById(target.id).classList.remove("verdeckt");
            classKarte2 = target.className;
            idKarte2 = target.id;
            document.getElementById(target.id).classList.add("sichtbar");
            console.log(zaehler_counter);
            //Timerfunktion, wie lange es dauert bis sich die Karten wieder umdrehen und die verschiednen F�lle
            //setTimeout ist ein fester begriff
            //Keine ANONYMEN Funktionen!!! VL anschauen
            setTimeout(function () {
                // hier werden die Namen der CSS-Klassen der angeklickten Karten verglichen, nicht die Inhalte. Sinnvoll?
                if (classKarte1 == classKarte2) {
                    document.getElementById(idKarte1).classList.remove("sichtbar");
                    document.getElementById(idKarte2).classList.remove("sichtbar");
                    document.getElementById(idKarte1).classList.add("genommen");
                    document.getElementById(idKarte2).classList.add("genommen");
                }
                else {
                    document.getElementById(idKarte1).classList.remove("sichtbar");
                    document.getElementById(idKarte2).classList.remove("sichtbar");
                    document.getElementById(idKarte1).classList.add("verdeckt");
                    document.getElementById(idKarte2).classList.add("verdeckt");
                }
                /*Verbessern aber wie..:Es wird also auf jeden Fall die Klasse "sichtbar" entfernt, daher sollten die Anweisungen hierzu nicht in der Fallunterscheidung auftauchen
               Es ist au�erdem wenig elegant achtmal getElementById zu schreiben...*/
            }, 2000);
            zaehler_counter = 0;
        }
    }
    /* HAUPTPROGRAMM*/
    /*Anzahl der Spieler anzeigen und ausw�hlen lassen bevor das Spiel beginnt
        Promt ist ein Dialogfenster mit Eingabefunktion
        Die parseInt Funktion konvertiert das erste Argument zu einem String,
        analysiert diesen und gibt eine ganze Zahl zur�ck*/
    function spieler_eingang() {
        var spieler_eingabe = prompt("Spieleranzahl zwischen 1 und 4 Spielern w�hlen");
        var spieler = parseInt(spieler_eingabe);
        if (spieler >= 1 && spieler <= 4) {
            return spieler;
        }
        else {
            alert("nur eine Zahl zwischen 1 und 4");
            spieler_eingang();
        }
    }
    /*Anzahl der Karten anzeigen und ausw�hlen lassen bevor das Spiel beginnt*/
    function kartenanzahl_eingang() {
        var kartenpaaranzahl_eingabe = prompt("Kartenpaaranzahl zwischen 5 und 10 w�hlen");
        var kartenpaaranzahl = parseInt(kartenpaaranzahl_eingabe);
        if (kartenpaaranzahl >= 5 && kartenpaaranzahl <= 10) {
            return kartenpaaranzahl;
        }
        else {
            alert("nur eine Zahl zwischen 5 und 10");
            kartenanzahl_eingang();
        }
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
        return "verdeckt";
    }
})(memorie || (memorie = {}));
//# sourceMappingURL=memory3.js.map