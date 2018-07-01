//Weisse Luftblasen auf einer Linie
namespace L11_Canvas {
    export class Blasen extends BewegenObjekte {
        /* Braucht man hier nicht da siehe "Fischschwarm in FischeRosa
        x: number;
        y: number;
        radius: number;*/       
        constructor (_color:string) {
            super (_color); //NEU!!!!
        }       
        zufallPosition():void {
            this.x = ( 110 );
            this.y = Math.random() * 370;
            this.radius = Math.random() * 10;
        }
        move(): void {
            this.x += 0; //auf der x achse keine bewegung
            this.y += -2; //deswegen steigen sie nach oben
            
            if (this.y < 0) {
                this.y=400;
            }
        }
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}

