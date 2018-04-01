describe('K-Difference', function(){
	it('Should return 4 when input [2,4,6,8,10] and k=2', function(){
		var input = [2,4,6,8,10];
		var k = 2;
		var kDiff = new KDifference(input, k);
		var result = kDiff.getNumberOfPaires();
		expect(result).to.equal(4);
	});

	it('Should return 3 when input [1,5,3,6,8] and k=2', function(){
		var input = [1,5,3,6,8];
		var k = 2;
		var kDiff = new KDifference(input, k);
		var result = kDiff.getNumberOfPaires();
		expect(result).to.equal(3);
	});

	it('Should return 0 when input [1,2,5,6] and k=2', function(){
		var input = [1,2,5,6];
		var k = 2;
		var kDiff = new KDifference(input, k);
		var result = kDiff.getNumberOfPaires();
		expect(result).to.equal(0);
	});
});