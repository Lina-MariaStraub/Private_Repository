namespace L11_Canvas {
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    //export let ctx: CanvasRenderingContext2D;
    //let fishes: FischSchwarm[] = [];//meine rosanen fische7
    let bewegenObjekte: BewegenObjekte []=[];
    //let bubbles: Blasen[] = [];//weiﬂe auf Linie
    //let bubblesRandom: BubbleZittrig[] = [];//dunkelbaue zittrige
    let n: number = 20;//insgesammt 20 objekte
    let imgData: ImageData;
//----FUNKTION INIT--------------------------------------------------------------
    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        //ctx = canvas.getContext( "2d" );
        console.log( crc2 );
        
        canvas.addEventListener("click", neuesObjektEinsetzen)
//----MIT EINER KLASSE EINEN objekte ERSTELLEN--------------------------------
        let background: objekte = new objekte;
        background.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height ); //BILD SPEICHERN
        console.log( imgData );//CONSOLEN AUSGABE
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
            bubble.y = Math.random() * 420; //Wo sie anfangen auf welcher Hˆhe
            bubble.radius = Math.random() * 11;//radius der blase
            bubbles.push( bubble );
        }*/
//----ALLE OBJEKTE----------------------------------------------------------------------
        for ( let i: number = 8; i < n; i++ ) {
            let fish: FischSchwarm = new FischSchwarm("rgb(255,0,0)"); //Rosa
            //fish.x = Math.random() * crc2.canvas.width;
            //fish.y = Math.random() * crc2.canvas.height;
            bewegenObjekte.push( fish );
            
            let luftblasenBlau: BubbleZittrig = new BubbleZittrig ("rgb(51, 76, 170)")//Blau
            bewegenObjekte.push( luftblasenBlau );
            
            let luftblasenWeiss: Blasen = new Blasen ("rgb(255,255,255)")//Weiss
            bewegenObjekte.push( luftblasenWeiss );
        
        animation();//Aufruf der Funktion Animation
    }
        
//----Funktion neuesObjektEinsetzen---------------------------------------------------
    function neuesObjektEinsetzen (_event: MouseEvent) :void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let n: number = Math.floor( Math.random() * 2 );

        switch ( n ) {
            case 0:
                  let futter: Futter = new Futter( "#0000ff" ); //Blau
                  futter.x = x;
                  futter.y = y;
                  bewegenObjekte.push( futter );
                  break;
            }
}
//----Funktion animation---------------------------------------------------------------
    function animation(): void {
        window.setTimeout( animation, 100 );
        crc2.putImageData( imgData, 0, 0 );
        bewegObjekte();
        gezeichneteObjekte();
    }
//----FUNKTION bewegenObjekte------------------------------------------------------------
    function bewegObjekte(): void {
        for ( let i: number = 0; i <  bewegenObjekte.length; i++ ) {
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
    function gezeichneteObjekte(): void {
        for ( let i: number = 0; i <  bewegenObjekte.length; i++ )
             bewegenObjekte[i].draw();

       /* for ( let i: number = 0; i < bubbles.length; i++ )
            bubbles[i].zeichneLuftblasenWeiss();

        for ( let i: number = 0; i < bubblesRandom.length; i++ )
            bubblesRandom[i].zeichneLuftblasenBlau();
    }*/
        } 
    }
}