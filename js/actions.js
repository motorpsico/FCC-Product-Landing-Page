function cambiarColorBarra() {
    var posScroll = window.pageYOffset;
    console.log(posScroll + " \n");
    console.log(posSeccion);
    if(posScroll > posSeccion) {
        encabezado.style.backgroundImage = "linear-gradient(to right, #222, #222)";
    }
    else {
        encabezado.style.backgroundImage = "none";
    }
}

function desplegarMenu() {
	if(window.innerWidth <= 900)
		if(menuBar.style.height != "100vh")
			menuBar.style.height = "100vh";
		else
			menuBar.style.height = "0";
	else
		menuBar.style.height = "auto";
}



var encabezado = document.getElementById("header");
var seccionCalidad = document.getElementById("best-quality");
var posSeccion = seccionCalidad.offsetTop - encabezado.offsetHeight;
window.addEventListener("scroll", cambiarColorBarra);


var menuBar = document.getElementById("nav-bar");
var menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", desplegarMenu);


var buttons = document.querySelectorAll("#nav-bar > a");
for(var button of buttons)
	button.addEventListener("click", desplegarMenu);
