//Luftblasen Zittrig dunkelblau bzw random
namespace L11_Canvas {
    export class BubbleZittrig extends BewegenObjekte {
        /*x: number;
        y: number;
        radius: number;*/   
        constructor (_color:string) {
            super(_color);
        }
        zufallPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
            this.radius = Math.random() * 10;
        }
        move(): void {
            this.x += Math.random() * 4 -4;
            this.y += Math.random() * 4 -4;
        }
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color; //dunkelblau in animation
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
  }




