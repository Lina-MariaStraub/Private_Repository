namespace memory_4 {

    export interface Deck {//Variablen dekalrieren

        name: string;
        inhalt: string[];//Inhalt ein array
        farbe: string;
        schrift: string;
        size: number;
        schriftfarbe: string;
    }
    export interface Decks {
        [deckname: string]: Deck;
    }
    export let decks: Decks = {} //Objekt

    export function populateDecks() {//hier alle decks festlegen
//deck 1 mit Zahlen
        decks["zahlen"] = {//deck zahlen mit anderen werten als deck buchstaben etc
            name: "zahlen",
            inhalt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            farbe: "green",
            schrift: "Calibri",
            size: 55,
            schriftfarbe: "white"
        };
//deck 2 mit Buchstaben
        decks["buchstaben"] = {
            name: "buchstaben",
            inhalt: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "M", "K", "L"],
            farbe: "red",
            schrift: "Times New Roman",
            size: 40,
            schriftfarbe: "white"
        };
//deck 3 mit Farben
        decks["Farben"] = {
            name: "farben",
            inhalt: ["BLAU", "ROT", "GELB", "WEISS", "ROSA", "ORANGE", "SCHWARZ", "LILA", "BUNT", "CYAN", "RGB", "GRAU", "SILBER", "GOLD"],
            farbe: "blue",
            schrift: "Arial",
            size: 25,
            schriftfarbe: "white"
        };
    }
}











