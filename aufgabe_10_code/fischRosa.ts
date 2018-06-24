//FISCHE IN ROSA
namespace L09_Canvas {
    export class FischSchwarm {
        x: number;
        y: number;

        move(): void {
            this.x += 1;//Fische schwimmen von links nach rechts
            this.y += 0;//bei -3 schwimmen sie nach oben. hier aber nur waagerecht
        }
//----FUNKTION FISCHE IN ROSA
            draw(): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(255,102,153)"; //ROSA
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x + 40, this.y, this.x + 40, this.y + 30, this.x, this.y + 30);
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x - 30, this.y + 20);
            crc2.lineTo(this.x - 35, this.y + 35);
            crc2.lineTo(this.x - 35, this.y);
            crc2.lineTo(this.x - 30, this.y + 10);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            ctx.stroke();
            ctx.fill();
        }
    }
}

