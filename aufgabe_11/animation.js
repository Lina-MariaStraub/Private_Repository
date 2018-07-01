var L11_Canvas;
(function (L11_Canvas) {
    window.addEventListener("load", init);
    //export let ctx: CanvasRenderingContext2D;
    //let fishes: FischSchwarm[] = [];//meine rosanen fische7
    var bewegenObjekte = [];
    //let bubbles: Blasen[] = [];//wei�e auf Linie
    //let bubblesRandom: BubbleZittrig[] = [];//dunkelbaue zittrige
    var n = 20; //insgesammt 20 objekte
    var imgData;
    //----FUNKTION INIT--------------------------------------------------------------
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        L11_Canvas.crc2 = canvas.getContext("2d");
        //ctx = canvas.getContext( "2d" );
        console.log(L11_Canvas.crc2);
        canvas.addEventListener("click", neuesObjektEinsetzen);
        //----MIT EINER KLASSE EINEN objekte ERSTELLEN--------------------------------
        var background = new L11_Canvas.objekte;
        background.paint();
        imgData = L11_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height); //BILD SPEICHERN
        console.log(imgData); //CONSOLEN AUSGABE
        //----LUFTBLASEN ZITTRIG DUNKELBLAU-------------------------------------------------
        /*for ( let i: number = 5; i < n; i++ ) {
            let bubbleRandom: BubbleZittrig = new BubbleZittrig();
            bubbleRandom.x = Math.random() * crc2.canvas.width;
            bubbleRandom.y = Math.random() * crc2.canvas.height;
            bubbleRandom.radius = Math.random() * 10;
            bubblesRandom.push( bubbleRandom );
        }
//----LUFTBLASEN AUF LINIE WEISS-----------------------------------------------------
        for ( let i: number = 5; i < n; i++ ) {
            let bubble: Blasen = new Blasen();
            bubble.x = ( 290 );//auf X Achse
            bubble.y = Math.random() * 420; //Wo sie anfangen auf welcher H�he
            bubble.radius = Math.random() * 11;//radius der blase
            bubbles.push( bubble );
        }*/
        //----ALLE OBJEKTE----------------------------------------------------------------------
        for (var i = 8; i < n; i++) {
            var fish = new L11_Canvas.FischSchwarm("rgb(255,0,0)"); //Rosa
            //fish.x = Math.random() * crc2.canvas.width;
            //fish.y = Math.random() * crc2.canvas.height;
            bewegenObjekte.push(fish);
            var luftblasenBlau = new L11_Canvas.BubbleZittrig("rgb(51, 76, 170)"); //Blau
            bewegenObjekte.push(luftblasenBlau);
            var luftblasenWeiss = new L11_Canvas.Blasen("rgb(255,255,255)"); //Weiss
            bewegenObjekte.push(luftblasenWeiss);
            animation(); //Aufruf der Funktion Animation
        }
        //----Funktion neuesObjektEinsetzen---------------------------------------------------
        function neuesObjektEinsetzen(_event) {
            var x = _event.clientX;
            var y = _event.clientY;
            var n = Math.floor(Math.random() * 2);
            switch (n) {
                case 0:
                    var futter = new L11_Canvas.Futter("#0000ff"); //Blau
                    futter.x = x;
                    futter.y = y;
                    bewegenObjekte.push(futter);
                    break;
            }
        }
        //----Funktion animation---------------------------------------------------------------
        function animation() {
            window.setTimeout(animation, 100);
            L11_Canvas.crc2.putImageData(imgData, 0, 0);
            bewegObjekte();
            gezeichneteObjekte();
        }
        //----FUNKTION bewegenObjekte------------------------------------------------------------
        function bewegObjekte() {
            for (var i = 0; i < bewegenObjekte.length; i++) {
                bewegenObjekte[i].move();
            }
            /*for ( let i: number = 0; i < bubbles.length; i++ ) {
                bubbles[i].move();
            }
            for ( let i: number = 0; i < bubblesRandom.length; i++ ) {
                bubblesRandom[i].move();
            }*/
        }
        //----FUNKTION gezeichneteObjekte------------------------------------------------------------
        function gezeichneteObjekte() {
            for (var i = 0; i < bewegenObjekte.length; i++)
                bewegenObjekte[i].draw();
            /* for ( let i: number = 0; i < bubbles.length; i++ )
                 bubbles[i].zeichneLuftblasenWeiss();
     
             for ( let i: number = 0; i < bubblesRandom.length; i++ )
                 bubblesRandom[i].zeichneLuftblasenBlau();
         }*/
        }
    }
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=animation.js.map