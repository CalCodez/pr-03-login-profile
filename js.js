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

const userName = getById('user-name');
const password = getById('password');
const logInBtn = getById('login-btn');
const toastContainer = select('.toast-container');
const closeToastBtn = select('#close-toast-btn');
const errorContainer = select('.error-container');
const errorExit = getById('error-exit');
const errorMsgContainer = select('.error-msg-container');

logInBtn.addEventListener(click, () => {
	if (!userName.value == '' && !password.value == '') {
		toggleClass(toastContainer, flexActive);
	} else if (!userName.value == '' && password.value == '') {
		toggleClass(errorContainer, flexActive);
		textContent(errorMsgContainer, 'PLEASE ENTER YOUR PASSWORD!!!!');
	} else if (userName.value == '' && !password.value == '') {
		toggleClass(errorContainer, flexActive);
		textContent(errorMsgContainer, 'ENTER YOUR USERNAME!!!!');
	} else if (userName.value == '' && password.value == '') {
		toggleClass(errorContainer, flexActive);
		textContent(errorMsgContainer, 'ENTER USERNAME AND PASSWORD.. DUH!!!');
	}

	closeToastBtn.addEventListener(click, () => {
		if (toastContainer.classList.contains(flexActive)) {
			toggleClass(toastContainer, flexActive);
		}
	});

	errorExit.addEventListener(click, () => {
		if (errorContainer.classList.contains(flexActive)) {
			toggleClass(errorContainer, flexActive);
		}
	});
});
