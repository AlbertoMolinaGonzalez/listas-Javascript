"use strict";

//funciones de la pagina
var numeros_Lista = create(); function cleanData(){
	document.getElementById("num").value = "";
}

/*las dos siguiente funciones dependen de la página web y por lo tanto no son
reutilizables, las reutlizables las pondre a continuacion.
*/
//funcion que altera la pagina web, para añadir un elemento al div de la pagina web
function addNumber(num){
	var error = document.getElementById("error");
	var lista = document.getElementById("lista");
	error.innerHTML= "";
	try {
		add(numeros_Lista,num);
		lista.innerHTML = toString(numeros_Lista);
	} catch (err) {
		error.innerHTML = err;
	}
}
//funcion que altera la pagina web, para eliminar un elemento de la lista
function pollNumber(){
	var error = document.getElementById("error");
	var lista = document.getElementById("lista");
	error.innerHTML = "";
	try {
		poll(numeros_Lista);
		lista.innerHTML = toString(numeros_Lista);
	} catch (err) {
		error.innerHTML = err;
	}
}

//funciones reutilizables de la lista para otras listas

var numeroElementos = 5;

function create(){
	var lista = [];
	for (var i = 0; i<numeroElementos;i++){
		lista[i] = Number.NaN;
	}
	return lista;
}

function isEmpty(lista){
	var isEmpty = false;
	if (isNaN(lista[0])){
		isEmpty = true;
	}
	return isEmpty;
}

function isFull(lista){
	var isFull = false;
	if(!isNaN(lista[numeroElementos-1])){
		isFull = true;
	}
	return isFull;
}

function size(lista){
	var length = 0;
	while (length<numeroElementos && !isNaN(lista[length])){
		length++;
	}
	return length;
}

function add(lista, elem){
	elem = parseInt(elem);
	if (isNaN(elem)){
		throw "El elemento no es un numero";
	}
	if (!isFull(lista)){
		lista[size(lista)] = elem;
	}else {
		throw "la lista esta llena, no puedes introducir el elemento";
	}
	return size(lista)
}

function remove(lista,index){
	index = parseInt(index);
	var length = size(lista);
	if (isEmpty(lista)){
		throw "No se puede borrar, la lista esta vacia";
	}else{
		if (index<length){
			var elemento;
			elemento = lista[index];
			for (var i = index; i<length;i++){
				lista[i] = lista[i+1];
			}
		}else{
			throw "El indice esta fuera del rango";
		}
	}
	return elemento;
}

function removeElement(lista,elem) {
	var elemento = parseInt(elem);
	var length = size(lista);
	var enco = false;
	if (!isNaN(elemento)) {
		for (var i=0; i<length ; i++) {
			if (lista[i] === elemento) {
				enco = true;
				for (var j=i; j<length ; j++) {
					lista[j]= lista[j+1];
				}
			}
		}
	} else {
		throw "The element is not a number";
	}
	return enco;
 }

function set(lista, elem, index){
	elem = parseInt(elem);
	index = parseInt(index);
	var aux;
	if (isNaN(elem)){
		throw "El elemento no es un numero";
	}
	if (isEmpty(lista)){
		throw "No se puede reemplazar, esta la lista vacia";
	}
	aux = lista[index];
	lista[index] = elem;
	return aux;
}

function toString(lista){
	var string = "";
	if (!isEmpty(lista)){
		var length = size(lista);
		for (var i=0; i<length-1;i++){
			string = string + lista[i] + " - ";
		}
		string = string + lista[i];
	}
	return string;
}

function capacity(lista){
	return numeroElementos;
}

function clear(lista){
	var elem = Number.NaN;
	if(!isEmpty(lista)){
		var length = size(lista);
		for (var i =0;i<length;i++){
			lista[i]= Number.NaN;
		}
	}
}

function get(lista, index){
	index = parseInt(index);
	var aux;
	var length;
	length = size(lista);
	if (isNaN(index)){
		throw "El elemento no es un numero";
	}
	if (isEmpty(lista)){
		throw "No se puede reemplazar, esta la lista vacia";
	}
	if (index>length){
		throw "El indice es mayor que la lista";
	}else{
		aux = lista[index];
	}
	return aux;
}

function addAt(lista, elemento, index){
	elemento = parseInt(elemento);
	var lenght = size(lista);
	if (isNaN(elemento)){
		throw "El elemento a añadir no es numerico";
	}
	if (index>lenght){
		throw "El indice es mayor que el tamaño de la lista";
	}
	if (isFull(lista)){
		throw "La lista esta llena no puedes añadir mas elementos";
	}else{
		lista[index] = elemento;
		for (var i=0; i<length;i++){
			lista[i] = lista[i+1];
		}
	}
}

 function testlista(){
 	var lista=[];
 	console.log ("Capacidad: " + capacity(lista));
 	console.log("Es vacía: " + isEmpty(lista));
 	console.log("Longitud: " + size(lista));

 	try {
	 	for (var i=0; i<numeroElementos; i++){
	 		console.log("Nº de elementos: " + add(lista,i));
	 	}
	 	add(lista,i); //al haber introducido 5 elementos nos dara la excepcion de que esta llena
 	} catch (err) {
 		console.log(err);
 	}
 	console.log ("La lista entera es: " + toString(lista));
	console.log ("prueba de set: " + set(lista,8,0));
	console.log ("La lista entera es: " + toString(lista));
	console.log ("prueba de funcion remove: ");
	console.log ("eliminacion del elemento 1: " + remove(lista,1));
 	console.log ("La lista entera es: " + toString(lista));
	console.log ("prueba de remove elemento: " + removeElement(lista, 3));
	console.log ("La lista entera es: " + toString(lista));
	console.log ("La lista entera es: " + addAt(lista,2,3));
	console.log ("Prueba de la funcion get: " + get(lista,3));

 }
window.onload = testlista;
