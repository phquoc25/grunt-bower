/**
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Input Format

A single line of five space-separated integers.

Constraints

Each integer is in the inclusive range [1...10^9].
Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

Our initial numbers are 1, 2, 3, 4, 5 and . We can calculate the following sums using four of the five integers:

If we sum everything except , our sum is .
If we sum everything except , our sum is .
If we sum everything except , our sum is .
If we sum everything except , our sum is .
If we sum everything except , our sum is .
 */
class MiniMaxSum {
    constructor(arrayInput) {
        this.arrayInput = arrayInput;
    }
    getMiniMaxSum(){
        const arrLen = this.arrayInput.length;
        if (arrLen === 0) {
            return [0, 0];
        }
        if (arrLen === 1) {
            return [this.arrayInput[0], this.arrayInput[0]];
        }
        if (arrLen === 2) {
            if (arrLen[0] < arrLen[1]) {
                return this.arrayInput;
            } else {
                return this.arrayInput.reverse();
            }
        }
        let min = undefined;
        let max = undefined;
        for (let i = 0; i < arrLen; i++) {
            let sum = 0;
            for (let j = 0; j < arrLen; j++) {
                if (j !== i) {
                    sum += this.arrayInput[j];
                }
            }
            if (min === undefined || sum < min) {
                min = sum;
            }

            if (max === undefined || sum > max) {
                max = sum;
            }
        }
        return [min, max];
    }
}