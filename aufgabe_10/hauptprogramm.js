var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    var fishes = []; //meine rosanen fische
    var bubbles = []; //wei�e auf Linie
    var bubblesRandom = []; //dunkelbaue zittrige
    var n = 20; //insgesammt 20 objekte
    var imgData;
    //----FUNKTION INIT--------------------------------------------------------------
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        L09_Canvas.crc2 = canvas.getContext("2d");
        L09_Canvas.ctx = canvas.getContext("2d");
        console.log(L09_Canvas.crc2);
        //----MIT EINER KLASSE EINEN HINTERGRUND ERSTELLEN--------------------------------
        var hg = new L09_Canvas.Hintergrund;
        hg.paint();
        imgData = L09_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height); //BILD SPEICHERN
        console.log(imgData); //CONSOLEN AUSGABE
        //----LUFTBLASEN ZITTRIG DUNKELBLAU-------------------------------------------------
        for (var i = 5; i < n; i++) {
            var bubbleRandom = new L09_Canvas.BubbleZittrig();
            bubbleRandom.x = Math.random() * L09_Canvas.crc2.canvas.width;
            bubbleRandom.y = Math.random() * L09_Canvas.crc2.canvas.height;
            bubbleRandom.radius = Math.random() * 10;
            bubblesRandom.push(bubbleRandom);
        }
        //----LUFTBLASEN AUF LINIE WEISS-----------------------------------------------------
        for (var i = 5; i < n; i++) {
            var bubble = new L09_Canvas.Blasen();
            bubble.x = (290); //auf X Achse
            bubble.y = Math.random() * 420; //Wo sie anfangen auf welcher H�he
            bubble.radius = Math.random() * 11; //radius der blase
            bubbles.push(bubble);
        }
        //----FISCHE ROSA----------------------------------------------------------------------
        for (var i = 8; i < n; i++) {
            var fish = new L09_Canvas.FischSchwarm();
            fish.x = Math.random() * L09_Canvas.crc2.canvas.width;
            fish.y = Math.random() * L09_Canvas.crc2.canvas.height;
            fishes.push(fish);
        }
        animation(); //Aufruf der Funktion Animation
    }
    //----Funktion animation---------------------------------------------------------------
    function animation() {
        window.setTimeout(animation, 100);
        L09_Canvas.crc2.putImageData(imgData, 0, 0);
        bewegenObjekte();
        gezeichneteObjekte();
    }
    //----FUNKTION bewegenObjekte------------------------------------------------------------
    function bewegenObjekte() {
        for (var i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
        for (var i = 0; i < bubblesRandom.length; i++) {
            bubblesRandom[i].move();
        }
    }
    //----FUNKTION gezeichneteObjekte------------------------------------------------------------
    function gezeichneteObjekte() {
        for (var i = 0; i < fishes.length; i++)
            fishes[i].draw();
        for (var i = 0; i < bubbles.length; i++)
            bubbles[i].drawBubble();
        for (var i = 0; i < bubblesRandom.length; i++)
            bubblesRandom[i].drawBubblesRandom();
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Hauptprogramm.js.map