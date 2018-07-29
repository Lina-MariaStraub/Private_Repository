var Semesteraufgabe;
(function (Semesteraufgabe) {
    window.addEventListener("load", init);
    Semesteraufgabe.gegner = []; //Spinnen, Monster, Fische
    var imgData;
    //----FUNKTION INIT------------------------------------------------------------------------------------------------------
    function init(_event) {
        var canvas;
        formatCanvas();
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        //Canvas klickbar gemacht 
        canvas.addEventListener("click", geklickteObjekte); //funktion unten
        Semesteraufgabe.crc2 = canvas.getContext("2d");
        alert("Willkomen im Spiel!" + " Aufgabe: Vernichte alle Feinde der Biene bevor die Biene in ihre Naehe kommt indem du sie in der Mitte anklickst.");
        Hintergrund(); //Aufruf der Funktion
        RandomPositionObjekte(); //Aufruf der Funktion 
        drawBiene(); //Aufruf der Funktion
        imgData = Semesteraufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height); //Bild speichern
        window.setTimeout(animate, 20);
    }
    //----FUNKTION HINTERGRUND------------------------------------------------------------------------------------------------------------
    function Hintergrund() {
        Semesteraufgabe.crc2.beginPath();
        Semesteraufgabe.crc2.rect(0, 0, Semesteraufgabe.crc2.canvas.width, Semesteraufgabe.crc2.canvas.height);
        Semesteraufgabe.crc2.closePath();
        Semesteraufgabe.crc2.fillStyle = "#aeff8e";
        Semesteraufgabe.crc2.fill();
    } //Klammer function Hintergrund
    //----FUNKTION DRAWMONSTER------------------------------------------------------------------------------------------------------------
    function drawBiene() {
        Semesteraufgabe.biene = new Semesteraufgabe.PlayerBiene(100, 100); //Position
    }
    //----FUNKTION FROMATCANVAS-----------------------------------------------------------------------------------------------------------
    function formatCanvas() {
        var margin = 70; //Eingrenzung des Spielfeldes
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = window.innerWidth - margin;
        canvas.height = window.innerHeight - margin;
    }
    //----FUNKTION RANDOMPOSTITIONOBJEKTE-------------------------------------------------------------------------------------------------
    function RandomPositionObjekte() {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        var anzahlObjekte = 10; //Wie viele Objekte sind auf dem Spielfeld 
        for (var i = 0; i < anzahlObjekte; i++) {
            var x = Math.round((Math.random() * (canvas.width - 200)) + 100); //wo befinden sich die objekte
            var y = Math.round((Math.random() * (canvas.height - 110)) + 50);
            var z = Math.round((Math.random() * 3) + 0);
            switch (z) {
                case 0:
                    var spinne = new Semesteraufgabe.Spinnen(x, y); //Gegner Spinnen gepusht
                    Semesteraufgabe.gegner.push(spinne);
                    break;
                case 1:
                    var fisch = new Semesteraufgabe.Fische(x, y); //Gegner Fische
                    Semesteraufgabe.gegner.push(fisch);
                    break;
                case 2:
                    var greenmonster = new Semesteraufgabe.GreenMonster(x, y); //Gr�ner Gegner (Monster)
                    Semesteraufgabe.gegner.push(greenmonster);
                    break;
                default:
                    break;
            } //Klammer von switch
        } //klammer for-Schleife
    } //Klammer function Rand.Pos.Obj
    //----FUNKTION GEKLICKTEOBJEKTE-----------------------------------------------------------------------------------------------------------
    function geklickteObjekte(event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        var rect = canvas.getBoundingClientRect(); //ausm Inet
        console.log(rect);
        console.log(event);
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        for (var i = 0; i < Semesteraufgabe.gegner.length; i++) {
            if (Semesteraufgabe.gegner[i].treffer(x, y)) {
                var object = Semesteraufgabe.gegner[i];
                Semesteraufgabe.gegner.splice(i, 1);
                Semesteraufgabe.biene.neuesZielAnstreben(object);
                break;
            }
        }
        if (Semesteraufgabe.gegner.length == 0) {
            alert("Super! Du hast die Biene vor den Feinden gerettet. Schaffst du das nochmal? Lade dafuer das Spiel neu");
        }
    }
    //----FUNKTION ANIMATE--------------------------------------------------------------------------------------------------------------------
    function animate() {
        Semesteraufgabe.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(animate, 20); //Timeout
        for (var i = 0; i < Semesteraufgabe.gegner.length; i++) {
            Semesteraufgabe.gegner[i].draw();
        }
        Semesteraufgabe.biene.update(); //Position ver�ndert sich durch animation        
    } //Klammer von funct. animate
})(Semesteraufgabe || (Semesteraufgabe = {})); //Klammer vom Namespace
//# sourceMappingURL=Animationen.js.map