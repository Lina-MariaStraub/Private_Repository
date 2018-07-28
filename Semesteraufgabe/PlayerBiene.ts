namespace Semesteraufgabe {
    export class PlayerBiene {

        x: number;
        y: number;
        farbe: string;
        xZiel: number;
        yZiel: number;
        geschwindigkeit: number;
        zielGegner: Gegner;
        xRichtung: number;
        yRichtung: number;
        active: boolean;
        deadGegner: number = 0;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.geschwindigkeit = 5;//5 bei Laptop gut..bei smartphone leider zu schnell
            this.setZielPosition();
            this.active = true;

            console.log("Create Monster");
        }//Klammer constructor

        stop(): void {//wenn this.active von oben nicht mehr true
            this.active = false;
        }

        setZielPosition(): void {//Biene sucht sich aus Array zufälligen Gegner den sie ansteuert

            if (gegner.length == 0) {
                this.stop();
            }
            else {
                let n: number = Math.floor(Math.random() * (gegner.length - 1));
                this.zielGegner = gegner[n];//die n-te Stelle des Arrays(ein Monster) wird von der Biene als Ziel angesehen
                this.xZiel = gegner[n].x + 5;
                this.yZiel = gegner[n].y - 20;

                let xEntfernung: number = this.xZiel - this.x;//Richtung, in welche sich die Biene bewegen soll angeben
                let yEntfernung: number = this.yZiel - this.y;
                this.xRichtung = xEntfernung / (Math.sqrt(xEntfernung * xEntfernung + yEntfernung * yEntfernung));
                this.yRichtung = yEntfernung / (Math.sqrt(xEntfernung * xEntfernung + yEntfernung * yEntfernung));
            }
        }
        update(): void {//wenn noch nicht alle Monster entfernt sind bewegt sich Biene weiterhin u immer update der Position
            if (this.active == true) {
                this.move(); //bewegt sich
                this.neuesObjektAnsteuernWennAltesWeg(); //Biene steuert Monster an, wenn dieses Weg ist dann zu neuem Monster
            }
            this.draw(); //zeichnet Biene
        }
        neuesObjektAnsteuernWennAltesWeg(): void {

            let maxDistanz: number = 10;
            let xEntfernung: number = this.xZiel - this.x;//Zielberechnung durch der Differenz der aktuellen Position und der eines Monsters
            let yEntfernung: number = this.yZiel - this.y;

            if (Math.abs(xEntfernung) <= maxDistanz && Math.abs(yEntfernung) <= maxDistanz) {//Monster weg
             
                gegner.splice(gegner.indexOf(this.zielGegner), 1);
         
                this.setZielPosition();

                this.deadGegner += 1;
            }

            if (this.deadGegner == 3) {//Spiel vorbei wenn Biene bei 3 Gegnern war

                this.stop();//Dann Spiel gestopppt und Popup geht auf
                alert("Schade. Du hast zu wenige Feinde vernichtet. " + "Versuch es nochmal und lade das Spiel neu.");
            }
        }

        neuesZielAnstreben(_i: Gegner): void {//Wenn durch anklicken von Monster Monster verschwindet, dann wird neues Ziel angestrebt
            if (_i == this.zielGegner) {//Aufruf bei jedem Klick
                this.setZielPosition();
            }
        }

        move(): void {//wie sich Biene fortbewegen soll

            this.x += this.xRichtung * this.geschwindigkeit;
            this.y += this.yRichtung * this.geschwindigkeit;
        }       
//Zeichnung von der Biene----------------------------------------------------------------------------------       
//Kopf der Biene in Gelb       
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "black";
            crc2.arc(this.x - 20, this.y - 12, 28, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
//linker Flügel der Biene in Weiß
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 39, this.y - 45, 18, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();            
//rechter Flügel der Biene in Weiß        
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 3, this.y - 45, 18, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();           
//linkes Auge der Biene in Blau
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 12, this.y - 15, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#d7efec";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();            
//rechtes Auge der Biene in Blau
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 28, this.y - 15, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#d7efec";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();           
// Pupille linkes Auge der Biene in Schwarz
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 12, this.y - 15, 3.5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();           
//Pupille rechtes Auge der Biene in Schwarz
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 28, this.y - 15, 3.5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
//Nase/Mund der Biene in Schwarz
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.beginPath();
            crc2.arc(this.x - 20, this.y - 0, 4.5, 0,  Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }//Klammer von draw()
    }//Klammer class Monster
}//Klammer vom Namespace
