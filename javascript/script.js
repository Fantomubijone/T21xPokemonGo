function promptLogin() {
	alert('Please login to your account.');
	window.location.href = 'login.html';
}

function generatePlayerId() {
	let playerId = '';
	for (let i = 0; i < 3; i++) {
		playerId += Math.floor(1000 + Math.random() * 9000) + ' ';
	}
	return playerId.trim();
}

function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

function showFloatingDiv(playerId, ign, email, password) {
	document.getElementById('player-id').textContent = playerId;
	document.getElementById('ignfill').textContent = ign;
	document.getElementById('emailfill').textContent = email;
	document.getElementById('passwordfill').textContent = password;
	document.getElementById('floating-div').style.display = 'block';
	document.querySelector('.blur-background').style.display = 'block';

	localStorage.setItem('ignsave', ign);
	localStorage.setItem('playeridsave', playerId);
	localStorage.setItem('emailsave', email);
}


function hideFloatingDiv() {
	document.getElementById('floating-div').style.display = 'none';
	document.querySelector('.blur-background').style.display = 'none';
}


// Event listeners for signup buttons
document.querySelector('.apple').addEventListener('click', function () {
	let playerId = generatePlayerId();
	let ign = 'SmoothOperator';
	let email = 'carlos.decastro@scuderiaferrari.com';
	let password = 'NoAppendixNoProblem';
	showFloatingDiv(playerId, ign, email, password);
});

document.querySelector('.facebook').addEventListener('click', function () {
	let playerId = generatePlayerId();
	let ign = 'SmoothOperator';
	let email = 'carlos.decastro@scuderiaferrari.com';
	let password = 'NoAppendixNoProblem';
	showFloatingDiv(playerId, ign, email, password);
});

document.querySelector('.google').addEventListener('click', function () {
	let playerId = generatePlayerId();
	let ign = 'SmoothOperator';
	let email = 'carlos.decastro@scuderiaferrari.com';
	let password = 'NoAppendixNoProblem';
	showFloatingDiv(playerId, ign, email, password);
});



