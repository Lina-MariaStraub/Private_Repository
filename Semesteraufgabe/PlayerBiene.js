var Semesteraufgabe;
(function (Semesteraufgabe) {
    var PlayerBiene = (function () {
        function PlayerBiene(_x, _y) {
            this.deadGegner = 0;
            this.x = _x;
            this.y = _y;
            this.geschwindigkeit = 5; //5 bei Laptop gut..bei smartphone leider zu schnell
            this.setZielPosition();
            this.active = true;
            console.log("Create Monster");
        } //Klammer constructor
        PlayerBiene.prototype.stop = function () {
            this.active = false;
        };
        PlayerBiene.prototype.setZielPosition = function () {
            if (Semesteraufgabe.gegner.length == 0) {
                this.stop();
            }
            else {
                var n = Math.floor(Math.random() * (Semesteraufgabe.gegner.length - 1));
                this.zielGegner = Semesteraufgabe.gegner[n]; //die n-te Stelle des Arrays(ein Monster) wird von der Biene als Ziel angesehen
                this.xZiel = Semesteraufgabe.gegner[n].x + 5;
                this.yZiel = Semesteraufgabe.gegner[n].y - 20;
                var xEntfernung = this.xZiel - this.x; //Richtung, in welche sich die Biene bewegen soll angeben
                var yEntfernung = this.yZiel - this.y;
                this.xRichtung = xEntfernung / (Math.sqrt(xEntfernung * xEntfernung + yEntfernung * yEntfernung));
                this.yRichtung = yEntfernung / (Math.sqrt(xEntfernung * xEntfernung + yEntfernung * yEntfernung));
            }
        };
        PlayerBiene.prototype.update = function () {
            if (this.active == true) {
                this.move(); //bewegt sich
                this.neuesObjektAnsteuernWennAltesWeg(); //Biene steuert Monster an, wenn dieses Weg ist dann zu neuem Monster
            }
            this.draw(); //zeichnet Biene
        };
        PlayerBiene.prototype.neuesObjektAnsteuernWennAltesWeg = function () {
            var maxDistanz = 10;
            var xEntfernung = this.xZiel - this.x; //Zielberechnung durch der Differenz der aktuellen Position und der eines Monsters
            var yEntfernung = this.yZiel - this.y;
            if (Math.abs(xEntfernung) <= maxDistanz && Math.abs(yEntfernung) <= maxDistanz) {
                Semesteraufgabe.gegner.splice(Semesteraufgabe.gegner.indexOf(this.zielGegner), 1);
                this.setZielPosition();
                this.deadGegner += 1;
            }
            if (this.deadGegner == 3) {
                this.stop(); //Dann Spiel gestopppt und Popup geht auf
                alert("Schade. Du hast zu wenige Feinde vernichtet. " + "Versuch es nochmal und lade das Spiel neu.");
            }
        };
        PlayerBiene.prototype.neuesZielAnstreben = function (_i) {
            if (_i == this.zielGegner) {
                this.setZielPosition();
            }
        };
        PlayerBiene.prototype.move = function () {
            this.x += this.xRichtung * this.geschwindigkeit;
            this.y += this.yRichtung * this.geschwindigkeit;
        };
        //Zeichnung von der Biene----------------------------------------------------------------------------------       
        //Kopf der Biene in Gelb       
        PlayerBiene.prototype.draw = function () {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "yellow";
            Semesteraufgabe.crc2.strokeStyle = "black";
            Semesteraufgabe.crc2.arc(this.x - 20, this.y - 12, 28, 180, 270);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.stroke();
            //linker Fl�gel der Biene in Wei�
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 39, this.y - 45, 18, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.fillStyle = "#FFFFFF";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            //rechter Fl�gel der Biene in Wei�        
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 3, this.y - 45, 18, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.fillStyle = "white";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            //linkes Auge der Biene in Blau
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 12, this.y - 15, 8, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.fillStyle = "#d7efec";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            //rechtes Auge der Biene in Blau
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 28, this.y - 15, 8, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.fillStyle = "#d7efec";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            // Pupille linkes Auge der Biene in Schwarz
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 12, this.y - 15, 3.5, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            //Pupille rechtes Auge der Biene in Schwarz
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 28, this.y - 15, 3.5, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            //Nase/Mund der Biene in Schwarz
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 20, this.y - 0, 4.5, 0, Math.PI);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
        }; //Klammer von draw()
        return PlayerBiene;
    }());
    Semesteraufgabe.PlayerBiene = PlayerBiene; //Klammer class Monster
})(Semesteraufgabe || (Semesteraufgabe = {})); //Klammer vom Namespace
//# sourceMappingURL=PlayerBiene.js.map