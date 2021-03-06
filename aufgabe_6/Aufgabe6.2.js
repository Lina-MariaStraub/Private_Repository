/*Aufgabe: (Aufgabe 7)
        Name: Lina-Maria Straub
        Matrikel: (257767)
        
        Datum: (27.05.2018)
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
        Er wurde nicht kopiert und auch nicht diktiert.


IN GRUPPENARBEIT ERSTELLT*/
var L06_Interfaces;
(function (L06_Interfaces) {
    window.addEventListener("load", init);
    var address = "https://eia2node257767.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        //auf Button ein Eventlistener
        var insertButton = document.getElementById("insert");
        var searchButton = document.getElementById("search");
        var refreshButton = document.getElementById("refresh");
        //auf button BeispielDatens�tze
        var exampleButton = document.getElementById("exampleData");
        insertButton.addEventListener("click", insert);
        //bei klick auf Button refresh ausf�hren 
        refreshButton.addEventListener("click", refreshStudents);
        searchButton.addEventListener("click", search);
        exampleButton.addEventListener("click", exampleData);
    }
    //Datensatzbeispiele hier 3
    function exampleData() {
        for (var i = 0; i < 3; i++) {
            //Zugriff auf Interface
            var student = {
                name: "Straub " + i,
                firstname: "Alexandra" + i,
                matrikel: Math.floor(Math.random() * 222222),
                age: Math.floor(Math.random() * 22),
                gender: !!Math.round(Math.random()),
                studiengang: "OMB"
            };
            //Funktion sendDataToHost
            sendDataToHost("addStudent", student); //Variable student wird �bergeben
        }
    }
    function insert(_event) {
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
        L06_Interfaces.studiHomoAssoc[matrikel] = studi; // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L06_Interfaces.studiSimpleArray.push(studi);
        sendDataToHost("addStudent", studi); //Objekt studi wird �bergeben, Funktion sendDataToHost
    } //Methode addStudent
    //Serverfunktion refreshStudents ausf�hren
    //Funktion refreshStudents holt sich Liste der Daten vom Server
    //Methode refreshStudents
    function refreshStudents(_event) {
        sendDataToHost("refreshStudents");
    }
    function refresh() {
        var output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        // for-in-Schleife iteriert �ber die Schl�ssel des assoziativen Arrays
        for (var matrikel in L06_Interfaces.studiHomoAssoc) {
            var studi = L06_Interfaces.studiHomoAssoc[matrikel];
            var line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }
        console.group("Simple Array"); // zus�tzliche Konsolenausgaben zur Demonstration
        console.log(L06_Interfaces.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(L06_Interfaces.studiHomoAssoc);
        console.groupEnd();
    }
    function search(_event) {
        //Funktion search aufstellen
        //Auf erste Textarea zugreifen
        var output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var inputs = document.getElementsByTagName("input"); //Zugriff auf Inputs
        var matrikel = inputs[6].value; //nach 6 Input wird matrikel aufgerufen
        var studi = L06_Interfaces.studiHomoAssoc[matrikel]; //Matrikelnummer wird gespeichert
        if (studi) {
            var line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? ", (M)" : ", (F)";
            line += studi.studiengang + ": ";
            output.value += line + "\n";
        }
        else {
            alert("Kein Student gefunden. Versuch es nochmal.");
        }
    }
    //Funktion sendDataToHost
    //Parameter method: string, data: any = undefined
    //data: any = undefined -> Optionalparameter, muss nicht unbedingt angeben werden(Daten werden schon �bergeben)
    function sendDataToHost(method, data) {
        if (data === void 0) { data = undefined; }
        console.log("Sending data to host.."); //Ausgabe wenn Daten zum Server gesendet werden
        var xhr = new XMLHttpRequest(); //Variable xhr, XMLHttpRequest wird erstellt
        var dataString = JSON.stringify(data); //Dataobjekt wird in ein string umgewandelt, damit es zum Server gesendet werden kann
        //true= asynchron
        //Neue Http Request wird ge�ffnet
        xhr.open("GET", address + method + "?method=" + method + "&data=" + encodeURIComponent(dataString), true);
        if (method == "addStudent") {
            //Sobald eine Antwort ankommt schreibe die Antwort in die Konsole
            xhr.onload = function () {
                console.log(xhr.responseText);
            };
        }
        else if (method == "refreshStudents") {
            xhr.onload = function () {
                //Sobald eine Antwort ankommt ersetze studiHomoAssoc mit der Antwort und f�hre die Methode refresh aus
                console.log('Refreshing Students...');
                //�berschreibe studiHomoAssoc mit der Antwort
                L06_Interfaces.studiHomoAssoc = JSON.parse(xhr.responseText);
                refresh();
            };
        }
        else if (method == "searchStudent") {
            //Onload wird erst ausgef�hrt wenn es eine Antwort bekommt
            xhr.onload = function () {
                // Wenn undefined zur�ckgegeben wird, gebe Meldung aus
                if (xhr.responseText == "undefined") {
                    alert("Es wurde kein Student gefunden, bitte versuchen sie es noch einmal.");
                    return;
                }
                // Student R�ckgabe String wird zum Objekt umgewandelt
                var student = JSON.parse(xhr.responseText);
                //Auf erste Textarea zugreifen
                var output = document.getElementsByTagName("textarea")[0];
                output.value = "";
                //�bereinstimmung mit Student
                var line = data + ": ";
                line += student.name + ", " + student.firstname + ", " + student.age + " Jahre ";
                line += student.gender ? ", (M)" : ", (F)";
                line += student.studiengang + ": ";
                output.value += line + "\n";
            };
        }
        //Sende Request zum Server
        xhr.send();
    }
})(L06_Interfaces || (L06_Interfaces = {}));
//# sourceMappingURL=Aufgabe6.2.js.map