/*Aufgabe: (Aufgabe 3)
        Name: Lina-Maria Straub
        Matrikel: (257767)
        
        Datum: (25.04.2018)
        Dieser Code enspricht zum Großteil dem Code von Lisa Jähn. 
        Um mich verteidigen zu können habe ich ihn interpretiert und habe ihn verstanden*/


namespace Memory_3 {

    let anzahlSpieler: number = 0;//Variable für die Anzahl der Spieler

    let anzahlKartenpaare: number = 0;//Variable für die Kartenanzahl 

    let offeneKarten: HTMLElement[] = []; //leeres Array, hier landen die angeklickten karten und hier vergleich ob sie gleich sind

    let counter: number = 0;//Variable counter anlegen, damit nur 2 Karten aufgedeckt werden

    let l: number = 0; //Variable l für die spätere Gratulation erstellen

    let nehmeKlicksAn: boolean = true; //Klick auf Karte aber nur bei verdeckt möglich und
                                       // true wenn nur 0 oder 1 Karte angeklickt/ bei 2 angeklickten false das keine Weitere mehr angeklickt werden kann

    let kartenInhalt: string[] = ["Bunt", "Rot", "Gelb", "Blau", "Lila", "Schwarz", "Grau", "Rosa", "Braun", "Orange"];//Karten durch Array mit Inhalt füllen

    let kartenArray: string[] = [];//leeres Array, damit hier später Karten abgespeichert werden können /zwischengespeichert die Karten hier

    let spieler: string[] = [];//Array um Anzahl der Spieler abzuspeichern
    
    let punktezahl: number[] = [0, 0, 0, 0];//Array um Punktezahl abzuspeichern
                                            //Punktestand = 0, ist vordefiniert, da Spieler anfangs ja noch keine Punkte haben

    window.addEventListener( "click", init ); //window.addEventListener wird ausgeführt sobald ein Klick (durch funktion init) ausgeführt wird


    //-----------------------------------------------------------------------------Funktion erstellen für das Event und Counter fürs zählen, wie viele Karten offen sind

    function init( _event: Event ): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;

        console.log( _event );//Konsolenausgabe

        if ( target.classList.contains( "verdeckt" ) && nehmeKlicksAn ) {//Klasse 'verdeckt' (diese Karten) und Klick auf die muss angenommen werden
                                                                         //nehmeKlicksAn true wenn 'verdeckte' Karte

            if ( counter < 2 ) {//Wenn counter kleiner 2 :
                target.classList.remove( "verdeckt" );// dann verschwindet 'verdeckt'e Karte
                offeneKarten.push( target );//angeklickte Karte ('offen') wird in offeneKarten Array gepusht(siehe push) target=ziel
                                            //in dem Array liegen immer nur die 2 angeklicken Karten, 
                                            //welche dort auf Gleichheit überprüft und am Ende aus dem Array wieder genommen werden, welches dann wieder leer ist
            }

            counter++;//Counter wird hochgezählt / vorher counter<2 jetzt counter==2

            if ( counter == 2 ) {//Counter == 2

                nehmeKlicksAn = false;//Keine weiteren Klicks auf Karten mehr angenommen! da schon 2 Karten jetzt (2=2) angeklickt wurden

                counter = 0; //Counter wird zurück auf 0 gesetzt

                //if Bedingung wird in jedem Spielzug abgefragt ob beide Karten gleich sind
                if ( offeneKarten[0].innerText === offeneKarten[1].innerText ) {//offeneKarte0 ==offeneKarte1??
                                                                                //Überprüfung ob die Karten gleich sind

                    setTimeout(() => { //setTimeout Funktion für den Fall: Gleiches Kartenpaar super

                        offeneKarten[0].classList.add( "genommen" );//Karte [0] wird genommen / Array offeneKarten immer nur mit den 2 Karten 'voll' dann wieder gelert
                        offeneKarten[1].classList.add( "genommen" );//Karte [1] wird genommen

                        offeneKarten = []; //leeren des Arrays offeneKarten, da Spielzug zuende / im nächsten Spielzug wieder 2 karten drinnen

                        nehmeKlicksAn = true; //neuer Spielzug. 2 Klicks werden wieder angenommen und nur wenn karte 'verdeckt' da dann true

                        if ( document.getElementsByClassName( "verdeckt" ).length == 0 ) {//wenn keine Karte mehr in Klasse 'verdeckt'
                                                                                          //sprich: verdeckt.length==0  
                                                                                          //dann: Spiel vorbei
                           
                            alert( "Glückwunsch, du hast gewonnen!" )  //und: Gratulationsbox erscheint                    
                        }

                    }, 2000 ); //2000 = die 2 sekunden in denen Karten von Spielfläche entfernt werden
                }
                
                else {//andernfalls für den Fall: Karten sind nicht gleich 

                    setTimeout(() => {//setTimeout Funktion

                        //Wenn die Karten nicht gleich sind drehen sie sich wieder um

                        offeneKarten[0].classList.add( "verdeckt" );//Karte [0] wird verdeckt
                        offeneKarten[1].classList.add( "verdeckt" );//Karte [1] wird verdeckt

                        offeneKarten = [];//leeren des Arrays offeneKarten, da Spielzug zuende

                        nehmeKlicksAn = true;//neuer Spielzug. 2 Klicks werden wieder angenommen

                    }, 2000 );//2000 = die 2 sekunden in denen Karten von Spielfläche entfernt werden
                }
            }
        }
    }

    function randomState(): string { //--------------------------------------diese Funktion sorgt dafür, das alle Karten zum Spielbeginn 'verdeckt' sind

        return "verdeckt";//Alle Karten sind umgedreht/'verdeckt'
    }     

    function mischenKarten(): void {//-----------------------------------------shuffleFunktion, damit Karten immer unterschiedlich auf Spielfeld liegen
                                    //die Funktion unten im spielfeldErzeugen aufrufen!

        let i: number = kartenArray.length;//Variable i wird definiert & ist gleich groß wie die Länge des kartenArray

        let j: number = 0; //Variable j wird definiert mir der Zahl 0

        let temp: string = ""; //Variable temp wird definiert als string und ohne Textinhalt

        while ( --i > 0 ) {//variable i (wie oben genannt die Länge des kartenArray)
                           // (--i) wird um 1 heruntergezählt und muss größer 0 sein

            //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf

            j = Math.floor( Math.random() * ( i + 1 ) );//für Zufälligkeit
            temp = kartenArray[j];//ohne Textinhalt =0
            kartenArray[j] = kartenArray[i];
            kartenArray[i] = temp;//temp ist Variable als string ohne Textinhalt
        }
    }

    function spielfeldErzeugen(): void {//--------------------------------------------------------------------------Funktion zum erstellen des Spielfeldes

        let node: any = document.getElementById( "Spielfeld" );//Aufruf der ID im Html Dokument

        mischenKarten();//Funktion von oben'mischenKarten' wird hier aufgerufen, damit bei jedem Spiel die Karten auch gemischt werden

        let childNodeHTML: string = "";//HTML string

        childNodeHTML += "<h2>Memory</h2>"; //Überschrift h2 durch ts im html erzeugen

        childNodeHTML += "<div>";//Div erzeugen

        for ( let i: number = 0; i < kartenArray.length; i++ ) {//Schleife erstellen & i=0 
                                                                //und: i kleiner als kartenarray.length
                                                                //und: wird hochgezählt
            //Div öffnen

            childNodeHTML += "<div id = " + i + " attr = " + i + " class = ' ";//"<div id = " + i durch +i heißte jede id anders
                                                                               //divs bekommen ein Attribut zur Zuordnung der Inhalte und zum Verdecken

            childNodeHTML += kartenArray[i] + " " + randomState(); //Aufruf der Funktion randomState für den Status der Karte
                                                                   //alle in der funktion auf 'verdeckt' gesetzt
            childNodeHTML += " ' >";

            childNodeHTML += kartenArray[i];//kartenArray wird aufgerufen / das Array, welches leer ist und dort die 2 Karten zwischengespeichert werden
            childNodeHTML += "</div>";
        }

        //Div schließen

        childNodeHTML += "</div>"; 

        node.innerHTML += childNodeHTML;//Inhalt der Knoten mit childNodeHTML befüllen   

        console.log( childNodeHTML );//Ausgabe auf die Konsole
    }

    //----------------------------------------------------------------------------------------------------------------------------Spieleranzeige erstellen

    function spielerInfo(): void {//Funktion spielerInfo erstellen

        let node: any = document.getElementById( "Spielerinfo" );//Aufruf der id "Spielerinfo" im Html Dokument auf das ts

        let childNodeHTML: string = "";//HTML string mit leerem Inhalt

        childNodeHTML += "<div>";//Div erzeugen für die spielerInfo

        for ( let i: number = 0; i < spieler.length; i++ ) {//Schleife erstellen. i=0
                                                            //und: i kleiner spieler.length
                                                            // i++ i wird hochgezählt


            childNodeHTML += "<div id=Spieler";//Id "Spieler" wird erzeugt (untergeordnete id von Spielerinfo)
            childNodeHTML += i;
            childNodeHTML += ">";

            childNodeHTML += "<p>Spielername: ";//hier <p> um auch Spielernamen neben der Anzahl der Spieler anzugeben
            childNodeHTML += spieler[i];
            childNodeHTML += "</p>";
            
            childNodeHTML += "<p>Punktestand: ";//hier <p> um den Punktestand zu erzeugen

            childNodeHTML += punktezahl[i];//um zugriff auf den PunktestandArray zu haben
            childNodeHTML += "</p></div>";
        }

        childNodeHTML += "</div>";//Div wird geschlossen

        node.innerHTML += childNodeHTML;//Inhalt der Knoten mit childNodeHTML befüllen

        console.log( childNodeHTML );//Ausgabe auf die Konsole
    }

    function graduation(): void {//----------------------------------------------------------------------------------funktion für die Gratulation erstellen

        if ( l == anzahlKartenpaare ) {//Prüfung ob Anzahl der richtigen Paare die Anzahl auf dem Spielfeld sind, damit ende des Spiels analysiert werden kann

            alert( "Gratualation, du hast gewonnen!" )//Alertbox erstellen für die Gratulation zum Spielende
        }
    }

    //----------------------------------------------------------------------------------------------------------------------------Hauptfunktion wird erzeugt

    function main(): void {//Funtkion main aufstellen

        console.log( "main" );//Ausgabe auf die Konsole

        //Funtion für die Spielerabfrage erstellen

        let i: boolean = true;//Variable i definieren,, wenn i wahr ist

        while ( i ) {

            anzahlSpieler = parseInt( prompt( "Bitte wählen Sie zwischen 1 und 4 Spielern" ), 10 );//Popup für Spieleranzeige
                                                                                                    //10 steht für Dezimalsystem

            if ( anzahlSpieler >= 1 && anzahlSpieler <= 4 ) {//Spieleranzahl nur 1-4 möglich

                i = false;//Ansonsten ist i unwahr
            }
        }

        for ( let i: number = 0; i < anzahlSpieler; i++ ) {//Schleife erzeugen für Abfrage der Spielernamen
                                                           //Variable i wird definiert mit i=0
                                                           //i kleiner als anzahlSpieler
                                                           //i++ i wird hochgezählt

            spieler[i] = prompt( "Bitte Spielernamen " + ( i + 1 ) + " eingeben" );//Popup für Namen der Spieler wird erzeugt
                                                                                   //bei mehreren Spielern (i+1) wird i hochgezählt u der name des nächsten Spielers wird abgefragt

            if ( spieler[i] == null ) {//wenn es keinen Spieler gibt, dann wird trotzdem ein Spieler erzeugt
                spieler[i] = "Anonymus";//Name des Spielers
            }
        }

        //Kartenpaarabfrage erstellen

        i = true;//i wird als wahr definiert
        while ( i ) {

            anzahlKartenpaare = parseInt( prompt( "Bitte wählen Sie zwischen 5 und 10 Kartenpaaren" ), 10 );//Popup für Kartenpaar Abfrage
                                                                                                             //10 steht für Dezimalsystem

            if ( anzahlKartenpaare >= 5 && anzahlKartenpaare <= 10 ) {//nur Kartenpaaranzahlen von 5-10 möglich

                i = false;//Ansonsten ist i unwahr
            }
        }

        //Schleife für die Kartenpaare erstellen& Verdopplung der Kartenpaare 

        for ( let i: number = 0; i < anzahlKartenpaare; i++ ) {//variable i wird definiert und i=0
                                                               //i kleiner als anzahlKartenpaare u i++ zähl i hoch

            //Karteninhalt wird verdoppelt, Karten werden verdoppelt/angeheftet

            kartenArray.push( kartenInhalt[i] );//karteninhalt wird verdoppelt und Karten verdoppelt u angeheftet
            kartenArray.push( kartenInhalt[i] );
        } 

        spielfeldErzeugen();//Spielbrett erzeugen 

        spielerInfo();//Spielerinfo erzeugen
    }

    document.addEventListener( "DOMContentLoaded", main );//AddEventListener-Main() wird ausgeführt sobald DOM vollständig geladen ist
}