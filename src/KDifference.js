function kDifference(inputArr, k) {
    var numberRead = {};
    var counter = 0;
    inputArr.forEach(function(number) {
        var greaterNumberToFind = number + 2;
        var lesserNumberToFind = number > 2 ? number - 2 : undefined;
        if(numberRead[greaterNumberToFind]) {
            counter++;
        }
        if(lesserNumberToFind !== undefined && numberRead[lesserNumberToFind]) {
            counter++;
        }
        numberRead[number] = 1;
    });
    return counter;
}