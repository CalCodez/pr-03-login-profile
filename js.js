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

//Profiles

const donatello = {
	id: 'donnie03',
	name: 'Donatello',
	nickName: 'Donnie',
	userName: 'donnie03',
	passWord: 'purpleTurtle',
	images: { profile: './assets/images/donatello/profile.jpg' },
	stats: {
		personality: 'Intelligent',
		weapon: 'The Bo Staff',
		role: `The tech-savvy genius and inventor.`,
	},
	contentText: `Donatello, often nicknamed "Donnie" or "Purple", is the brains and technical genius of the Teenage Mutant Ninja Turtles. Known for his purple bandana and bo staff, Donatello is the team's inventor, engineer, and often serves as their tech expert. He's a master of gadgets, vehicles, and weaponry, constantly tinkering and creating solutions to the team's problems.
Donatello's intelligence and resourcefulness make him a valuable asset to the team. He's not just a brilliant inventor, but also a skilled martial artist, though he often prefers to use his gadgets and strategies over brute force. He's also known for being the most reclusive and socially awkward of the brothers, often lost in his own thoughts or working on his inventions.
While Donatello is fiercely independent and analytical, he's also deeply caring and protective of his brothers, especially when they're in danger. He's often seen as the voice of reason and logic within the team, trying to mediate between his brothers' different personalities and prevent them from fighting. He's also known for his strong connection to April O'Neil, whom he often sees as a friend and confidante.
Bandai: S.H. Figuarts Teenage Mutant Ninja Turtles Donatello
In essence, Donatello is the heart and mind of the Teenage Mutant Ninja Turtles, always ready to use his intellect and skills to protect his brothers and the world. `,
};

const leonardo = {
	id: 'leo01',
	name: 'Leonardo',
	nickName: 'Leo',
	userName: 'leo01',
	passWord: 'blueTurtle',
	images: { profile: './assets/images/leonardo/profile.jpg' },
	stats: {
		personality: 'Leader',
		weapon: 'Katanas',
		role: `The leader, known for his wisdom and strategy`,
	},
	contentText: `Leonardo (Leo), the oldest and arguably the most mature of the Teenage Mutant Ninja Turtles, is the group's leader and a skilled warrior. He's known for his calm demeanor, strategic thinking, and unwavering commitment to protecting his family and the world. Leo wields a pair of katanas, his signature weapons, and is a master of various martial arts styles, including kenjutsu, iaido, and aikido.
Leo's leadership is not just about fighting; he also values his family and their well-being above all else. He's the voice of reason within the group, often mediating disagreements between his brothers and keeping them focused on their mission. While he can be a bit serious and rule-oriented, he also possesses a strong sense of humor and camaraderie with his brothers.
Beyond his fighting skills and leadership, Leo is also deeply devoted to his adoptive father, Splinter, and his brothers. He strives to uphold Splinter's code of honor and do his best to prevent his family from facing harm. Leo's dedication to his brothers is evident in his willingness to sacrifice himself to protect them, as seen in various episodes and storylines.
In addition to his role as a leader and warrior, Leo also has a strong sense of justice and responsibility. He often takes initiative to solve problems and protect others, even when it puts himself in danger. He's a complex character, both powerful and compassionate, and his unwavering determination to protect his family and the world makes him a true hero. `,
};

const michelangelo = {
	id: 'mikey04',
	name: 'Michelangelo',
	nickName: 'Mikey',
	userName: 'mikey04',
	passWord: 'orangeTurtle',
	images: { profile: './assets/images/michelangelo/profile.jpg' },
	stats: {
		personality: 'Playful',
		weapon: 'Nunchucks',
		role: `The youngest and most playful, know for his artistic talents.`,
	},

	contentText: `Michelangelo's fun-loving nature extends to his interests and passions. He's an avid skateboarder, a skilled artist, and always ready to party, often incorporating his love of pop culture into his interactions. He's also incredibly affectionate and sensitive, often serving as a source of comfort and support for his brothers.
Beyond his playful exterior, Michelangelo is a true ninja. He's loyal, brave, and always willing to put his brothers' needs before his own. He may be the youngest, but he's a valuable member of the team, bringing a unique blend of humor and strength to their adventures.
Michelangelo's catchphrase, "Cowabunga!", is a testament to his enthusiastic and energetic personality. He also frequently uses the catchphrase, "I love being a turtle!". He embodies the spirit of the TMNT, demonstrating that you can be both serious and fun-loving, capable and playful.
In essence, Michelangelo is a complex character who brings a unique blend of humor, heart, and strength to the Teenage Mutant Ninja Turtles. He's a reminder that even in the darkest times, there's always room for laughter and joy. `,
};

const raphael = {
	id: 'ralph02',
	name: 'Raphael',
	nickName: 'Ralph',
	userName: 'ralph02',
	passWord: 'redTurtle',
	images: { profile: './assets/images/raphael/profile.jpg' },
	stats: {
		personality: 'Hot-headed',
		weapon: 'Sais',
		role: `The Strongest and most impulsive, often serving as the team's muscle`,
	},

	contentText: `Raph's personality is characterized by his short fuse and tendency to snap when things don't go his way. He's particularly prone to teasing Michelangelo, often referred to as "little brother," but their relationship is closer than it appears. Raph also has a protective side, evident in his willingness to risk himself for his brothers and Sensei Splinter.
In many iterations, Raph is the most violent and least patient of the turtles. He's known for his relentless fighting style and lack of patience for stealth or strategy. However, he's also a good person who deeply loves his family and would do anything to protect them, even if he doesn't always show it.
Raph's struggles often stem from his pride and reluctance to admit his emotions. He can be easily overwhelmed and prone to choking under pressure. Despite his flaws, he's a crucial part of the team and a source of strength and protection for his brothers.
In the 2012 series, Raph's chip in his shell is a result of a past injury sustained during an accident with the Kraang. He also has a history of pet ownership, including Spike who later mutated into Slash, and Chompy. His most defining character trait is his bad temper, often directed at Mikey, and his occasional feuds with Leonardo and Donatello. `,
};

const arrOfProfiles = [donatello, michelangelo, leonardo, raphael];

const profileContainer = getById('profile-container');
const contentText = getById('content-text');
const logOffBtn = getById('log-off-btn');
const profileImg = getById('profile-img');
const liStats = selectAll('li');
const [name, personality, weapon, role] = liStats;
const profileTitle = getById('profile-title');
const userName = getById('user-name');
const password = getById('password');
const logInBtn = getById('login-btn');
const toastContainer = select('.toast-container');
const toastMessage = select('.toast-msg-container');

const handleBlankInputs = () => {
	logInBtn.addEventListener(click, () => {
		if (userName.value === '' && password.value == '') {
			toggleClass(toastContainer, flexActive);
			textContent(toastMessage, 'All Felids Required!');
		} else if (userName.value == '' && !password.value == '') {
			toggleClass(toastContainer, flexActive);
			textContent(toastMessage, 'Username Required!');
		} else if (!userName.value == '' && password.value == '') {
			toggleClass(toastContainer, flexActive);
			textContent(toastMessage, 'Password Required!');
		}
	});
};

const logIn = (profile) => {
	logInBtn.addEventListener(click, () => {
		if (
			userName.value === profile.id &&
			userName.value === profile.userName &&
			password.value === profile.passWord
		) {
			toggleClass(mainContainer, flexInactive);
			toggleClass(profileContainer, flexActive);
			profileImg.src = profile.images.profile;
			textContent(profileTitle, profile.nickName);
			textContent(name, profile.name);
			textContent(personality, profile.stats.personality);
			textContent(weapon, profile.stats.weapon);
			textContent(role, profile.stats.role);
			textContent(contentText, profile.contentText);
		} else if (
			userName.value == profile.id &&
			userName.value === profile.userName &&
			password.value !== profile.passWord
		) {
			toggleClass(toastContainer, flexActive);
			textContent(toastMessage, 'Password Incorrect!');
		} else if (userName.value !== profile.id && password.value == profile.passWord) {
			toggleClass(toastContainer, flexActive);
			textContent(toastMessage, 'Username Incorrect');
		}
	});
};

handleBlankInputs();
logIn(leonardo);
logIn(donatello);
logIn(michelangelo);
logIn(raphael);

logOffBtn.addEventListener(click, () => {
	if (profileContainer.classList.contains(flexActive)) {
		toggleClass(profileContainer, flexActive);
		toggleClass(mainContainer, flexInactive);
	}
});

const registerUsername = getById('reg-username');
const newPassword = getById('new-password');
const validatePassword = getById('validate-password');
const registerBtn = select('.register-btn');

const handleRegisterInputs = () => {
	const regInputs = [registerUsername, newPassword, validatePassword];

	registerBtn.addEventListener(click, () => {
		for (let inputs of regInputs) {
			if (inputs.value == '') {
				toggleClass(toastContainer, flexActive);
				textContent(toastMessage, 'All Fields Required!');
			}
		}

		if (!registerUsername.value == '' && newPassword.value == '' && validatePassword.value == '') {
			toggleClass(toastContainer, flexActive);
			textContent(toastMessage, 'Please Create A Password!');
		}
	});
};

handleRegisterInputs();

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
		textContent(toastMessage, 'Passwords Must Match!');
	}
});

const viewMainPassword = getById('view-main-password');
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
viewPassword(viewMainPassword, password);
viewPassword(viewNewPassword, newPassword);
viewPassword(viewValidatedPassword, validatePassword);

const closeToastBtn = select('#close-toast-btn');
closeToastBtn.addEventListener(click, () => {
	if (toastContainer.classList.contains(flexActive)) {
		toggleClass(toastContainer, flexActive);
	}
});

const placeholder = 'delete var';
