// PROBLEM
/**
An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  (you may also see it written as ).

Given an array, , of  integers, print each element in reverse order as a single line of space-separated integers.

Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

Input Format

The first line contains an integer,  (the number of integers in ). 
The second line contains  space-separated integers describing .

Constraints

Output Format

Print all  integers in  in reverse order as a single line of space-separated integers.

Sample Input 0

4
1 4 3 2
Sample Output 0

2 3 4 1
 */
class ArrayDS {
	static reverseArray(numArr) {
		let arrSize = numArr.length;
		if(arrSize < 2) {
			return numArr;
		}
		let mid = Math.floor(arrSize / 2);
		for(let i = 0; i < mid; i++) {
			ArrayDS.swap(numArr, i, arrSize - i - 1);
		}
		return numArr;
	}

	static swap(arr, indexA, indexB) {
		let tmp = arr[indexA]; 
		arr[indexA] = arr[indexB];
		arr[indexB] = tmp;
	}
}