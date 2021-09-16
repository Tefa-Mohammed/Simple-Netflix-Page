// =====SIGN UP VARIABLES======
let userFirstNameInput = document.getElementById('firstName');
let userLastNameInput = document.getElementById('lastName');
let userEmailInput = document.getElementById('email');
let userPasswordInput = document.getElementById('password');
// =====LOG IN VARIABLES======
let emailInput = document.getElementById('loginEmail');
let passwordInput = document.getElementById('loginPass');
let loginBtn = document.getElementById('loginBtn');
let emptyMsg = document.getElementById('emptyMsg');
let wrongMsg = document.getElementById('wrongMsg');
let signMsg = document.getElementById('signMsg');
// ===LOCALSTORAGE ARRAY===
let userInfoArr;

if (localStorage.getItem('users') == null) { // IF LOCALSTORAGE IS EMPTY
	userInfoArr = []; // MAKE A NEW ARRAY
} else {
	userInfoArr = JSON.parse(localStorage.getItem('users')); // ELSE .. PUT THE USER ITEMS INTO MY ARRAY (userInfoArr) 
}

// =====START SIGN UP FUNCTIONS======
function signup() {
	userInputsValidation();
	isExist();
	if (userInputsValidation() == true && isExist() == false) {
		let userDetails = {
			firstName: userFirstNameInput.value,
			lastName: userLastNameInput.value,
			email: userEmailInput.value,
			password: userPasswordInput.value
		}
		userInfoArr.push(userDetails);
		localStorage.setItem('users', JSON.stringify(userInfoArr));

		let confirmMsg = document.getElementById('confirmMsg');
		let tryAgainMsg = document.getElementById('tryAgainMsg');
		confirmMsg.classList.replace('d-none', 'd-block');
		tryAgainMsg.classList.replace('d-block', 'd-none');
		accountExistMsg.classList.replace('d-block', 'd-none')
	}
	else if (isExist() == true) {
		let confirmMsg = document.getElementById('confirmMsg');
		let tryAgainMsg = document.getElementById('tryAgainMsg');
		let accountExistMsg = document.getElementById('accountExistMsg');

		userFirstNameInput.classList.remove('is-valid');
		userLastNameInput.classList.remove('is-valid');
		userEmailInput.classList.remove('is-valid');
		userPasswordInput.classList.remove('is-valid');
		accountExistMsg.classList.replace('d-none', 'd-block')
		confirmMsg.classList.replace('d-block', 'd-none');
		tryAgainMsg.classList.replace('d-block', 'd-none');
	}
	else {
		let tryAgainMsg = document.getElementById('tryAgainMsg');
		let confirmMsg = document.getElementById('confirmMsg');

		confirmMsg.classList.replace('d-block', 'd-none');
		tryAgainMsg.classList.replace('d-none', 'd-block');
	}
}
// =====INPUTS VALIDATION=====
function firstNameValidation() {
	let firstNameMsg = document.getElementById('firstNameMsg');
	let regex = /^[A-Za-z]{3,10}$/g;
	if (regex.test(userFirstNameInput.value) == true && userFirstNameInput.value != "") {
		userFirstNameInput.classList.add('is-valid');
		userFirstNameInput.classList.remove('is-invalid');
		firstNameMsg.classList.replace('d-block', 'd-none');
		return true
	} else {
		userFirstNameInput.classList.add('is-invalid');
		userFirstNameInput.classList.remove('is-valid');
		firstNameMsg.classList.replace('d-none', 'd-block');
		return false
	}
}

function LastNameValidation() {
	let lastNameMsg = document.getElementById('lastNameMsg');
	let regex = /^[A-Za-z]{3,10}$/g;
	if (regex.test(userLastNameInput.value) == true && userLastNameInput.value != "") {
		userLastNameInput.classList.add('is-valid');
		userLastNameInput.classList.remove('is-invalid');
		lastNameMsg.classList.replace('d-block', 'd-none');
		return true
	} else {
		userLastNameInput.classList.add('is-invalid');
		userLastNameInput.classList.remove('is-valid');
		lastNameMsg.classList.replace('d-none', 'd-block');
		return false
	}
}
function emailValidation() {
	let emailMsg = document.getElementById('emailMsg');

	let regex = /^[a-zA-Z]{3,15}([0-9]{3,5})?@[a-z]{5,10}(\.com)$/;
	if (regex.test(userEmailInput.value) == true && userEmailInput.value != "") {
		userEmailInput.classList.add('is-valid');
		userEmailInput.classList.remove('is-invalid');
		emailMsg.classList.replace('d-block', 'd-none');
		return true
	} else {
		userEmailInput.classList.add('is-invalid');
		userEmailInput.classList.remove('is-valid');
		emailMsg.classList.replace('d-none', 'd-block');
		return false
	}
}
function passwordValidation() {
	let passMsg = document.getElementById('passMsg');

	let regex = /^.{5,20}$/;
	if (regex.test(userPasswordInput.value) == true && userPasswordInput.value != "") {
		userPasswordInput.classList.add('is-valid');
		userPasswordInput.classList.remove('is-invalid');
		passMsg.classList.replace('d-block', 'd-none');
		return true
	} else {
		userPasswordInput.classList.add('is-invalid');
		userPasswordInput.classList.remove('is-valid');
		passMsg.classList.replace('d-none', 'd-block');
		return false
	}
}
// ==MAIN VALIDATION FUNCTION===
function userInputsValidation() {
	firstNameValidation();
	LastNameValidation();
	emailValidation();
	passwordValidation();
	if (firstNameValidation() == true && LastNameValidation() == true && emailValidation() == true && passwordValidation() == true) {
		return true
	} else {
		return false
	}
}
// ===If there is a duplicate email in the localStorage====
function isExist() {
	for (var i = 0; i < userInfoArr.length; i++) {
		if (userInfoArr[i].email.toLowerCase() === userEmailInput.value.toLowerCase()) {
			userFirstNameInput.classList.remove('is-valid');
			userLastNameInput.classList.remove('is-valid');
			userEmailInput.classList.remove('is-valid');
			userPasswordInput.classList.remove('is-valid');
			return true;
		}
	}
	return false;
}
// ====TO CANCEL REFRESH===
document.getElementById('signupBtn').addEventListener('click', function (e) {
	e.preventDefault();
})
// =====END SIGN UP FUNCTIONS======

// =====START LOG IN FUNCTIONS======
function login() {
	if (emailInput.value == "" && passwordInput.value == "") {
		signMsg.classList.replace('d-block', 'd-none');
		emptyMsg.classList.replace('d-none', 'd-block');
		return false
	}

	if (localStorage.getItem('users') == null) {
		emptyMsg.classList.replace('d-block', 'd-none');
		signMsg.classList.replace('d-none', 'd-block');
	}

	for (var i = 0; i < userInfoArr.length; i++) {
		if (userInfoArr[i].email.toLowerCase() == emailInput.value.toLowerCase()
			&& userInfoArr[i].password.toLowerCase() == passwordInput.value.toLowerCase()) {
			localStorage.setItem('firstName', userInfoArr[i].firstName);
			localStorage.setItem('lastName', userInfoArr[i].lastName);
			loginBtn.setAttribute('href', '../index.html');
		}
		else {
			emptyMsg.classList.replace('d-block', 'd-none');
			signMsg.classList.replace('d-block', 'd-none');
			wrongMsg.classList.replace('d-none', 'd-block');
		}
	}
}
// ====TO CANCEL REFRESH===
loginBtn.addEventListener('click', function (e) {
	e.preventDefault();
})
// =====END LOG IN FUNCTIONS======
