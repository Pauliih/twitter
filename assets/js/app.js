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
	if(comments=="" || comments.length>140){
		var boton = document.getElementById('btn');
		boton.enable=false;
	}else{

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
	    dateSpan.textContent = moment().format('hh:mm a');

	    //Le asignamos el nodo texto como hijo a paragraph
		paragraph.appendChild(nodoText);

		//Le asignamos los hijos al contenedor
		newComments.appendChild(paragraph);
		newComments.appendChild(enter);
		newComments.appendChild(dateSpan);

		//para que el ultimo comentario hecho salga primero
	    cont.insertBefore(newComments, cont.children[0]);	
	}
}

 /*___________________________________________________________________
 Deshabilitar boton   
 ------------------

    var btnTwit = document.getElementById("btn"); // boton twittear
    var comments = document.getElementById("comment").value; 
if(comments==""){
	disable();
}else if(comments=!""){
	enable();
}

function disable(){
  btnTwit.disabled=true;
}

function enable(){
  btnTwit.disabled=false;

}
______________________________________________________________________
function txtKeyPress(val,btn){

	if (val==null || val=="") {
		document.getElementById("btn").disabled=true;
	}else if (val!=null || val!="") {
		document.getElementById("btn").disabled=false;
	}
}

_______________________________________________________________________

contenidoTwitt almacena el contenido del campo 
textarea. Al principio está inicializada vacía, 
porque el textarea suponemos que está vacío.
var contenidoTweet = "";
var maxCaracteres = 0;
var caracteresRed=10;
var caracteresYellow=20;

function validaCaracteres(){
	var numCaracteres = document.getElementById('comment').value.length;
	
	if (numCaracteres >= maxCaracteres){
		contenidoTwitt = document.getElementById('comment').value;
	}else{
		document.getElementById('comment').value = contenidoTwitt;
	}
	
	if(numCaracteres <= caracteresRed){
		document.getElementById('contador').style.color="#ff0000";
	}else if (numCaracteres <= caracteresYellow){
		document.getElementById('contador').style.color="#ff0";
	}else{
		document.getElementById('contador').style.color="#000000";
	}
	
	contar();
}
________________________________________________________________________________
function countCharacters () {
    var long = 140;
    var subs = "";
    var characters = document.getElementById("comment").value.length;
    subs = long - characters;
    document.getElementById("counter").value = subs;
    if (subs < 0) {
        counter.style.color = "red";
    }
    else if (subs >=0 && subs <10) {
        counter.style.color = "gray";
    }
    else if (subs >=10 && subs <20) {
        counter.style.color = "green";
    }
    else {
        counter.style.color = "#7BA5E5 ";
    }
}
_______________________________________________________________________________*/
/*
- No ingresar texto vacío (deshabilitar el botón de "twittear").
- Contar la cantidad de caracteres de forma regresiva.
*/

//FUNCION CUENTA REGRESIVA
function contar() { 
	var max = "140"; //maximo de caracteres
	var cadena = document.getElementById("comment").value; //Texto del textarea
	var long = cadena.length; //logitud del texto
	var yellow = "120";
	var red = "130";
    var contador = document.getElementById("contador").value;

	document.getElementById("contador").value = max-long;
	
	/* if(long >= yellow && long < red) {  //longitud >= 120 y longitud < 130
                contador.classList.remove("turquesa");
                contador.classList.add("violet");
        } else if(long >= red && long < max) {  //longitud >= 130 y longitud < 140
                contador.classList.remove("violet");
                contador.classList.remove("red");
                contador.classList.add("turquesa");	
        } else if(long >= max){//longitud >= 140
                contador.classList.remove("turquesa");
                contador.classList.remove("violet");
                contador.classList.add("red");
                boton.disabled = true;
        }     
    } */

}

var textarea = document.getElementById("comment");
var heightLimit = 600; /* Maximum height: 200px */

textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};