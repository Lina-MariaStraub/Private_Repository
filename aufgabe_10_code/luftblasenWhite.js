//Weisse Luftblasen auf einer Linie
var L09_Canvas;
(function (L09_Canvas) {
    var Blasen = (function () {
        function Blasen() {
        }
        Blasen.prototype.move = function () {
            this.x += 0; //auf der x achse keine bewegung
            this.y += -2; //deswegen steigen sie nach oben
        };
        Blasen.prototype.zeichneLuftblasenWeiss = function () {
            L09_Canvas.ctx.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(255,255,255)";
            L09_Canvas.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L09_Canvas.crc2.closePath();
            L09_Canvas.ctx.stroke();
            L09_Canvas.crc2.fill();
        };
        return Blasen;
    }());
    L09_Canvas.Blasen = Blasen;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=luftblasenWhite.js.map