var date;
var nasa;
const apiKey = "8gzeyoFH9MDRwhHSKUxsNOc6pnolcHCgcgbZVj9f";

function getNasa(){
	date = document.getElementById("date").value;
	var url = "https://api.nasa.gov/planetary/apod?api_key="+apiKey+"&date="+date;
	console.log(date);
	var request = new XMLHttpRequest();
	request.onload = function(resp)
	{
		console.log(resp);
		console.log(resp.target.responseText);
		nasa = JSON.parse(resp.target.responseText);
		var foto = document.getElementById("fotoNasa").src = nasa.url;
		var res = document.getElementById("nasa");
		res.innerHTML = nasa.explanation;

	}

request.open("GET", url, true);
request.send();
}

function enviar_datos_contacto(){
    var nombreElement = document.getElementById("nombre_contacto_input")
    var emailElement = document.getElementById("email_contacto_input")

    nombreUsuario = nombreElement.value;
    emailUsuario = emailElement.value;

    alert("Gracias por suscribirse, " + nombreUsuario + ".\nLe llegaran las fotos diarias del espacio al correo:  " + emailUsuario);
}

