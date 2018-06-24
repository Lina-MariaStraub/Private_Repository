//Luftblasen Zittrig dunkelblau
var L09_Canvas;
(function (L09_Canvas) {
    var BubbleZittrig = (function () {
        function BubbleZittrig() {
        }
        BubbleZittrig.prototype.move = function () {
            this.x += Math.random() * 4 - 4;
            this.y += Math.random() * 4 - 4;
        };
        BubbleZittrig.prototype.zeichneLuftblasenBlau = function () {
            L09_Canvas.ctx.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(51, 76, 170)"; //dunkelblau
            L09_Canvas.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L09_Canvas.crc2.closePath();
            L09_Canvas.ctx.stroke();
            L09_Canvas.crc2.fill();
        };
        return BubbleZittrig;
    }());
    L09_Canvas.BubbleZittrig = BubbleZittrig;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=luftblasenBlau.js.map