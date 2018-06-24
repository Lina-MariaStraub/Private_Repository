//Weisse Luftblasen auf einer Linie
namespace L09_Canvas {
    export class Blasen {
        x: number;
        y: number;
        radius: number;

        move(): void {
            this.x += 0; //auf der x achse keine bewegung
            this.y += -2; //deswegen steigen sie nach oben
        }
        drawBubble(): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(255,255,255)";
            ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }
    }
}
