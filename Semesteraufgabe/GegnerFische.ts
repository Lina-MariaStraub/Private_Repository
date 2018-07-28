namespace Semesteraufgabe {
    export class Fische extends Gegner {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Fische erzeugen");
        }      
        draw(): void {
//Fische-----------------------------------------------------------------          
             crc2.strokeStyle = "black"; 
             crc2.fillStyle = "#720606"; 
             crc2.lineWidth = 0.5; 
             crc2.beginPath();
             crc2.moveTo(this.x, this.y);
             crc2.bezierCurveTo(this.x, this.y, this.x + 10, this.y - 35, this.x + 50, this.y - 3);
             crc2.lineTo(this.x + 55, this.y - 15);
             crc2.bezierCurveTo(this.x + 55, this.y - 15, this.x + 50, this.y - 5, this.x + 55, this.y);
             crc2.bezierCurveTo(this.x + 55, this.y, this.x + 50, this.y + 5, this.x + 55, this.y + 15);
             crc2.lineTo(this.x + 50, this.y + 5);
             crc2.bezierCurveTo(this.x + 55, this.y + 5, this.x + 10, this.y + 35, this.x, this.y);
             crc2.fill();
             crc2.closePath();
             crc2.stroke();      
//----Auge des Fisches
             crc2.beginPath();
             crc2.fillStyle = "white"; 
             crc2.arc(this.x + 15, this.y - 2, 5, 0, Math.PI * 2, true);
             crc2.fill();
             crc2.closePath();
                
             crc2.beginPath();
             crc2.fillStyle = "red"; 
             crc2.arc(this.x + 15, this.y - 2, 3, 0, Math.PI * 2, true);
             crc2.fill();
             crc2.closePath(); 
        }//Klammer vom draw()
    }//Klammer von der Class
}//Klammer vom Namespace