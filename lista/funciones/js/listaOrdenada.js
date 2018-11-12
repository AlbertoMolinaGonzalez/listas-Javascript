"use strict";

 var numerosLista = create(); function cleanData(){
 	document.getElementById ("num").value = "" ;
 }

function addNumber(num){
	var error = document.getElementById ("error");
	var lista = document.getElementById ("lista");
	error.innerHTML = "";
 	try {
	 	add(numerosLista,num);
	 	queue.innerHTML = toString(numerosLista);
 	} catch (err) {
 		error.innerHTML = err;
 	}
}

function pollNumber (){
	var error = document.getElementById ("error");
	var lista = document.getElementById ("lista");
	error.innerHTML = "";
 	try {
	 	poll(numerosLista);
	 	queue.innerHTML = toString(numerosLista);
 	} catch (err) {
 		error.innerHTML = err;
 	}
}

/* queue Functions */
 var numeroElementos = 5;
 function create(){
 	var lista = [];
 	for (var i=0; i<numeroElementos; i++){
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
 	if (!isNaN(lista[numeroElementos-1])){
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

 function burbuja(lista)
 {
   var length=size(lista);
   for(var i=1;i<length;i++)
   {
     for(var j=0;j<(length-i);j++)
     {
       if(lista[j]>lista[j+1])
       {
         k=lista[j+1];
         lista[j+1]=lista[j];
         lista[j]=k;
       }
     }
   }
   return lista;
 }

 function add(lista,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "Estas intentando añadir un elemento no numerico";
 	}
 	if (!isFull(lista)){
 		lista.push(elem);
 	} else {
 		throw "La lista esta llena, no puedes añadir mas";
 	}
  burbuja(lista);
 	return size(lista);
 }

 function toString(lista){
 	var str = "";
 	if (!isEmpty(lista)){
 		var length = size(lista);
 		for (var i=0; i<length-1;i++){
 			str = str + lista[i] + " - ";
 		}
 		str = str + lista[i];
 	}
 	return str;
 }

 function capacity(lista){
 	return numeroElementos;
 }

 function clear(lista){
 	var elem = Number.NaN;
 	if (!isEmpty(lista)){
 		var length = size(lista);
 		for (var i=0; i<length;i++){
 			lista[i] = Number.NaN;
 		}
 	}
 }

 function firstElement(lista){
 	var primero;
 	if (!isEmpty(lista)){
 		primero = lista[0];
 	} else {
 		throw "La lista esta vacia.";
 	}
 	return primero;
 }

 function lastElement(lista){
 	var ultimo;
 	if (!isEmpty(lista)){
 		ultimo = lista[size(lista)-1];
 	} else {
 		throw "La lista esta vacia.";
 	}
 	return ultimo;
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

 function remove(lista,index){
   index = parseInt(index);
   var length = size(lista);
   if (isEmpty(lista)){
     throw "No se puede borrar, la lista esta vacia";
   }else{
     if (index<length){
       var elemento;
       elemento = lista[index];
       if (index > -1) {
         array.splice(index, 1);
       }
     }else{
       throw "El indice esta fuera del rango";
     }
   }
   return elemento;
 }

 function testlista(){
 	//var queue = create ();
 	var lista=[];
 	console.log ("Prueba de capacity: " + capacity(lista));
 	console.log("prueba de isEmpty: " + isEmpty(lista));
 	console.log("tamaño: " + size(lista));

 /*	try {
	 	for (var i=0; i<numeroElementos; i++){
	 		console.log("Nº de elementos: " + add(lista,i*10));
	 	}
	 	add(lista,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}*/
  console.log("Nº de elementos: " + add(lista,8));
  console.log("Nº de elementos: " + add(lista,3));
  console.log("Nº de elementos: " + add(lista,5));
  console.log("Nº de elementos: " + add(lista,0));
  console.log("Nº de elementos: " + add(lista,1));
 	console.log ("La lista es: " + toString(lista));
 	console.log ("primer elemento: " + firstElement(lista));
 	console.log ("Segundo elemento: " + lastElement(lista));
  console.log ("prueba de set: " + set(lista,8,0));
  console.log ("La lista es: " + toString(lista));
  console.log ("prueba de set: " + get(lista,0));
  console.log ("eliminacion del elemento 3: " + remove(lista,1));
  console.log ("La lista entera es: " + toString(lista));
  console.log ("prueba de remove elemento: " + removeElement(lista, 3));
  console.log ("La lista entera es: " + toString(lista));

 	try {
	 	while (true){
	 		console.log ("Prueba de que salte excepcion en la lista: " + toString(lista));
	 	}
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("La lista es: " + toString(lista));
 }
window.onload = testlista;
