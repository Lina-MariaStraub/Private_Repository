namespace L11_Canvas {

    export class Futter extends BewegenObjekte {

        constructor( _color: string ) {
            super( _color );
        }
        zufallPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 7;
        }
        move(): void {
            this.x += 0;

            if ( this.y < 600 ) {
                this.y += 4;
            }
            else if ( this.y >= 630 ) {
                this.y += 0;
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