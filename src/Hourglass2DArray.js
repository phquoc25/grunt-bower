/**
 * Context 
Given a 6 x 6 2D Array, A:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation:
a b c
  d
e f g
There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.

Task 
Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Input Format

There are 6 lines of input, where each line contains 6 space-separated integers describing 2D Array A; every value in A will be in the inclusive range of -9 to 9.

Constraints
-9 <= A[i][j] <= 9
0 <= i,j <= 5

Output Format

Print the largest (maximum) hourglass sum found in A.

Sample Input
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output

19
Explanation

A contains the following hourglasses:

1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0
The hourglass with the maximum sum (19) is:

2 4 4
  2
1 2 4
 */
class Hourglass2DArray {
  static array2D(numArr) {
	//[k = 1] [k = 2] [k = 3] // i = 1
	//        [k = 2]         // i = 2
	//[k = 1] [k = 2] [k = 3] // i = 1
	let max = Number.MIN_VALUE;
	let tmp;
	for(let i = 0; i < 4; i++) {
	  for(let j = 0; j < 4; j++) {
		tmp = numArr[i][j] + numArr[i][j + 1] + numArr[i][j + 2] 		 // row 1
		+ numArr[i + 1][j + 1] 									 		 // row 2
		+ numArr[i + 2][j] + numArr[i + 2][j + 1] + numArr[i + 2][j + 2]; // row 3
		console.log("i = " + i + ", j = " + j + "==> sum = " + tmp);
		max = Math.max(tmp, max);
	  }
	}
	return max;
  }
}
