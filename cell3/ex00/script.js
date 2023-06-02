const colorButton = document.getElementById('colorButton');
const body = document.body;

let buttonSize = 16;

colorButton.addEventListener('click', cambiarelcolor);

function cambiarelcolor() {
	const colors = ['red-bg', 'green-bg', 'blue-bg'];
	const randomColor = colors[Math.floor(Math.random() * colors.length)];

	body.className = randomColor;

	buttonSize += 2;
	colorButton.style.fontSize = buttonSize + 'px';
}
