//FISCHE IN ROSA
var L09_Canvas;
(function (L09_Canvas) {
    var FischSchwarm = (function () {
        function FischSchwarm() {
        }
        FischSchwarm.prototype.move = function () {
            this.x += 1; //Fische schwimmen von links nach rechts
            this.y += 0; //bei -3 schwimmen sie nach oben. hier aber nur waagerecht
        };
        //----FUNKTION FISCHE IN ROSA
        FischSchwarm.prototype.draw = function () {
            L09_Canvas.ctx.beginPath();
            L09_Canvas.crc2.fillStyle = "rgb(255,102,153)"; //ROSA
            L09_Canvas.ctx.moveTo(this.x, this.y);
            L09_Canvas.ctx.bezierCurveTo(this.x + 40, this.y, this.x + 40, this.y + 30, this.x, this.y + 30);
            L09_Canvas.crc2.moveTo(this.x, this.y + 30);
            L09_Canvas.crc2.lineTo(this.x - 30, this.y + 20);
            L09_Canvas.crc2.lineTo(this.x - 35, this.y + 35);
            L09_Canvas.crc2.lineTo(this.x - 35, this.y);
            L09_Canvas.crc2.lineTo(this.x - 30, this.y + 10);
            L09_Canvas.crc2.lineTo(this.x, this.y);
            L09_Canvas.crc2.closePath();
            L09_Canvas.ctx.stroke();
            L09_Canvas.ctx.fill();
        };
        return FischSchwarm;
    }());
    L09_Canvas.FischSchwarm = FischSchwarm;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=fischRosa.js.map