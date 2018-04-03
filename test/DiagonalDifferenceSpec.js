describe('DiagonalDifference', () => {
    it('Should return 15 when input array=[[11, 2, 4],[4, 5, 5],[10, 8, -12]]', () => {
        let numArr = [
            [11, 2, 4],
            [4, 5, 5],
            [10, 8, -12]
        ];
        const result = diagonalDifference(numArr);
        expect(result).to.deep.equal(15);
    });
});