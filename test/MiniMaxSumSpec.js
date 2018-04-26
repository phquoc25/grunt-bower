describe('MiniMaxSum', function(){
	it('Should return [0, 0] when input []', function(){
		let input = [];
		let miniMaxSum = new MiniMaxSum(input);
		let result = miniMaxSum.getMiniMaxSum();
		expect(result).to.deep.equal([0, 0]);
	});

	it('Should return [10, 14] when input [1,2,3,4,5]', function(){
		let input = [1,2,3,4,5];
		let miniMaxSum = new MiniMaxSum(input);
		let result = miniMaxSum.getMiniMaxSum();
		expect(result).to.deep.equal([10, 14]);
	});
});