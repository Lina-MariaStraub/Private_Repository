/*
Aufgabe: Nr.2.2
Name: Lina-Maria Straub
Matrikel: 257767
Datum: 18.04.2018

(Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.) Der TS Teil wurde durch Vergleichen 
der Abgaben mehrerer Kommilitonen (Marco Bohn, Sina Seiffert) verfasst und verstanden.

*/

/*hier alle karten inhalte (Array) und die dazu gehörigen zustände mit leerem Array */
namespace memorie {
    let karten_inhalt: string[] = ["Reh", "Maus", "Hund", "Ele", "Eule", "Igel", "Wal", "Tiger", "Laus", "Ente"];
    let karten_offen: string[] = [] /*das Array hier leer da karten_zustand hier dann sichtbar machen*/
    let karten_zustand: string[] = ["verdeckt", "genommen", "sichtbar"];


    /* HAUPTPROGRAMM*/

    /*Anzahl der Spieler anzeigen und auswählen lassen bevor das Spiel beginnt
        Promt ist ein Dialogfenster mit Eingabefunktion
        Die parseInt Funktion konvertiert das erste Argument zu einem String, 
        analysiert diesen und gibt eine ganze Zahl zurück*/
    function spieler_eingang(): number {
        let spieler_eingabe: string = prompt("Spieleranzahl zwischen 1 und 4 Spielern wählen");
        let spieler: number = parseInt(spieler_eingabe);

        return spieler;
    }

    /*Anzahl der Karten anzeigen und auswählen lassen bevor das Spiel beginnt*/
    function kartenanzahl_eingang(): number {
        let kartenpaaranzahl_eingabe: string = prompt("Kartenpaaranzahl zwischen 5 und 10 wählen");
        let kartenpaaranzahl: number = parseInt(kartenpaaranzahl_eingabe);

        return kartenpaaranzahl;
    }

    let spieler: number = spieler_eingang();
    let anzahl: number = kartenanzahl_eingang();


    /* Karten Verdoppeln da im Array karten_inhalt nur einmal Vorhanden  */
    function kartenanzahl_doppelt(i: number): void {
        for (let n: number = 1; n <= i; n++) {

            let inhalt: string = karten_inhalt[0];
            karten_offen.push(inhalt);
            karten_offen.push(inhalt);

            let entfernen = karten_inhalt.splice(0, 1);
        }
    }

    /* Spielerübersicht   */
    function spieler_erstellen(_spieler: number): void {
        let node: any = document.getElementById("spielerbereich");
        let childNodeHTML: string;

        for (let z: number = 1; z <= _spieler; z++) { /*_spieler greift bis auf das Eingabefeld vom Spieler zurück*/

            childNodeHTML = "<div class='spielerbereich" + z + "'>";
            childNodeHTML += "Spieler " + z; /*Spieler z = Spieler1 Spieler2 Spieler3 Spieler4*/
            childNodeHTML += "<p> Punkte: </p>"; /*Punktanzahl unter den Spielern*/
            childNodeHTML += "</div>";
            node.innerHTML += childNodeHTML;

        }

    }

    /* Erstellen der Karten mit unterschiedlichem Status */
    function karten_erstellen(_anzahl: number): void {
        let node: any = document.getElementById("spielbrett");
        let childNodeHTML: string;
        let n: number = 0;

        for (let n: number = 0; n < (_anzahl * 2); n++) { /*_anzahl 5 bis 10 mal 2*/
            let min: number = 0;
            let max: number = (karten_offen.length * 2);

            let gemischt: number = Math.floor(Math.random() * karten_offen.length); /*Math-floor: Rundet eine Zahl auf eine ganze Zahl ab.*/
                                                                               /*Math.random: Gibt eine Pseudozufallszahl zwischen 0 und 1 zurück.*/

            childNodeHTML = "<div class='karte" + zustand_zufall() + "' id='Karte" + n + "'>"; /*um CSS anzuwenden mit n hier die kartenzahl Karte0, Karte1...*/
            childNodeHTML += karten_offen[gemischt];
            childNodeHTML += "</div>";
            node.innerHTML += childNodeHTML;

            let content: string = karten_offen[gemischt];

            let entfernen = karten_offen.splice(gemischt, 1);

            n++;

        }

    }


    /*Zustand der Karten festlegen wie oben im namespace & karten_zustand genannt */
    function zustand_zufall(): string {
        let zufall_kartenzustand: number = Math.random();
        if (zufall_kartenzustand <= .5) { /*zu 50% verdeckt */
            return "verdeckt";
        } else if (zufall_kartenzustand > .5 && zufall_kartenzustand <= .75) { /*zu 25% schon genommen worden */
            return "genommen";
        } else if (zufall_kartenzustand > .75) { /*zu 25% sichtbar */
            return "sichtbar";
        }
    }

    function memorie_komplett(): void { /*void..irgendetwas*/

        kartenanzahl_doppelt(anzahl);

        karten_erstellen(anzahl);

        spieler_erstellen(spieler);
    }

    window.addEventListener("load", memorie_komplett);
/*listener
    Das Objekt, welches eine Benachrichtigung erhält
    Das load Ereignis wird ausgelöst, sobald eine Ressource 
    und die von ihr abhängigen Ressourcen das Laden beendet haben.*/
}








