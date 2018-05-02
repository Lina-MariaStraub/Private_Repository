var L05_Interfaces;
(function (L05_Interfaces) {
    window.addEventListener("load", init); //window.addEventListener wird ausgef�hrt sobald ein geladen (durch funktion init) wird
    function init(_event) {
        console.log("Init");
        var einsetzenButton = document.getElementById("einsetzen");
        var findButton = document.getElementById("find");
        var aktualisierenButton = document.getElementById("aktualisieren");
        einsetzenButton.addEventListener("click", einsetzen); //Enventlistener auf Buttons
        aktualisierenButton.addEventListener("click", aktualisieren); //Enventlistener auf Buttons
        findButton.addEventListener("click", find); //Enventlistener auf Buttons
    }
    function einsetzen(_event) {
        var inputs = document.getElementsByTagName("input");
        var genderButton = document.getElementById("male");
        var matrikel = inputs[2].value;
        var studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName("select").item(0).value,
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        L05_Interfaces.studiHomoAssoc[matrikel] = studi; // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L05_Interfaces.studiSimpleArray.push(studi); // nur um das auch noch zu zeigen...
    }
    // _________________________________________________________________________________________________________________________________________________________
    function aktualisieren(_event) {
        var output = document.getElementsByTagName("textarea")[0]; //Auf Textarea 0 (aus HTMl, das 1. Textarea) zuzugreifen
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (var matrikel in L05_Interfaces.studiHomoAssoc) {
            var studi = L05_Interfaces.studiHomoAssoc[matrikel];
            var line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (Maennlich)," : ", (Weiblich),";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }
        // Konsolenausgabe
        console.group("Simple Array");
        console.log(L05_Interfaces.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(L05_Interfaces.studiHomoAssoc);
        console.groupEnd();
    }
    // _________________________________________________________________________________________________________________________________________________________
    function find(_event) {
        var output = document.getElementsByTagName("textarea")[1]; //Auf Textarea 1 zugreifen
        output.value = "";
        var inputs = document.getElementsByTagName("input"); //Zugriff auf Inputs
        var matrikel = inputs[6].value; //Aufruf Matrikel nach 6. Input (aus HTML)
        var studi = L05_Interfaces.studiHomoAssoc[matrikel]; //Speichern Matrikelnummer
        if (studi) {
            var line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (Maennlich)," : ", (Weiblich),";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }
        else {
            alert("Es wurde kein Student gefunden, bitte versuchen sie es noch einmal.");
        }
    }
})(L05_Interfaces || (L05_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map