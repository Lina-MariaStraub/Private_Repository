namespace Semesteraufgabe {
    export class Gegner {

        x: number;
        y: number;
        radius: number = 7;
        z: number;
        width: number;
        height: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.width = 50;
            this.height = 50;
        }
        draw(): void {  
        }
//Trefferbereich bei Gegnern
        treffer(x: number, y: number): boolean {//Bereich in dem ein Gegner angeklickt werden kann 
            //verschieben von der hitbox ins zentrum
            let mittlereXAchse: number = this.x - this.width / 2;
            let mittlereYAchse: number = this.y - this.height / 2;
            let treffer: boolean = false;
            if (x <= mittlereXAchse + this.width && x >= mittlereXAchse &&
                y <= mittlereYAchse + this.height && y >= mittlereYAchse) {
                treffer = true;
            }
            return treffer;
        }//Klammer hit
    }//Klammer von der Class
}//Klammer vom Namespace