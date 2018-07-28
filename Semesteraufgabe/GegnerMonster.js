var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Semesteraufgabe;
(function (Semesteraufgabe) {
    var GreenMonster = (function (_super) {
        __extends(GreenMonster, _super);
        function GreenMonster(_x, _y) {
            _super.call(this, _x, _y);
            console.log("Monster erzeugen");
        }
        GreenMonster.prototype.draw = function () {
            //Monster---------------------------------------------------------------------      
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#006b27";
            Semesteraufgabe.crc2.strokeStyle = "red";
            Semesteraufgabe.crc2.arc(this.x - 20, this.y - 12, 3 + 25, 180, 270);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.stroke();
            //linkes Auge des Monsters
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 12, this.y - 15, 3 + 5, 0, 2 * Math.PI); //10 ist die Kreisgr��e
            Semesteraufgabe.crc2.fillStyle = "white";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            //rechtes Auge des Monsters
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 28, this.y - 15, 3 + 5, 0, 2 * Math.PI); //10 ist die Kreisgr��e
            Semesteraufgabe.crc2.fillStyle = "white";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            // Pupille linkes Auge des Monsters
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 12, this.y - 15, 3 + 0.5, 0, 2 * Math.PI); //10 ist die Kreisgr��e
            Semesteraufgabe.crc2.fillStyle = "red";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            //Pupille rechtes Auge des Monsters
            Semesteraufgabe.crc2.moveTo(this.x + 2, this.y - 12);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.arc(this.x - 28, this.y - 15, 3 + 0.5, 0, 2 * Math.PI); //10 ist die Kreisgr��e
            Semesteraufgabe.crc2.fillStyle = "red";
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
        }; //Klammer vom draw()
        return GreenMonster;
    }(Semesteraufgabe.Gegner));
    Semesteraufgabe.GreenMonster = GreenMonster; //Klammer von der Class
})(Semesteraufgabe || (Semesteraufgabe = {})); //Klammer vom Namespace
//# sourceMappingURL=GegnerMonster.js.map