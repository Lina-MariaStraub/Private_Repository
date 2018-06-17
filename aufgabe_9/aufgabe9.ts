namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let ctx: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);

        //-------------------------------------------------------------------AUSFÜHREN------------------------------
        //Wasser hintergrund
        crc2.fillStyle = "rgb(135,  206, 235 )";
        crc2.fillRect(0, 0, 360, 640);

        //Boden
        Boden();

        //Stein
        Stein(-190, 450);

        //Luftblasen sind random      
        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawLuftblasen(x, y, 7);
        }

        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawLuftblasen2(x, y, 5);
        }

        //Burg
        // drawBurg(300,330)
        
        //Kiste Schatztruhe
        Schatztruhe(60, 410, 70, 30);

        //Deckel Schatztruhe
        Deckel(260, 410);
        
        //Fische sind random  
        for (let i: number = 0; i < 5; i++) {//Grünlicher Fisch
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            Fisch1(x, y);
        }
        for (let i: number = 0; i < 7; i++) {//Grünlicher Fisch
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            Fisch2(x, y);
        }
        
        //Wasserpflanze
        Wasserpflanze(20, 480);
        Wasserpflanze2 (40, 470);
        Wasserpflanze3(60, 490);
        Wasserpflanze4(85, 490);
        Wasserpflanze5(70, 462);
        
        //Seestern
        Seestern(100, 100);

        //---------------------------------------------------------Funktionen---------------------------------------------------------------
  
        //FISCHE sind oben random...................................................................... 
        function Fisch1(_x: number, _y: number): void { //Grünlicher Fisch
            ctx.beginPath();
            crc2.fillStyle = "rgb(255,102,153)";
            ctx.moveTo(_x, _y);
            ctx.bezierCurveTo(_x + 40, _y, _x + 40, _y + 30, _x, _y + 30);
            crc2.moveTo(_x, _y + 30);
            crc2.lineTo(_x - 30, _y + 20);
            crc2.lineTo(_x - 35, _y + 35);
            crc2.lineTo(_x - 35, _y);
            crc2.lineTo(_x - 30, _y + 10);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            ctx.stroke();
            ctx.fill();

        }
            function Fisch2(_x: number, _y: number): void { //Grünlicher Fisch
            ctx.beginPath();
            crc2.fillStyle = "rgb(255,202,15)";
            ctx.moveTo(_x, _y);
            ctx.bezierCurveTo(_x - 20, _y, _x - 20, _y - 15, _x, _y - 15);
            crc2.moveTo(_x, _y - 15);
            crc2.lineTo(_x + 15, _y - 10);
            crc2.lineTo(_x + 17, _y - 17);
            crc2.lineTo(_x + 17, _y);
            crc2.lineTo(_x + 15, _y - 5);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            ctx.stroke();
            ctx.fill();
        }
        //LUFTBLASEN  sind oben random.....................................................................
        function drawLuftblasen(_x: number, _y: number, _radius: number): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(100, 149, 237 )";
            ctx.arc(_x, _y, _radius, 0, 2 * Math.PI);
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }

        function drawLuftblasen2(_x: number, _y: number, _radius: number): void {
        ctx.beginPath();
            crc2.fillStyle = "rgb(51, 76, 153)";
            ctx.arc(_x, _y, _radius, 0, 2 * Math.PI);
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }
          
        //Boden..........................................................................................
        function Boden(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(255, 228, 196)";
        for (let i: number = 0; i < 360; i++) {
            crc2.lineTo(i, 14 * Math.sin(i * .014) + 435);
            crc2.fill();
            crc2.closePath();
        }
            
        //Kiste..........................................................................................
        function Schatztruhe(_x: number, _y: number, _width: number, _height: number): void {
            crc2.fillStyle = "rgb(51,20,0)";
            crc2.fillRect(_x + 200, _y, _width, _height);
            crc2.stroke();
        }

        //Deckel..................................................................................................................    
        function Deckel(_x: number, _y: number): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(51,20,0)";
            ctx.moveTo(_x, _y);
            ctx.bezierCurveTo(_x - 70, _y + 10, _x - 80, _y - 40, _x - 80, _y - 60);
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }
        
        //Stein........................................................................................................
        function Stein(_x : number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(64, 64, 64)";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x +120, _y -100);
            crc2.lineTo(_x + 150, _y -140);
            crc2.lineTo(_x + 200, _y -140);
            crc2.lineTo(_x +200, _y -140);
            crc2.lineTo(_x +250, _y - 70);
            crc2.lineTo(_x +300, _y -40);
            crc2.lineTo(_x +325, _y +10);
            crc2.lineTo(_x +175, _y +10);
            crc2.lineTo(_x, _y );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        
        //Wasserpflanzen...........................................................................................................
        function Wasserpflanze(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0, 100, 0)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 20, _y - 100, _x + 20, _y - 80);
            crc2.quadraticCurveTo(_x - 20, _y - 120, _x - 10, _y);
            crc2.lineTo(_x, _y);
            crc2.fill();
    }
        function Wasserpflanze2(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(43, 139, 34)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 20, _y - 160, _x + 20, _y - 100);
            crc2.quadraticCurveTo(_x - 20, _y - 170, _x - 10, _y);
            crc2.lineTo(_x, _y);
            crc2.fill();
    }        
        function Wasserpflanze3(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(69, 139, 0)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 20, _y - 140, _x + 20, _y - 90);
            crc2.quadraticCurveTo(_x - 40, _y - 170, _x - 10, _y);
            crc2.lineTo(_x, _y);
            crc2.fill();
    }
        function Wasserpflanze4(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0, 205, 0)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 20, _y - 160, _x + 20, _y - 100);
            crc2.quadraticCurveTo(_x - 20, _y - 170, _x - 10, _y);
            crc2.lineTo(_x, _y);
            crc2.fill();
    }   
        function Wasserpflanze5(_x: number, _y: number): void {
             crc2.beginPath();
             crc2.fillStyle = "rgb(110, 139, 61)";                    
             crc2.moveTo(_x, _y);
             crc2.quadraticCurveTo(_x - 20, _y - 160, _x + 20, _y - 100);
             crc2.quadraticCurveTo(_x - 20, _y - 190, _x - 5, _y);
             crc2.lineTo(_x, _y);
             crc2.fill();
    }
            

    
}