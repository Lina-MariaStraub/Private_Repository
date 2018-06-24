namespace L09_Canvas {
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    export let ctx: CanvasRenderingContext2D;
    let fishes: FischSchwarm[] = [];//meine rosanen fische
    let bubbles: Blasen[] = [];//weiﬂe auf Linie
    let bubblesRandom: BubbleZittrig[] = [];//dunkelbaue zittrige
    let n: number = 20;//insgesammt 20 objekte
    let imgData: ImageData;
//----FUNKTION INIT--------------------------------------------------------------
    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        ctx = canvas.getContext( "2d" );
        console.log( crc2 );
//----MIT EINER KLASSE EINEN objekte ERSTELLEN--------------------------------
        let background: objekte = new objekte;
        background.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height ); //BILD SPEICHERN
        console.log( imgData );//CONSOLEN AUSGABE
//----LUFTBLASEN ZITTRIG DUNKELBLAU-------------------------------------------------
        for ( let i: number = 5; i < n; i++ ) {
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
        }
//----FISCHE ROSA----------------------------------------------------------------------
        for ( let i: number = 8; i < n; i++ ) {
            let fish: FischSchwarm = new FischSchwarm();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fishes.push( fish );
        }
        animation();//Aufruf der Funktion Animation
    }
//----Funktion animation---------------------------------------------------------------
    function animation(): void {
        window.setTimeout( animation, 100 );
        crc2.putImageData( imgData, 0, 0 );
        bewegenObjekte();
        gezeichneteObjekte();
    }
//----FUNKTION bewegenObjekte------------------------------------------------------------
    function bewegenObjekte(): void {
        for ( let i: number = 0; i < fishes.length; i++ ) {
            fishes[i].move();
        }
        for ( let i: number = 0; i < bubbles.length; i++ ) {
            bubbles[i].move();
        }
        for ( let i: number = 0; i < bubblesRandom.length; i++ ) {
            bubblesRandom[i].move();
        }
    }
//----FUNKTION gezeichneteObjekte------------------------------------------------------------
    function gezeichneteObjekte(): void {
        for ( let i: number = 0; i < fishes.length; i++ )
            fishes[i].draw();

        for ( let i: number = 0; i < bubbles.length; i++ )
            bubbles[i].zeichneLuftblasenWeiss();

        for ( let i: number = 0; i < bubblesRandom.length; i++ )
            bubblesRandom[i].zeichneLuftblasenBlau();
    }
}