// PROBLEM
/**Given an array of integers, find the sum of its elements.

Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Output Format

Print the sum of the array's elements as a single integer.

Sample Input

6
1 2 3 4 5 10 11
Sample Output

31
Explanation

We print the sum of the array's elements: 1 + 2 + 3 + 4 + 10 + 11 = 31
*/

// SOLUTION
/**
 * Given the length of array is n
 * Scenarios:
 * 1. n = 0 ==> result = 0
 * 2. n = 1 ==> result = array[0]
 * 3. n > 1:
 *  1. We can sovle it with one for loop from the zero index of array to the end
 *  2. One for loop from the begining to the middle of the array would improve the performance ==> (selected)
 */
class SimpleArraySum {
	constructor(n, numberArr) {
		this.n = n;
		this.numberArr = numberArr;
	}

	calculateSum() {
		if(this.n === 0) {
			return 0;
		}
		if(this.n === 1) {
			return this.numberArr[0];
		}
		let middle = Math.floor(this.n / 2);
		let sum = 0;
		let visited = [];
		for(let i = 0; i < middle; i++) {
			sum = sum + this.numberArr[i] + this.numberArr[this.n - i - 1];
			visited[i] = true;
			visited[this.n - i - 1] = true;
		}
		if(!visited[middle]) {
			sum += this.numberArr[middle];
		}
		return sum;
	}
}

class AdvanceArraySum extends SimpleArraySum {
	calculateSum() {
		console.log("Do nothing");
	}
}