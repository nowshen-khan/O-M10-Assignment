//1 done
function calculateSum(a, b) {
	let sum = a + b;
	return sum;
}

//2 done
function isEven(number) {
	if (number % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

//3 not done
function findMax(arr) {
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

//4 not done
function reverseString() {
	let str = prompt("Enter a string: ");
	let revStr = str.split("").reverse().join("");
	return revStr;
}

//5 not done
function filterOddNumber() {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let oddNum = arr.filter(function (num) {
		return num % 2 != 0;
	});
	return oddNum;
}

//6 done
function sumArray() {
	let arr = [1, 2, 3, 4, 5];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
}

//7 done
function sortArray() {
	let arr = [1, 2, 3, 4, 5];
	let sortedArr = arr.sort(function (a, b) {
		return a - b;
	});
}

//8 done
function capitalizeFirstLetter() {
	let str = prompt("Enter a string: ");
	let firstLetter = str[0].toUpperCase();
	let restOfStr = str.slice(1);
	let capitalizedStr = firstLetter + restOfStr;
}
