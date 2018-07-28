namespace Semesteraufgabe {
    export class GreenMonster extends Gegner {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Monster erzeugen");
        }       
         draw(): void {
//Monster---------------------------------------------------------------------      
            crc2.beginPath();
            crc2.fillStyle = "#006b27";
            crc2.strokeStyle = "red";
            crc2.arc(this.x - 20, this.y - 12, 3 + 25, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();            
//linkes Auge des Monsters
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 12, this.y - 15, 3 + 5, 0, 2 * Math.PI);//10 ist die Kreisgröße
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();           
//rechtes Auge des Monsters
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 28, this.y - 15, 3 + 5, 0, 2 * Math.PI);//10 ist die Kreisgröße
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();           
// Pupille linkes Auge des Monsters
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 12, this.y - 15, 3 + 0.5, 0, 2 * Math.PI);//10 ist die Kreisgröße
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();            
//Pupille rechtes Auge des Monsters
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 28, this.y - 15, 3 + 0.5, 0, 2 * Math.PI);//10 ist die Kreisgröße
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }//Klammer vom draw()
    }//Klammer von der Class
}//Klammer vom Namespace
