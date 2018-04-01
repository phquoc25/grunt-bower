describe('SimpleArraySum', () => {
	it('Should return 0 when n=0', () => {
		const simpleArrSum = new SimpleArraySum(0, []);
		let result = simpleArrSum.calculateSum();
		expect(result).to.equal(0);
	});
	it('Should return 1 when input [1] and n=1', () => {
		const simpleArrSum = new SimpleArraySum(1, [1]);
		let result = simpleArrSum.calculateSum();
		expect(result).to.equal(1);
	});
	it('Should return 31 when input n=6 array = 1 2 3 4 10 11', () => {
		const simpleArrSum = new SimpleArraySum(6, [1, 2, 3, 4, 10, 11]);
		let result = simpleArrSum.calculateSum();
		expect(result).to.equal(31);
	});
	it('Should return 36 when input n=7 array = 1 2 3 4 5 10 11', () => {
		const simpleArrSum = new SimpleArraySum(7, [1, 2, 3, 4, 5, 10, 11]);
		let result = simpleArrSum.calculateSum();
		expect(result).to.equal(36);
	});
});