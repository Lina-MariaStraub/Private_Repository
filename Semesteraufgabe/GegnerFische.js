var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Semesteraufgabe;
(function (Semesteraufgabe) {
    var Fische = (function (_super) {
        __extends(Fische, _super);
        function Fische(_x, _y) {
            _super.call(this, _x, _y);
            console.log("Fische erzeugen");
        }
        Fische.prototype.draw = function () {
            //Fische-----------------------------------------------------------------          
            Semesteraufgabe.crc2.strokeStyle = "black";
            Semesteraufgabe.crc2.fillStyle = "#720606";
            Semesteraufgabe.crc2.lineWidth = 0.5;
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.bezierCurveTo(this.x, this.y, this.x + 10, this.y - 35, this.x + 50, this.y - 3);
            Semesteraufgabe.crc2.lineTo(this.x + 55, this.y - 15);
            Semesteraufgabe.crc2.bezierCurveTo(this.x + 55, this.y - 15, this.x + 50, this.y - 5, this.x + 55, this.y);
            Semesteraufgabe.crc2.bezierCurveTo(this.x + 55, this.y, this.x + 50, this.y + 5, this.x + 55, this.y + 15);
            Semesteraufgabe.crc2.lineTo(this.x + 50, this.y + 5);
            Semesteraufgabe.crc2.bezierCurveTo(this.x + 55, this.y + 5, this.x + 10, this.y + 35, this.x, this.y);
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            //----Auge des Fisches
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "white";
            Semesteraufgabe.crc2.arc(this.x + 15, this.y - 2, 5, 0, Math.PI * 2, true);
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "red";
            Semesteraufgabe.crc2.arc(this.x + 15, this.y - 2, 3, 0, Math.PI * 2, true);
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
        }; //Klammer vom draw()
        return Fische;
    }(Semesteraufgabe.Gegner));
    Semesteraufgabe.Fische = Fische; //Klammer von der Class
})(Semesteraufgabe || (Semesteraufgabe = {})); //Klammer vom Namespace
//# sourceMappingURL=GegnerFische.js.map