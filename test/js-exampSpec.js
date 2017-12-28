describe('add', function () {
    it('should return 2 when add(1,1)', function () {
        var result = add(1, 1);
        expect(result).to.be.equal(2);
    });

    it('should throw "Invalid parameter" when at least one input is not a number', function () {
        try {
            add('a', 1);
        } catch (err) {
            expect(err).to.be.an('error');
            expect(err.message).to.equal('Invalid parameter');
        }
    });
    it('should throw "Invalid parameter" when at least one input is null', function () {
        try {
            add(1, null);
        } catch (err) {
            expect(err).to.be.an('error');
            expect(err.message).to.equal('Invalid parameter');
        }
    });
    it('should throw "Invalid parameter" when at least one input is undefine', function () {
        try {
            add(1);
        } catch (err) {
            expect(err).to.be.an('error');
            expect(err.message).to.equal('Invalid parameter');
        }
    });
});
