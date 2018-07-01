var L11_Canvas;
(function (L11_Canvas) {
    var BewegenObjekte = (function () {
        function BewegenObjekte(_color) {
            this.zufallPosition();
            this.color = _color;
        }
        BewegenObjekte.prototype.zufallPosition = function () { };
        BewegenObjekte.prototype.move = function () { };
        BewegenObjekte.prototype.draw = function () { };
        return BewegenObjekte;
    }());
    L11_Canvas.BewegenObjekte = BewegenObjekte;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=BewegenObjekte.js.map