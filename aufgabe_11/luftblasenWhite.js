var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Weisse Luftblasen auf einer Linie
var L11_Canvas;
(function (L11_Canvas) {
    var Blasen = (function (_super) {
        __extends(Blasen, _super);
        /* Braucht man hier nicht da siehe "Fischschwarm in FischeRosa
        x: number;
        y: number;
        radius: number;*/
        function Blasen(_color) {
            _super.call(this, _color); //NEU!!!!
        }
        Blasen.prototype.zufallPosition = function () {
            this.x = (110);
            this.y = Math.random() * 370;
            this.radius = Math.random() * 10;
        };
        Blasen.prototype.move = function () {
            this.x += 0; //auf der x achse keine bewegung
            this.y += -2; //deswegen steigen sie nach oben
            if (this.y < 0) {
                this.y = 400;
            }
        };
        Blasen.prototype.draw = function () {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = this.color;
            L11_Canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        };
        return Blasen;
    }(L11_Canvas.BewegenObjekte));
    L11_Canvas.Blasen = Blasen;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=luftblasenWhite.js.map