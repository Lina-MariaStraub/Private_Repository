var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//FISCHE IN ROSA
var L11_Canvas;
(function (L11_Canvas) {
    var FischSchwarm = (function (_super) {
        __extends(FischSchwarm, _super);
        function FischSchwarm(_color) {
            _super.call(this, _color);
        }
        FischSchwarm.prototype.zufallPosition = function () {
            this.x = Math.random() * L11_Canvas.crc2.canvas.width;
            this.y = Math.random() * L11_Canvas.crc2.canvas.height;
        };
        FischSchwarm.prototype.move = function () {
            this.x += 1; //Fische schwimmen von links nach rechts
            this.y += 0; //bei -3 schwimmen sie nach oben. hier aber nur waagerecht
            if (this.x > 640) {
                this.x = -50;
            }
        };
        //----FUNKTION FISCHE IN ROSA
        FischSchwarm.prototype.draw = function () {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = this.color; //ROSA
            L11_Canvas.crc2.moveTo(this.x, this.y);
            L11_Canvas.crc2.bezierCurveTo(this.x + 40, this.y, this.x + 40, this.y + 30, this.x, this.y + 30);
            L11_Canvas.crc2.moveTo(this.x, this.y + 30);
            L11_Canvas.crc2.lineTo(this.x - 30, this.y + 20);
            L11_Canvas.crc2.lineTo(this.x - 35, this.y + 35);
            L11_Canvas.crc2.lineTo(this.x - 35, this.y);
            L11_Canvas.crc2.lineTo(this.x - 30, this.y + 10);
            L11_Canvas.crc2.lineTo(this.x, this.y);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        };
        return FischSchwarm;
    }(L11_Canvas.BewegenObjekte));
    L11_Canvas.FischSchwarm = FischSchwarm;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=fischRosa.js.map