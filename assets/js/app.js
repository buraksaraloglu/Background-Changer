const changeBtn = document.getElementById('change');

let rgbColors = [];

let randomRgb = () => {
	for (let i = 0; i < 3; i++) {
		rgbColors[i] = Math.floor(Math.random() * 255);
	}
};

changeBtn.addEventListener('click', function() {
	randomRgb();
	document.body.style.backgroundColor = `rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]})`;
});
