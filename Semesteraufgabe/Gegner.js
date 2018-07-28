var Semesteraufgabe;
(function (Semesteraufgabe) {
    var Gegner = (function () {
        function Gegner(_x, _y) {
            this.radius = 7;
            this.x = _x;
            this.y = _y;
            this.width = 50;
            this.height = 50;
        }
        Gegner.prototype.draw = function () {
        };
        //Trefferbereich bei Gegnern
        Gegner.prototype.treffer = function (x, y) {
            //verschieben von der hitbox ins zentrum
            var mittlereXAchse = this.x - this.width / 2;
            var mittlereYAchse = this.y - this.height / 2;
            var treffer = false;
            if (x <= mittlereXAchse + this.width && x >= mittlereXAchse &&
                y <= mittlereYAchse + this.height && y >= mittlereYAchse) {
                treffer = true;
            }
            return treffer;
        }; //Klammer hit
        return Gegner;
    }());
    Semesteraufgabe.Gegner = Gegner; //Klammer von der Class
})(Semesteraufgabe || (Semesteraufgabe = {})); //Klammer vom Namespace
//# sourceMappingURL=Gegner.js.map