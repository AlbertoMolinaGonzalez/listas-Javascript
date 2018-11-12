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
 	return size(lista);
 }

 function toString(lista){
   return lista.join(" - ");
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
 	var first;
 	if (!isEmpty(lista)){
 		first = lista[0];
 	} else {
 		throw "La lista esta vacia.";
 	}
 	return first;
 }

 function lastElement(lista){
 	var last;
 	if (!isEmpty(lista)){
 		last = lista[size(lista)-1];
 	} else {
 		throw "La lista esta vacia.";
 	}
 	return last;
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

 function removeElement(lista, elemento){
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
     throw "El elemento no es numerico";
   }
   return enco;
 }


 function testlista(){
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
   console.log ("eliminacion del elemento 3: " + remove(lista,1));
   console.log ("La lista entera es: " + toString(lista));
   console.log ("prueba de remove elemento: " + removeElement(lista, 3));
   console.log ("La lista entera es: " + toString(lista));
   console.log ("Prueba de la funcion get: " + get(lista,3));


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
