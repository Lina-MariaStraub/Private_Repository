var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Luftblasen Zittrig dunkelblau bzw random
var L11_Canvas;
(function (L11_Canvas) {
    var BubbleZittrig = (function (_super) {
        __extends(BubbleZittrig, _super);
        /*x: number;
        y: number;
        radius: number;*/
        function BubbleZittrig(_color) {
            _super.call(this, _color);
        }
        BubbleZittrig.prototype.zufallPosition = function () {
            this.x = Math.random() * L11_Canvas.crc2.canvas.width;
            this.y = Math.random() * L11_Canvas.crc2.canvas.height;
            this.radius = Math.random() * 10;
        };
        BubbleZittrig.prototype.move = function () {
            this.x += Math.random() * 4 - 4;
            this.y += Math.random() * 4 - 4;
        };
        BubbleZittrig.prototype.draw = function () {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = this.color; //dunkelblau in animation
            L11_Canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        };
        return BubbleZittrig;
    }(L11_Canvas.BewegenObjekte));
    L11_Canvas.BubbleZittrig = BubbleZittrig;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=luftblasenBlau.js.map