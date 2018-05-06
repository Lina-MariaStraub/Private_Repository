var memory_4;
(function (memory_4) {
    var anzahlSpieler = 0; //Variable f�r die Anzahl der Spieler um im Popup Anzahl der Spieler von 1-4 zu w�hlen
    memory_4.anzahlKartenpaare = 5; //Variable f�r die Kartenanzahl um im Popup die Anzahl der Kartenpaare zu w�hlen
    var offeneKarten = []; //leeres Array, hier landen die 2 angeklickten Karten und hier vergleich ob sie gleich sind
    var currentCardDeck = undefined; //Variable des momentanen Kartendecks, wenn keine Eingaben getätigt werden
    var counter = 0; //Variable counter anlegen
    var l = 0; //f�r gratulation
    var nehmeKlicksAn = true;
    var kartenArray = []; //leeres Array, damit hier sp�ter Karten abgespeichert werden k�nnen /zwischengespeichert die Karten hier
    var playerNames = []; //Arrays erstellen um  den punktezahl und Anzahl der Spieler später abzuspeichern
    //let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    var punktezahl = [0, 0, 0, 0]; //Array um Punktezahl abzuspeichern
    //Punktestand = 0, ist vordefiniert, da Spieler anfangs ja noch keine Punkte haben
    window.addEventListener("click", verarbeiteKlick); //window.addEventListener wird ausgef�hrt sobald ein Klick (durch funktion verarbeiteKlick) ausgef�hrt wird
    memory_4.populateDecks(); //Funktion populateDecks wird aufgerufen, damit spiel startet (funktion im interface)
    //-----------------------------------------------------------------------------------------------------------------------------------
    function verarbeiteKlick(_event) {
        var target = _event.target; //target ist kein div aber ich weise ihm ein Div zu (<HTMLDivElement>)
        console.log(_event); //Konsolenausgabe
        if (target.classList.contains("verdeckt") && nehmeKlicksAn) {
            //nehmeKlicksAn true wenn 'verdeckte' Karte
            if (counter < 2) {
                target.classList.remove("verdeckt"); // dann verschwindet 'verdeckt'e Karte und Karte wird aufgedeckt
                offeneKarten.push(target); //angeklickte Karte ('offen') wird in offeneKarten Array gepusht(siehe push) target=ziel
            } //in dem Array liegen immer nur die 2 angeklicken Karten, 
            //welche dort auf Gleichheit �berpr�ft und am Ende aus dem Array wieder genommen werden, welches dann wieder leer ist
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
                            alert("Glückwunsch, du hast gewonnen!"); //und: Gratulationsbox erscheint  
                        }
                    }, 2000); //2000 = die 2 sekunden in denen Karten von Spielfl�che entfernt werden
                }
                else {
                    setTimeout(function () {
                        offeneKarten[0].classList.add("verdeckt"); //Karte [0] wird verdeckt
                        offeneKarten[1].classList.add("verdeckt"); //Karte [1] wird verdeckt
                        offeneKarten = []; //leeren des Arrays offeneKarten, da Spielzug zuende
                        nehmeKlicksAn = true; //neuer Spielzug. 2 Klicks werden wieder angenommen
                    }, 2000); //2000 = die 2 sekunden in denen Karten von Spielfl�che entfernt werden
                }
            }
        }
    }
    //Funktion erstellen, damit alle Karten umgedreht sind beim Spielbeginn
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------
    function randomState() {
        return "verdeckt"; //Alle Karten sind umgedreht/'verdeckt'
    }
    memory_4.randomState = randomState;
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------
    function mischeKarten() {
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
    //------------------------------------------------------------------------------------------------------------------------------------------------------
    function spielfeldErzeugen() {
        var node = document.getElementById("Spielfeld"); //id spielfeld aus dem HTML wird aufgerufen
        mischeKarten(); //Funktion von oben'mischenKarten' wird hier aufgerufen, damit bei jedem Spiel die Karten auch gemischt werden
        var header = document.createElement("h2"); //element h2 im "spielfeld" erzeugen durch ts
        header.innerText = "Spielfeld"; //spielfeld als �berschrift
        node.appendChild(header);
        var spielFeld = document.createElement("div"); //das Spielfeld soll in ein div "gebunden" sein
        for (var i = 0; i < kartenArray.length; i++) {
            //und: i kleiner als kartenarray.length
            //und: wird hochgez�hlt
            var card = document.createElement("div"); //Karten sollen ein div sein
            card.id = i.toString(); //string
            card.setAttribute("attr", i.toString()); //Karte bekommt ein Attribut 
            card.classList.add(kartenArray[i]);
            card.classList.add(randomState());
            card.textContent = kartenArray[i]; //Karteninhalt wird im kartenArray gespeichert
            card.style.backgroundColor = currentCardDeck.farbe; //CSS wird definiert (Dynamische Erzeugung) 
            card.style.fontFamily = currentCardDeck.schrift; //aus DECK-> schrift (interface)
            card.style.fontSize = currentCardDeck.size + "px"; //fontSize soll im DECk bei size in px angegeben werden 
            card.style.color = currentCardDeck.schriftfarbe; //Schriftfarbe (FileDecks.ts)
            spielFeld.appendChild(card); //Var card an spielFeld geheftet als kind
        } //forschleife hier geschlossen
        node.appendChild(spielFeld); //Var spielFeld als kind  an Knoten geheftet
    } //Funktion spielfelderzeugen hier geschlossen
    //---------------------------------------------------------------------------------------------------------------------------unten Spielerinfo Anzeige
    function spielerInfo() {
        var node = document.getElementById("Spielerinfo"); //Aufruf der id "Spielerinfo" im Html Dokument auf das ts
        var childNodeHTML = ""; //HTML string mit leerem Inhalt
        childNodeHTML += "<div>"; //Div erzeugen f�r die spielerInfo
        //Schleife erstellen, i=0, i ist größer als die Länge des Spieler Arrays, i wird hochgezählt
        for (var i = 0; i < playerNames.length; i++) {
            //und: i kleiner spieler.length
            // i++ i wird hochgez�hlt
            childNodeHTML += "<div id=Spieler"; //Id "Spieler" wird erzeugt (untergeordnete id von Spielerinfo)
            childNodeHTML += i;
            childNodeHTML += ">"; //div ende 
            childNodeHTML += "<p>Spielername: "; //hier <p> um auch Spielernamen neben der Anzahl der Spieler anzugeben
            childNodeHTML += playerNames[i];
            childNodeHTML += "</p>";
            childNodeHTML += "<p>Punktestand: "; //hier <p> um den Punktestand zu erzeugen
            childNodeHTML += punktezahl[i]; //um zugriff auf den PunktestandArray zu haben
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>"; //Div wird geschlossen
        node.innerHTML += childNodeHTML; //Inhalt der Knoten mit childNodeHTML bef�llen
        console.log(childNodeHTML); //Ausgabe auf die Konsole
    } //ende funktion spielerInfo
    //---------------------------------------------------------------------------------------------------------------------------Gratulation am Ende des Spiels
    function gratulation() {
        if (l == memory_4.anzahlKartenpaare) {
            alert("Gl�ckwunsch, du bist der Gewinner!"); //Alertbox erstellen f�r die Gratulation zum Spielende
        }
    }
    //HAUPTFUNKTION----------------------------------------------------------------------------------------------------------------------------------------------
    function main() {
        var spielerAnzahl; //Variable f�r Spieleranzahl def. hier eine number
        //Variable collection als NodeListOfElement
        //NodeList Objekte sind Sammlungen von Knoten
        //Zugriff auf die id spieleranzahl und auf die inputs
        var sammlung = document.getElementById("spieleranzahl").getElementsByTagName("input");
        for (var i = 0; i < sammlung.length; i++) {
            //Spieleranzahl wird hochgez�hlt 
            if (sammlung[i].checked) {
                spielerAnzahl = i + 1; //Spieleranzahl hochz�hlen
                break; //Abbruch
            }
        }
        //--------------------------------------------------------------------------------------------------------------------------------------Eingabe Spielernamen
        sammlung = document.getElementById("name").getElementsByTagName("input"); //Zugriff auf die id name (aus HTML Spieler Namen)  und auf die inputs (aus HTML Spielernamen)
        for (var i = 0; i < sammlung.length; i++) {
            if (sammlung[i].value == "" && i == 0) {
                playerNames.push("NoName"); //Name wird gepusht /NoName tritt auf, wenn kein Spielername eingegeben wurde
            }
            else if (sammlung[i].value != "") {
                playerNames.push(sammlung[i].value);
            }
        } //Ende der for-schleife
        //-------------------------------------------------------------------------------------------------------------------------------------------Kartensatz
        sammlung = document.getElementById("kartensatz").getElementsByTagName("input"); //Auswahl des Kartensatzes, Zugriff auf die id kartensatz und auf die inputs
        if (currentCardDeck == undefined)
            currentCardDeck = memory_4.decks["zahlen"]; //dann erscheint Deck Zahlen
        populatekartenArray(currentCardDeck.inhalt); //Karten werden erzeugt
        spielfeldErzeugen(); //Spielbrett erzeugen 
        spielerInfo(); //Spielerinfo erzeugen
        document.getElementById("grundeinstellungen").remove(); //Starteinstellung wird nach der Einstellung gelöscht
    }
    memory_4.main = main; //ende export function main
    //---------------------------------------------------------------------------------------------------------------------------------------------------Kartenanzahl
    function onInputEvent(value) {
        document.getElementById("kartenpaare-label").innerText = value.toString(); //auf id kartenpaare-label wird zugegriffen u wert wird von number zum string
        memory_4.anzahlKartenpaare = value; //hier value jetzt string u nicht mehr number
    }
    memory_4.onInputEvent = onInputEvent;
    function populatekartenArray(karten) {
        for (var i = 0; i < memory_4.anzahlKartenpaare; i++) {
            kartenArray.push(karten[i]); //karten ins array gepusht
            kartenArray.push(karten[i]); //karten ins array gepusht
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------------------------
    function kartenSatzbearbeiten(element) {
        currentCardDeck = memory_4.decks[element.value];
        repopulateCardForm();
    }
    memory_4.kartenSatzbearbeiten = kartenSatzbearbeiten;
    function repopulateCardForm() {
        var kartenPaareElement = document.getElementById("kartenpaare"); //var kartenPaareElement soll als HTMLInputElement auf die ID kartenpaare zugreifen
        kartenPaareElement.max = currentCardDeck.inhalt.length.toString(); //max-l�nge der var ist l�nge der verschiedenen DECKS
        var maxWert = currentCardDeck.inhalt.length; //var maxWert ist L�nge des Inhalts der var curentCardDecks
        var momentanerWert = parseInt(kartenPaareElement.value); //var mementanerWert ist stringu wird zu ganzzahligen Zahl umgewandelt
        //Wenn der maxWert kleiner als der momentanerWert ist
        if (maxWert < momentanerWert) {
            kartenPaareElement.value = maxWert.toString(); //dann
        }
        document.getElementById("kartenpaare-label").innerText = kartenPaareElement.value; //�ndert sich der Slider u somit andre grundeinstellung
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------------Spieleranzahl und Namen
    function spielerAnzahlBearbeiten(element) {
        var spielerZahl = parseInt(element.value); //var spielerZahl ist string u wird zu ganzen Zahl umgewandelt
        for (var i = 1; i <= 4; i++) {
            var inputElement = document.getElementById("player" + i); //`player${i}`: Innerhalb eines String wird Javascripts aufgerufen, zur Bearbeitung  
            var labelElement = document.getElementById("player" + i + "-label");
            if (i <= spielerZahl) {
                inputElement.disabled = false; //false da nicht deaktiviertes Feld
                labelElement.style.opacity = "1"; //1 damit kein grauschleier und man erkennt das man hier reinschreiben kann
            }
            else {
                inputElement.disabled = true; //true da deaktiviertes Feld (dieser spieler spielt nicht
                labelElement.style.opacity = "0.5"; //deckkraft, wo man nichts mehr eintragen kann in grau
                inputElement.value = "";
            }
        }
    }
    memory_4.spielerAnzahlBearbeiten = spielerAnzahlBearbeiten;
})(memory_4 || (memory_4 = {}));
//# sourceMappingURL=memory4.js.map