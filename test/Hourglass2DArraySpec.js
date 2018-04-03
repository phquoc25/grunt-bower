describe('Hourglass2DArray', () => {
	it('Should return 19 when input array=[]', () => {
		let numArr = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0]
        ];
        
		const result = Hourglass2DArray.array2D(numArr);
		expect(result).to.equal(19);
	});
});