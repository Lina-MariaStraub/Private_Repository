/*Aufgabe: (Aufgabe 4)
        Name: Lina-Maria Straub
        Matrikel: (257767)
        
        Datum: (25.04.2018)
        Dieser Code enspricht zum Gro�teil dem Code von Lisa J�hn.
        Um mich verteidigen zu k�nnen habe ich ihn interpretiert und habe ihn verstanden*/
var Memory_3;
(function (Memory_3) {
    var anzahlSpieler = 0; //Variable f�r die Anzahl der Spieler um im Popup Anzahl der Spieler von 1-4 zu w�hlen
    var anzahlKartenpaare = 0; //Variable f�r die Kartenanzahl um im Popup die Anzahl der Kartenpaare zu w�hlen
    var offeneKarten = []; //leeres Array, hier landen die 2 angeklickten Karten und hier vergleich ob sie gleich sind
    var counter = 0; //Variable counter anlegen, damit nur 2 Karten aufgedeckt werden
    var l = 0; //Variable l f�r die sp�tere Gratulation erstellen, pr�ft ob alle Karten genommen wurde (l==anzahlKartenpaare)
    var nehmeKlicksAn = true; //Klick auf Karte aber nur bei verdeckt m�glich und
    // true wenn nur 0 oder 1 Karte angeklickt/ bei 2 angeklickten false das keine Weitere mehr angeklickt werden kann
    var kartenInhalt = ["Bunt", "Rot", "Gelb", "Blau", "Lila", "Schwarz", "Grau", "Rosa", "Braun", "Orange"]; //Karten durch Array mit Inhalt f�llen
    var kartenArray = []; //leeres Array, damit hier sp�ter Karten abgespeichert werden k�nnen /zwischengespeichert die Karten hier
    var spieler = []; //Array um Anzahl der Spieler abzuspeichern
    var punktezahl = [0, 0, 0, 0]; //Array um Punktezahl abzuspeichern
    //Punktestand = 0, ist vordefiniert, da Spieler anfangs ja noch keine Punkte haben
    window.addEventListener("click", init); //window.addEventListener wird ausgef�hrt sobald ein Klick (durch funktion init) ausgef�hrt wird
    //-----------------------------------------------------------------------------Funktion erstellen f�r das Event und Counter f�rs z�hlen, wie viele Karten offen sind
    function init(_event) {
        var target = _event.target;
        console.log(_event); //Konsolenausgabe
        if (target.classList.contains("verdeckt") && nehmeKlicksAn) {
            //nehmeKlicksAn true wenn 'verdeckte' Karte
            if (counter < 2) {
                target.classList.remove("verdeckt"); // dann verschwindet 'verdeckt'e Karte und Karte wird aufgedeckt
                offeneKarten.push(target); //angeklickte Karte ('offen') wird in offeneKarten Array gepusht(siehe push) target=ziel
            }
            counter++; //Counter wird hochgez�hlt / vorher counter<2 jetzt counter==2
            if (counter == 2) {
                nehmeKlicksAn = false; //2 Klicks sind schon da. deswegen false. keine weiteren Klicks
                counter = 0; //Counter wird zur�ck auf 0 gesetzt (neue Spielrunde)
                //(Gleichheit der 2 Karten pr�fen) if Bedingung wird in jedem Spielzug abgefragt ob beide Karten gleich sind
                if (offeneKarten[0].innerText === offeneKarten[1].innerText) {
                    //�berpr�fung ob die Karten gleich sind
                    setTimeout(function () {
                        offeneKarten[0].classList.add("genommen"); //Karte [0] wird genommen / Array offeneKarten immer nur mit den 2 Karten 'voll' dann wieder gelert
                        offeneKarten[1].classList.add("genommen"); //Karte [1] wird genommen
                        offeneKarten = []; //leeren des Arrays offeneKarten, da Spielzug zuende / im n�chsten Spielzug wieder 2 karten drinnen
                        nehmeKlicksAn = true; //neuer Spielzug. 2 Klicks werden wieder angenommen und nur wenn karte 'verdeckt' da dann true
                        if (document.getElementsByClassName("verdeckt").length == 0) {
                            //sprich: verdeckt.length==0  
                            //dann: Spiel vorbei
                            alert("Gl�ckwunsch, du hast gewonnen!"); //und: Gratulationsbox erscheint                    
                        }
                    }, 2000); //2000 = die 2 sekunden in denen Karten von Spielfl�che entfernt werden
                }
                else {
                    setTimeout(function () {
                        //Wenn die Karten nicht gleich sind drehen sie sich wieder um
                        offeneKarten[0].classList.add("verdeckt"); //Karte [0] wird verdeckt
                        offeneKarten[1].classList.add("verdeckt"); //Karte [1] wird verdeckt
                        offeneKarten = []; //leeren des Arrays offeneKarten, da Spielzug zuende
                        nehmeKlicksAn = true; //neuer Spielzug. 2 Klicks werden wieder angenommen
                    }, 2000); //2000 = die 2 sekunden in denen Karten von Spielfl�che entfernt werden
                }
            }
        }
    }
    function randomState() {
        return "verdeckt"; //Alle Karten sind umgedreht/'verdeckt'
    }
    function mischenKarten() {
        //die Funktion unten im spielfeldErzeugen aufrufen!
        var i = kartenArray.length; //Variable i wird definiert & ist gleich gro� wie die L�nge des kartenArray
        var j = 0; //Variable j wird definiert mir der Zahl 0
        var temp = ""; //Variable temp wird definiert als string und ohne Textinhalt
        while (--i > 0) {
            // (--i) wird um 1 heruntergez�hlt und muss gr��er 0 sein
            //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf
            j = Math.floor(Math.random() * (i + 1)); //f�r Zuf�lligkeit
            temp = kartenArray[j]; //ohne Textinhalt =0
            kartenArray[j] = kartenArray[i];
            kartenArray[i] = temp; //temp ist Variable als string ohne Textinhalt
        }
    }
    function spielfeldErzeugen() {
        var node = document.getElementById("Spielfeld"); //Aufruf der ID im Html Dokument
        mischenKarten(); //Funktion von oben'mischenKarten' wird hier aufgerufen, damit bei jedem Spiel die Karten auch gemischt werden
        var childNodeHTML = ""; //HTML string
        childNodeHTML += "<h2>Memory</h2>"; //�berschrift h2 durch ts im html erzeugen
        childNodeHTML += "<div>"; //Div erzeugen
        for (var i = 0; i < kartenArray.length; i++) {
            //und: i kleiner als kartenarray.length
            //und: wird hochgez�hlt
            //Div �ffnen
            childNodeHTML += "<div id = " + i + " attr = " + i + " class = ' "; //"<div id = " + i durch +i hei�te jede id anders
            //divs bekommen ein Attribut zur Zuordnung der Inhalte und zum Verdecken
            childNodeHTML += kartenArray[i] + " " + randomState(); //Aufruf der Funktion randomState f�r den Status der Karte
            //alle in der funktion auf 'verdeckt' gesetzt
            childNodeHTML += " ' >";
            childNodeHTML += kartenArray[i]; //kartenArray wird aufgerufen / das Array, welches leer ist und dort die 2 Karten zwischengespeichert werden
            childNodeHTML += "</div>";
        }
        //Div schlie�en
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML; //Inhalt der Knoten mit childNodeHTML bef�llen   
        console.log(childNodeHTML); //Ausgabe auf die Konsole
    }
    //----------------------------------------------------------------------------------------------------------------------------Spieleranzeige erstellen
    function spielerInfo() {
        var node = document.getElementById("Spielerinfo"); //Aufruf der id "Spielerinfo" im Html Dokument auf das ts
        var childNodeHTML = ""; //HTML string mit leerem Inhalt
        childNodeHTML += "<div>"; //Div erzeugen f�r die spielerInfo
        for (var i = 0; i < spieler.length; i++) {
            //und: i kleiner spieler.length
            // i++ i wird hochgez�hlt
            childNodeHTML += "<div id=Spieler"; //Id "Spieler" wird erzeugt (untergeordnete id von Spielerinfo)
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spielername: "; //hier <p> um auch Spielernamen neben der Anzahl der Spieler anzugeben
            childNodeHTML += spieler[i];
            childNodeHTML += "</p>";
            childNodeHTML += "<p>Punktestand: "; //hier <p> um den Punktestand zu erzeugen
            childNodeHTML += punktezahl[i]; //um zugriff auf den PunktestandArray zu haben
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>"; //Div wird geschlossen
        node.innerHTML += childNodeHTML; //Inhalt der Knoten mit childNodeHTML bef�llen
        console.log(childNodeHTML); //Ausgabe auf die Konsole
    }
    function graduation() {
        if (l == anzahlKartenpaare) {
            alert("Gratualation, du hast gewonnen!"); //Alertbox erstellen f�r die Gratulation zum Spielende
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------Hauptfunktion wird erzeugt
    function main() {
        console.log("main"); //Ausgabe auf die Konsole
        //Funtion f�r die Spielerabfrage erstellen
        var i = true; //Variable i definieren,, wenn i wahr ist sprich Anzahl der Spieler bei 1-4
        while (i) {
            anzahlSpieler = parseInt(prompt("Bitte w�hlen Sie zwischen 1 und 4 Spielern"), 10); //Popup f�r SPIELER_ANZEIGE---------
            //10 steht f�r Dezimalsystem
            if (anzahlSpieler >= 1 && anzahlSpieler <= 4) {
                i = false; //Ansonsten ist i unwahr
            }
        }
        for (var i_1 = 0; i_1 < anzahlSpieler; i_1++) {
            //Variable i wird definiert mit i=0
            //i kleiner als anzahlSpieler
            //i++ i wird hochgez�hlt
            spieler[i_1] = prompt("Bitte Spielernamen " + (i_1 + 1) + " eingeben"); //Popup f�r Namen der Spieler wird erzeugt
            //bei mehreren Spielern (i+1) wird i hochgez�hlt u der name des n�chsten Spielers wird abgefragt
            if (spieler[i_1] == null) {
                spieler[i_1] = "Anonymus"; //Name des Spielers
            }
        }
        //Kartenpaarabfrage erstellen
        i = true; //i wird als wahr definiert (also 1-4 Spieler) dann erscheint Kartenabfrage
        while (i) {
            anzahlKartenpaare = parseInt(prompt("Bitte w�hlen Sie zwischen 5 und 10 Kartenpaaren"), 10); //Popup f�r Kartenpaar Abfrage
            //10 steht f�r Dezimalsystem
            if (anzahlKartenpaare >= 5 && anzahlKartenpaare <= 10) {
                i = false; //Ansonsten ist i unwahr
            }
        }
        //Schleife f�r die Kartenpaare erstellen& Verdopplung der Kartenpaare 
        for (var i_2 = 0; i_2 < anzahlKartenpaare; i_2++) {
            //i kleiner als anzahlKartenpaare u i++ z�hl i hoch
            //Karteninhalt wird verdoppelt, Karten werden verdoppelt/angeheftet
            kartenArray.push(kartenInhalt[i_2]); //karteninhalt wird verdoppelt und Karten verdoppelt u angeheftet
            kartenArray.push(kartenInhalt[i_2]);
        }
        spielfeldErzeugen(); //Spielbrett erzeugen (Funktion spielfeldErzeugen hier ausgef�hrt)
        spielerInfo(); //Spielerinfo erzeugen  (Funktion spielerInfo hier ausgef�hrt)
    }
    document.addEventListener("DOMContentLoaded", main); //AddEventListener-Main() wird ausgef�hrt sobald DOM vollst�ndig geladen ist
})(Memory_3 || (Memory_3 = {}));
//# sourceMappingURL=memory4.js.map