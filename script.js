var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button= document.getElementById("randomBtn");

function randomInt(min, max) {
	return Math.floor(Math.random() * (255 - 0) ) + 0;
}

function setButtonGradient() {
	button.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
}

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
  setButtonGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setGradient);

button.addEventListener("click", function(){
	body.style.background =
	"linear-gradient(to right, " + "rgb(" + randomInt() + "," + randomInt() +"," + randomInt() +
"), rgb(" + randomInt() + "," + randomInt() +"," + randomInt() +")";

button.style.background =
"linear-gradient(to right, " + "rgb(" + randomInt() + "," + randomInt() +"," + randomInt() +
"), rgb(" + randomInt() + "," + randomInt() +"," + randomInt() +")";

css.textContent = body.style.background + ";";
})
