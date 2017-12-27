function add(a, b) {
    if(a === undefined || isNaN(a) || b === undefined || isNaN(b)) {
        throw new TypeError('Invalid parameter');
    }
    return a + b;
}
