
function isPalindrome(str){
	const revString = str.split('').reverse().join('');
	return revString === str;
}

const output = isPalindrome('Emmanuel');
console.log(output);