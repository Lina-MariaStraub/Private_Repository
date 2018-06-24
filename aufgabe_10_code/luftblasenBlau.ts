//Luftblasen Zittrig dunkelblau
namespace L09_Canvas {
    export class BubbleZittrig {
        x: number;
        y: number;
        radius: number;

        move(): void {
            this.x += Math.random() * 4 -4;
            this.y += Math.random() * 4 -4;
        }
        zeichneLuftblasenBlau(): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(51, 76, 170)"; //dunkelblau
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }
    }
  }

