// Function to generate player ID
function generatePlayerId() {
	let playerId = '';
	for (let i = 0; i < 3; i++) {
		playerId += Math.floor(1000 + Math.random() * 9000) + ' ';
	}
	return playerId.trim();
}

// EMAIL VALIDATOR FORMAT
function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

// SETTING GENERATED PLAYER ID
const playerIdInput = document.getElementById('playerId');
playerIdInput.value = generatePlayerId();
playerIdInput.disabled = true;

document
	.getElementById('signup-form')
	.addEventListener('submit', function (event) {
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const confirmPassword = document.getElementById('confirmPassword').value;

		if (!validateEmail(email)) {
			alert('Please enter a valid email address');
			event.preventDefault();
		} else if (password !== confirmPassword) {
			alert('Passwords do not match');
			event.preventDefault();
		}
	});

// SIGN UP SAVING DETAILS
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('signup-form');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
        
		const playerId = document.getElementById('playerId').value;
		const ign = document.getElementById('ign').value;
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const confirmPassword = document.getElementById('confirmPassword').value;

		const userDetails = {
			playerId: playerId,
			ign: ign,
			email: email,
			password: password,
		};

		alert('Account created successfully!');

		window.location.href = 'login.html';
	});
});
