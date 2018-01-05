function KDifference(inputArr, k) {
    var paires = [];
    var compute = function (inputArr, k) {
        var numberRead = {};
        var paires = [];
        inputArr.forEach(function(number) {
            var greaterNumberToFind = number + 2;
            var lesserNumberToFind = number > 2 ? number - 2 : undefined;
            var paireFound;
            if(numberRead[greaterNumberToFind]) {
                paireFound = {};
                paireFound[greaterNumberToFind] = number;
                paires.push(paireFound);
            }
            if(lesserNumberToFind !== undefined && numberRead[lesserNumberToFind]) {
                paireFound = {};
                paireFound[lesserNumberToFind] = number;
                paires.push(paireFound);
            }
            numberRead[number] = 1;
        });
        console.log(paires);
        return paires;
    };
    paires = compute(inputArr, k);
    this.getNumberOfPaires = function() {
        return paires.length;
    };
    this.getPaires = function() {
        return this.paires;
    };
}
