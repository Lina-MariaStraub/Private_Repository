//FISCHE IN ROSA
namespace L11_Canvas {
    export class FischSchwarm extends BewegenObjekte {
        
        constructor (_color:string) {
            super(_color);
         }
        
        zufallPosition() : void {
             this.x = Math.random() * crc2.canvas.width;
             this.y = Math.random() * crc2.canvas.height;
            }
   

        move(): void {
            this.x += 1;//Fische schwimmen von links nach rechts
            this.y += 0;//bei -3 schwimmen sie nach oben. hier aber nur waagerecht
            
            if (this.x > 640) {
                this.x =-50;
                }
        }
//----FUNKTION FISCHE IN ROSA
            draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color; //ROSA
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 40, this.y, this.x + 40, this.y + 30, this.x, this.y + 30);
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x - 30, this.y + 20);
            crc2.lineTo(this.x - 35, this.y + 35);
            crc2.lineTo(this.x - 35, this.y);
            crc2.lineTo(this.x - 30, this.y + 10);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}



