const getByClass = (className) => document.getElementsByClassName(className);
const getById = (id) => document.getElementById(id);
const createElement = (element) => document.createElement(element);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const addClass = (element, className = '') => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const textContent = (element, text) => (element.textContent = text);
const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

const registerLink = getById('register-link');
const existingAccountLink = getById('existing-acc-link');
const registerContainer = getById('register-container');
const mainContainer = getById('main-container');

registerLink.addEventListener(click, () => {
	if (!registerContainer.classList.contains(flexActive)) {
		toggleClass(mainContainer, flexInactive);
		toggleClass(registerContainer, flexActive);
	}
});

existingAccountLink.addEventListener(click, () => {
	if (mainContainer.classList.contains(flexInactive)) {
		toggleClass(registerContainer, flexActive);
		toggleClass(mainContainer, flexInactive);
	}
});

const userName = getById('user-name');
const password = getById('password');
const logInBtn = getById('login-btn');
const toastContainer = select('.toast-container');
const closeToastBtn = select('#close-toast-btn');
const toastMessage = select('.toast-msg-container');

logInBtn.addEventListener(click, () => {
	if (!userName.value == '' && !password.value == '') {
		toggleClass(toastContainer, flexActive);
		textContent(toastMessage, 'LOGIN SUCCESS!');
	} else if (!userName.value == '' && password.value == '') {
		toggleClass(toastContainer, flexActive);
		textContent(toastMessage, 'PASSWORD REQUIRED!');
	} else if (userName.value == '' && !password.value == '') {
		toggleClass(toastContainer, flexActive);
		textContent(toastMessage, 'USERNAME REQUIRED!');
	}
});

const registerUsername = getById('reg-username');
const newPassword = getById('new-password');
const validatePassword = getById('validate-password');
const registerBtn = select('.register-btn');

registerBtn.addEventListener(click, () => {
	if (
		!registerUsername.value == '' &&
		!newPassword.value == '' &&
		!validatePassword.value == '' &&
		newPassword.value === validatePassword.value
	) {
		toggleClass(toastContainer, flexActive);
		textContent(toastMessage, 'ACCOUNT REGISTERED!');
		toggleClass(registerContainer, flexActive);
		toggleClass(mainContainer, flexInactive);
	} else if (
		!registerUsername.value == '' &&
		!newPassword.value == '' &&
		!validatePassword.value == '' &&
		newPassword.value !== validatePassword.value
	) {
		toggleClass(toastContainer, flexActive);
		textContent(toastMessage, 'PASSWORDS DO NOT MATCH!');
	}
});

const viewMainPAssword = getById('view-main-password');
const viewNewPassword = getById('view-new-password');
const viewValidatedPassword = getById('view-validate-password');

const viewPassword = (toggle, input) => {
	toggle.addEventListener(click, () => {
		if (!input.value == '' && input.type == 'password') {
			input.type = 'text';
		} else {
			input.type = 'password';
		}
	});
};

viewPassword(viewMainPAssword, password);
viewPassword(viewNewPassword, newPassword);
viewPassword(viewValidatedPassword, validatePassword);

closeToastBtn.addEventListener(click, () => {
	if (toastContainer.classList.contains(flexActive)) {
		toggleClass(toastContainer, flexActive);
		textContent(successContainer, 'LOGIN SUCCESS!!!!');
	}
});
