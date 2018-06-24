namespace L09_Canvas {
    export class objekte { //Alle Aufrufe hier..an welchen Platz sie sollen
        public paint(): void {
            this.WasserSand( 260 );//Wasser und sand
            this.Stein(-190, 450);//Stein links mittig
            this.Kiste(259, 410, 70, 30);//Kiste rechts mittig
            this.Deckel(260, 410);//DeckelSchatztruhe mittig
            this.Wasserpflanze1(20, 480);//Wasserpflanzen links unten
            this.Wasserpflanze2(40, 470);
            this.Wasserpflanze3(60, 490);
            this.Wasserpflanze4(85, 490);
            this.Wasserpflanze5(70, 462);
        }
//----KISTE-------------------------------------------------------------------------
        Kiste( _x: number, _y: number, _width: number, _height: number ): void {
            crc2.fillStyle = "rgb(51,20,0)";
            crc2.fillRect( _x, _y, _width, _height );
        }
//----DECKEL-------------------------------------------------------------------------
        Deckel( _x: number, _y: number ): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(51,20,0)";
            ctx.moveTo(_x, _y);
            ctx.bezierCurveTo(_x - 70, _y + 10, _x - 80, _y - 40, _x - 80, _y - 60);
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }
//----WASSER UND SAND-------------------------------------------------------------------------
        WasserSand( _sandHeight: number ): void {
            crc2.fillStyle = "rgb(135,  206, 235 )";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height );

            crc2.fillStyle = "rgb(255, 228, 196)";
            crc2.fillRect( 0, crc2.canvas.height - _sandHeight, crc2.canvas.width, crc2.canvas.height );
        }
//----WASSERPFLANZEN-------------------------------------------------------------------------
        Wasserpflanze1( _x: number, _y: number ): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0, 100, 0)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 20, _y - 100, _x + 20, _y - 80);
            crc2.quadraticCurveTo(_x - 20, _y - 120, _x - 10, _y);
            crc2.lineTo(_x, _y);
            crc2.fill();
        }
        Wasserpflanze2( _x: number, _y: number ): void {
           crc2.beginPath();
            crc2.fillStyle = "rgb(43, 139, 34)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 20, _y - 160, _x + 20, _y - 100);
            crc2.quadraticCurveTo(_x - 20, _y - 170, _x - 10, _y);
            crc2.lineTo(_x, _y);
            crc2.fill();
        }
        Wasserpflanze3( _x: number, _y: number ): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(69, 139, 0)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 20, _y - 140, _x + 20, _y - 90);
            crc2.quadraticCurveTo(_x - 40, _y - 170, _x - 10, _y);
            crc2.lineTo(_x, _y);
            crc2.fill();
        }
        Wasserpflanze4( _x: number, _y: number ): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0, 205, 0)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 20, _y - 160, _x + 20, _y - 100);
            crc2.quadraticCurveTo(_x - 20, _y - 170, _x - 10, _y);
            crc2.lineTo(_x, _y);
            crc2.fill();
        }
        Wasserpflanze5( _x: number, _y: number ): void {
             crc2.beginPath();
             crc2.fillStyle = "rgb(110, 139, 61)";                    
             crc2.moveTo(_x, _y);
             crc2.quadraticCurveTo(_x - 20, _y - 160, _x + 20, _y - 100);
             crc2.quadraticCurveTo(_x - 20, _y - 190, _x - 5, _y);
             crc2.lineTo(_x, _y);
             crc2.fill();
        }
//----STEIN-------------------------------------------------------------------------
        Stein( _x: number, _y: number ): void {
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
    }
}