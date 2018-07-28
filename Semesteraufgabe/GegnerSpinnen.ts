namespace Semesteraufgabe {
    export class Spinnen extends Gegner {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Spinnen erzeugen");
        }
        draw(): void {            
//Spinne-------------------------------------------------------------------------             
//Linke Spinnenbeine
            crc2.fillStyle = "black";
            crc2.moveTo(this.x,this.y);
            crc2.lineTo(this.x-30,this.y-30);
            crc2.lineTo(this.x-30,this.y-35);
            crc2.fillStyle = "black";
            crc2.moveTo(this.x,this.y);
            crc2.lineTo(this.x-30,this.y-10);
            crc2.lineTo(this.x-40,this.y-10);
            crc2.fillStyle = "black";
            crc2.moveTo(this.x,this.y);
            crc2.lineTo(this.x-30,this.y+10);
            crc2.lineTo(this.x-40,this.y+10);
            crc2.fillStyle = "black";
            crc2.moveTo(this.x,this.y);
            crc2.lineTo(this.x-30,this.y+30);
            crc2.lineTo(this.x-30,this.y+35);
            crc2.fillStyle = "black";
            crc2.stroke();           
//Rechte Spinnenbeine
            crc2.fillStyle = "black";
            crc2.moveTo(this.x,this.y);
            crc2.lineTo(this.x+30,this.y-30);
            crc2.lineTo(this.x+30,this.y-35);
            crc2.fillStyle = "black";
            crc2.moveTo(this.x,this.y);
            crc2.lineTo(this.x+30,this.y-10);
            crc2.lineTo(this.x+40,this.y-10);
            crc2.fillStyle = "black";
            crc2.moveTo(this.x,this.y);
            crc2.lineTo(this.x+30,this.y+10);
            crc2.lineTo(this.x+40,this.y+10);
            crc2.fillStyle = "black";
            crc2.moveTo(this.x,this.y);
            crc2.lineTo(this.x+30,this.y+30);
            crc2.lineTo(this.x+30,this.y+35);
            crc2.fillStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "black";          
//Spinnenkörper           
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.x,this.y - 10,15,0,2 * Math.PI);
            crc2.arc(this.x,this.y + 12,20,0,2 * Math.PI);
            crc2.fill();
            crc2.beginPath(); 
//----Auge rechts
             crc2.beginPath();
             crc2.fillStyle = "white"; 
             crc2.arc(this.x + 3, this.y - 12, 4, 0, Math.PI * 2, true);
             crc2.fill();
             crc2.closePath();
                
             crc2.beginPath();//Pupille
             crc2.fillStyle = "red"; 
             crc2.arc(this.x + 3, this.y - 12, 2, 0, Math.PI * 2, true);
             crc2.fill();
             crc2.closePath(); 
//----Auge links
             crc2.beginPath();
             crc2.fillStyle = "white"; 
             crc2.arc(this.x -3, this.y - 12, 4, 0, Math.PI * 2, true);
             crc2.fill();
             crc2.closePath();
                
             crc2.beginPath();//Pupille
             crc2.fillStyle = "red"; 
             crc2.arc(this.x -3, this.y - 12, 2, 0, Math.PI * 2, true);
             crc2.fill();
             crc2.closePath();                        
        }//Klammer von draw()
    }//Klammer der Classe
} //Klammer vom Namespace