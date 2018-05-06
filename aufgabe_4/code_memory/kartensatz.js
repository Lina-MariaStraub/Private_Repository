var memory_4;
(function (memory_4) {
    memory_4.decks = {}; //Objekt
    function populateDecks() {
        //deck 1 mit Zahlen
        memory_4.decks["zahlen"] = {
            name: "zahlen",
            inhalt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            farbe: "green",
            schrift: "Calibri",
            size: 55,
            schriftfarbe: "white"
        };
        //deck 2 mit Buchstaben
        memory_4.decks["buchstaben"] = {
            name: "buchstaben",
            inhalt: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "M", "K", "L"],
            farbe: "red",
            schrift: "Times New Roman",
            size: 40,
            schriftfarbe: "white"
        };
        //deck 3 mit Farben
        memory_4.decks["Farben"] = {
            name: "farben",
            inhalt: ["BLAU", "ROT", "GELB", "WEISS", "ROSA", "ORANGE", "SCHWARZ", "LILA", "BUNT", "CYAN", "RGB", "GRAU", "SILBER", "GOLD"],
            farbe: "blue",
            schrift: "Arial",
            size: 25,
            schriftfarbe: "white"
        };
    }
    memory_4.populateDecks = populateDecks;
})(memory_4 || (memory_4 = {}));
//# sourceMappingURL=kartensatz.js.map