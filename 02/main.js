var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");

function aleatorio(min, max){
	return Math.floor(((Math.random() * (max - min)) + min));
}

function pintar(ancho, alto){
	ctx.fillStyle = "red";
	ctx.fillRect(aleatorio(0, canvas.width), aleatorio(0, canvas.height), ancho, alto);
}

var ancho = prompt('Ingrese el ancho');
var alto = prompt('Ingrese el alto');

pintar(ancho, alto);

