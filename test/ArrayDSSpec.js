describe('ArrayDS', () => {
	describe('reverseArray', () => {
		it('Should return [1] when input array=[1]', () => {
			let numArr = [1];
			const result = ArrayDS.reverseArray(numArr);
			expect(result).to.deep.equal([1]);
		});
		it('Should return [] when input array=[]', () => {
			let numArr = [];
			const result = ArrayDS.reverseArray(numArr);
			expect(result).to.deep.equal([]);
		});
		it('Should return [8, 7, 5, 4, 1] when input array=[1, 4, 5, 7, 8]', () => {
			let numArr = [1, 4, 5, 7, 8];
			const result = ArrayDS.reverseArray(numArr);
			expect(result).to.deep.equal([8, 7, 5, 4, 1]);
		});
		it('Should return [8, 7, 5, 4, 1, 9] when input array=[9, 1, 4, 5, 7, 8]', () => {
			let numArr = [9, 1, 4, 5, 7, 8];
			const result = ArrayDS.reverseArray(numArr);
			expect(result).to.deep.equal([8, 7, 5, 4, 1, 9]);
		});
	});
});