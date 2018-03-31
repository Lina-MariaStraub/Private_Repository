var Cows;
(function (Cows) {
    var nums = [2, 6, 5];
    for (var i = 0; i < nums.length; i++) {
        var result = createCall("m", nums[i]);
        console.log(result);
    }
    function createCall(start, length) {
        for (var k = length; k > 0; k--) {
            if (k == 1 || k == length / 2)
                start += "h";
            start += "u";
        }
        return start;
    }
})(Cows || (Cows = {}));
//# sourceMappingURL=Cows.js.map