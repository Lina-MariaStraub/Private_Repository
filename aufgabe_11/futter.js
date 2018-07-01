var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_Canvas;
(function (L11_Canvas) {
    var Futter = (function (_super) {
        __extends(Futter, _super);
        function Futter(_color) {
            _super.call(this, _color);
        }
        Futter.prototype.zufallPosition = function () {
            this.x = Math.random() * L11_Canvas.crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 7;
        };
        Futter.prototype.move = function () {
            this.x += 0;
            if (this.y < 600) {
                this.y += 4;
            }
            else if (this.y >= 630) {
                this.y += 0;
            }
        };
        Futter.prototype.draw = function () {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = this.color;
            L11_Canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        };
        return Futter;
    }(L11_Canvas.BewegenObjekte));
    L11_Canvas.Futter = Futter;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=futter.js.map