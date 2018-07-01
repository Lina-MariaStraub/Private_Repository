namespace L11_Canvas {

    export class BewegenObjekte {

        x: number;
        y: number;
        color: string;
        radius: number;

        constructor( _color: string ) {
            this.zufallPosition();
            this.color = _color;
        }

        zufallPosition(): void { }
        move(): void { }
        draw(): void { }
    }
}