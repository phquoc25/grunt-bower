describe('add', function () {
    it('should return 2 when add(1,1)', function () {
        var result = add(1, 1);
        expect(result).to.be.equal(2);
    });

    it('should throw "Invalid parameter"', function () {
        var badfn = function () {
            throw new Error('TOTO');
        };
        expect(badfn).to.throw();
        expect(badfn).to.throw(Error);
        expect(badfn).to.throw(Error, 'TOTO');
        expect(add('a', 1)).to.throw();
    });
    it('should throw "Invalid parameter" 1', function () {
        expect(add(null, 1)).to.throw('Invalid parameter');
    });
    it('should throw "Invalid parameter" 2', function () {
        expect(add(1)).to.throw(TypeError, 'Invalid parameter');
    });
});
