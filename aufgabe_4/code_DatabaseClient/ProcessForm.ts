namespace L05_Interfaces {
    window.addEventListener( "load", init );//window.addEventListener wird ausgeführt sobald ein geladen (durch funktion init) wird

    function init( _event: Event ): void {
        console.log( "Init" );

        let einsetzenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById( "einsetzen" );
        let findButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById( "find" );
        let aktualisierenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById( "aktualisieren" );
        einsetzenButton.addEventListener( "click", einsetzen );//Enventlistener auf Buttons
        aktualisierenButton.addEventListener( "click", aktualisieren );//Enventlistener auf Buttons
        findButton.addEventListener( "click", find );//Enventlistener auf Buttons
    }

    function einsetzen( _event: Event ): void {//funktion setzt Daten des Studenten ein
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName( "input" );
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById( "male" );
        let matrikel: string = inputs[2].value;
        let studi: Studi;

        studi = { //auf Interface übergeben
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt( matrikel ),
            age: parseInt( inputs[3].value ),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName( "select" ).item( 0 ).value,
        };

        console.log( studi );
        console.log( studi.age );
        console.log( studi["age"] );

        studiHomoAssoc[matrikel] = studi; // Datensatz im assoziativen Array unter der Matrikelnummer speichern

        studiSimpleArray.push( studi ); // nur um das auch noch zu zeigen...
    }

// _________________________________________________________________________________________________________________________________________________________
    function aktualisieren( _event: Event ): void {//Funktion um eingetragene Daten direkt auszugebeb
        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[0];//Auf Textarea 0 (aus HTMl, das 1. Textarea) zuzugreifen
        output.value = "";
        // for-in-Schleife iteriert Ã¼ber die SchlÃ¼ssel des assoziativen Arrays

        for ( let matrikel in studiHomoAssoc ) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (Maennlich)," : ", (Weiblich),";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }

        // Konsolenausgabe
        console.group( "Simple Array" );
        console.log( studiSimpleArray );
        console.groupEnd();

        console.group( "Associatives Array (Object)" );
        console.log( studiHomoAssoc );
        console.groupEnd();
    }
// _________________________________________________________________________________________________________________________________________________________
    function find( _event: Event ): void {//Funktion find aufstellen um eingegebene Matrikelnummer aus [0] hier, wenn vorhanden, wieder aufzurufen

        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[1];//Auf Textarea 1 zugreifen

        output.value = "";

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName( "input" );//Zugriff auf Inputs

        let matrikel: string = inputs[6].value;//Aufruf Matrikel nach 6. Input (aus HTML)

        let studi: Studi = studiHomoAssoc[matrikel];//Speichern Matrikelnummer

        if ( studi ) {//Matrikelnummern stimmen überein

            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (Maennlich)," : ", (Weiblich),";
            line += studi.studiengang + ": ";
            output.value += line + "\n";

        } else {//Matrikelnummern stimmen nicht überein
            alert( "Es wurde kein Student gefunden, bitte versuchen sie es noch einmal." );
        }
    }
}