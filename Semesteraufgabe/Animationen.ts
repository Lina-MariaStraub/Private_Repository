namespace Semesteraufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let gegner: Gegner[] = [];//Spinnen, Monster, Fische
    export let biene: PlayerBiene;
    let imgData: ImageData;
//----FUNKTION INIT------------------------------------------------------------------------------------------------------
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        formatCanvas();
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        //Canvas klickbar gemacht 
        canvas.addEventListener("click", geklickteObjekte);//funktion unten
        crc2 = canvas.getContext("2d");
        alert("Willkomen im Spiel!" + " Aufgabe: Vernichte alle Feinde der Biene bevor die Biene in ihre Naehe kommt indem du sie in der Mitte anklickst.");
        
        Hintergrund();//Aufruf der Funktion
        RandomPositionObjekte();//Aufruf der Funktion 
        drawBiene();//Aufruf der Funktion

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);//Bild speichern
        window.setTimeout(animate, 20);
    }
//----FUNKTION HINTERGRUND------------------------------------------------------------------------------------------------------------
    function Hintergrund(): void {
        crc2.beginPath();
        crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = "#aeff8e";
        crc2.fill();
    }//Klammer function Hintergrund
//----FUNKTION DRAWMONSTER------------------------------------------------------------------------------------------------------------
    function drawBiene(): void {//Biene in PlayerBiene.ts gezeichnet
        biene = new PlayerBiene(100, 100);//Position
    }  
//----FUNKTION FROMATCANVAS-----------------------------------------------------------------------------------------------------------
    function formatCanvas(): void {//Damit je nach Bildschirmgröße das Format anpasst
        let margin: number = 70;//Eingrenzung des Spielfeldes
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = window.innerWidth - margin;
        canvas.height = window.innerHeight - margin;
    } 
//----FUNKTION RANDOMPOSTITIONOBJEKTE-------------------------------------------------------------------------------------------------
    function RandomPositionObjekte(): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        let anzahlObjekte: any = 10;//Wie viele Objekte sind auf dem Spielfeld 

        for (let i: number = 0; i < anzahlObjekte; i++) {
            let x: number = Math.round((Math.random() * (canvas.width - 200)) + 100);//wo befinden sich die objekte
            let y: number = Math.round((Math.random() * (canvas.height - 110)) + 50);
            let z: number = Math.round((Math.random() * 3) + 0);
            switch (z) {
                case 0:
                    let spinne: Spinnen = new Spinnen(x, y);//Gegner Spinnen gepusht
                    gegner.push(spinne);
                    break;
                case 1:
                    let fisch: Fische = new Fische(x, y);//Gegner Fische
                    gegner.push(fisch);
                    break;
                case 2:
                    let greenmonster: GreenMonster = new GreenMonster(x, y);//Grüner Gegner (Monster)
                    gegner.push(greenmonster);
                    break;
                default:
                    break;
            }//Klammer von switch
        }//klammer for-Schleife
    }//Klammer function Rand.Pos.Obj
//----FUNKTION GEKLICKTEOBJEKTE-----------------------------------------------------------------------------------------------------------
    function geklickteObjekte(event: MouseEvent): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
      
        let rect = canvas.getBoundingClientRect();//ausm Inet
        console.log(rect);
        console.log(event);
        let x: number = event.clientX - rect.left;
        let y: number = event.clientY - rect.top;
        for (let i: number = 0; i < gegner.length; i++) {
            if (gegner[i].treffer(x, y)) {//definiert in Gegner.ts
                let object: Gegner = gegner[i];
                gegner.splice(i, 1);
                biene.neuesZielAnstreben(object);
                break;
            }
        }
        if (gegner.length == 0) {//Wenn Array leer bzw alle Gegnere weggeklickt wurden erscheint das Gewinner-Popup
            alert("Super! Du hast die Biene vor den Feinden gerettet. Schaffst du das nochmal? Lade dafuer das Spiel neu");
        }
    }
//----FUNKTION ANIMATE--------------------------------------------------------------------------------------------------------------------
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        window.setTimeout(animate, 20);//Timeout
        for (let i: number = 0; i < gegner.length; i++) {
            gegner[i].draw();
        }
        biene.update();//Position verändert sich durch animation        
    }//Klammer von funct. animate
}//Klammer vom Namespace