/*
Versión 0.0.1

Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
Agregar un evento de click al botón o de submit al formulario.
En el evento, obtener el texto.
Agregar el texto al HTML.
*/
function add(){
	// Para guardar el comentario, saco el valor de este elemento
	var comments = document.getElementById("comment").value; // Agarra al comentario
	document.getElementById("comment").value = ""; // Limpia la caja de comentarios

	var newComments = document.createElement('div'); //Creamos el contenedor para los comentarios
		newComments.classList.add('twit');

	var cont = document.getElementById('cont'); //Obtenemos el ID den contendor

	//Creo un párrafo (papá)
	var paragraph = document.createElement('p');

	var enter = document.createElement('br');

	//Creamos un nodo de texto (hijo)
	var nodoText = document.createTextNode(comments);
	var dateSpan = document.createElement("span");

	//Le doy atributo a dateSpan
    dateSpan.textContent = moment().format('hh:mm');

    //Le asignamos el nodo texto como hijo a paragraph
	paragraph.appendChild(nodoText);

	//Le asignamos los hijos al contenedor
	newComments.appendChild(paragraph);
	newComments.appendChild(enter);
	newComments.appendChild(dateSpan);

	//para que el ultimo comentario hecho salga primero
    cont.insertBefore(newComments, cont.children[0]);	
}