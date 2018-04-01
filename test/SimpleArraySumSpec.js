describe('SimpleArraySum', () => {
	it('Should return 1 when input [1] and k=1', () => {
		const simpleArrSum = new SimpleArraySum(1, [1]);
		let result = simpleArrSum.calculateSum();
		expect(result).to.equal(1);
	});
});