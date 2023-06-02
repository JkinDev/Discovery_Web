const globo = document.getElementById('globo');
let tamaño = 200;
let colorIndice = 0;
const colores = ['red', 'green', 'blue'];

globo.addEventListener('click', cambiatamañoycolor);
globo.addEventListener('mouseover', tamañoreduceinverso);

function tamañoreduceinverso(){
	tamaño -= 5;

	if (tamaño > 200) {
		globo.style.width = tamaño + 'px';
		globo.style.height = tamaño + 'px';
	}

	colorIndice = (colorIndice + 2) % colores.length;
	globo.style.background = colores[colorIndice];
}

function cambiatamañoycolor(){
	tamaño += 10;

	if (tamaño > 420) {
		tamaño = 200;
	}
	globo.style.width = tamaño + 'px';
	globo.style.height = tamaño + 'px';

	colorIndice = (colorIndice + 1) % colores.length;
	globo.style.background = colores[colorIndice];
}
