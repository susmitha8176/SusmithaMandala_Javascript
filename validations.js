const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const dob = document.getElementById('dob');
const mobile = document.getElementById('mobile');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const mobileValue = mobile.value;
	const dobValue = dob.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	if(mobileValue === '') {
		setErrorFor(mobile, 'MobileNumber cannot be blank');
	} 
	else if (!isMobile(mobileValue)) {
		setErrorFor(mobile, 'Not a valid MobileNumber');
	}
	else {
		setSuccessFor(mobile);
	}
	if(passwordValue === '') {
		setErrorFor(password, 'MobileNumber cannot be blank');
	} 
	else if (!strongPass(passwordValue)) {
		setErrorFor(password, 'Put a Strong password');
	}
	else {
		setSuccessFor(password);
	}
	if(dobValue === '') {
		setErrorFor(dob, 'Date Of Birth cannot be blank');
	} else if (!dobcheck(dobValue)) {
		setErrorFor(dob, 'Put a correct date of Birth');
	}
	else {
		setSuccessFor(dob);
	}

	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isMobile(mobile){
	return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(mobile);
}
function strongPass(password) {
   return /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@])(?!.*[iIoO])\S{6,12}$/.test(password);
}
function dobcheck(dob){
	var today = new Date();
	 var dateofbirth = new Date(dob);
	return dateofbirth <= today;
}
