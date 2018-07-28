var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Semesteraufgabe;
(function (Semesteraufgabe) {
    var Spinnen = (function (_super) {
        __extends(Spinnen, _super);
        function Spinnen(_x, _y) {
            _super.call(this, _x, _y);
            console.log("Spinnen erzeugen");
        }
        Spinnen.prototype.draw = function () {
            //Spinne-------------------------------------------------------------------------             
            //Linke Spinnenbeine
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x - 30, this.y - 30);
            Semesteraufgabe.crc2.lineTo(this.x - 30, this.y - 35);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x - 30, this.y - 10);
            Semesteraufgabe.crc2.lineTo(this.x - 40, this.y - 10);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x - 30, this.y + 10);
            Semesteraufgabe.crc2.lineTo(this.x - 40, this.y + 10);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x - 30, this.y + 30);
            Semesteraufgabe.crc2.lineTo(this.x - 30, this.y + 35);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.stroke();
            //Rechte Spinnenbeine
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 30, this.y - 30);
            Semesteraufgabe.crc2.lineTo(this.x + 30, this.y - 35);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 30, this.y - 10);
            Semesteraufgabe.crc2.lineTo(this.x + 40, this.y - 10);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 30, this.y + 10);
            Semesteraufgabe.crc2.lineTo(this.x + 40, this.y + 10);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 30, this.y + 30);
            Semesteraufgabe.crc2.lineTo(this.x + 30, this.y + 35);
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.stroke();
            Semesteraufgabe.crc2.fillStyle = "black";
            //Spinnenk�rper           
            Semesteraufgabe.crc2.fillStyle = "black";
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x, this.y - 10, 15, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.arc(this.x, this.y + 12, 20, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.beginPath();
            //----Auge rechts
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "white";
            Semesteraufgabe.crc2.arc(this.x + 3, this.y - 12, 4, 0, Math.PI * 2, true);
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.beginPath(); //Pupille
            Semesteraufgabe.crc2.fillStyle = "red";
            Semesteraufgabe.crc2.arc(this.x + 3, this.y - 12, 2, 0, Math.PI * 2, true);
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            //----Auge links
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "white";
            Semesteraufgabe.crc2.arc(this.x - 3, this.y - 12, 4, 0, Math.PI * 2, true);
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.beginPath(); //Pupille
            Semesteraufgabe.crc2.fillStyle = "red";
            Semesteraufgabe.crc2.arc(this.x - 3, this.y - 12, 2, 0, Math.PI * 2, true);
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
        }; //Klammer von draw()
        return Spinnen;
    }(Semesteraufgabe.Gegner));
    Semesteraufgabe.Spinnen = Spinnen; //Klammer der Classe
})(Semesteraufgabe || (Semesteraufgabe = {})); //Klammer vom Namespace
//# sourceMappingURL=GegnerSpinnen.js.map