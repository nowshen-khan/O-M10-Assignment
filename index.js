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

//3 done
function findMax(num) {
	let myArr = String(num)
		.split(",")
		.map((num) => {
			return Number(num);
		});
	let max = myArr[0]; 

	for (let i = 1; i < myArr.length; i++) {
		if (myArr[i] > max) {
			max = myArr[i];
		}
	}
	return max;
}

//4 done
function reverseString(str) {
	let revStr = str.split("").reverse().join("");
	return revStr;
}

//5 done
function filterOddNumber(num) {
	let myArr = String(num)
		.split("")
		.map((num) => {
			return Number(num);
		});
	let oddNum = myArr.filter(function (num) {
		return num % 2 != 0;
	});
	return oddNum;
}

//6 done
function sumArray(num) {
	let myArr = String(num)
		.split("")
		.map((num) => {
			return Number(num);
		});
	let sum = 0;
	for (let i = 0; i < myArr.length; i++) {
		sum += myArr[i];
	}
	return sum;
}

//7 done
function sortArray(num) {
	let myArr = String(num)
		.split("")
		.map((num) => {
			return Number(num);
		});
	myArr.sort(function (a, b) {
		return a - b;
	});
	return myArr;
}
//8 done
function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
