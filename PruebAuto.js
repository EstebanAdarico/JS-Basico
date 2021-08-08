
/*function templateAuto(mark,model,annio) {
   this.mark=mark;
   this.model=model;
   this.annio=annio;
}
//llamando la cantidad de impresiones para el array
var numberOfautos = prompt('¿Cuántos autos nuevos ingresaras?');
//variable que almacenará el array
var auto = [];
//loop necessary for la iteracion de cada variable segun pida
for (let i = 0;  i< numberOfautos; i++) {
   var IngreOfmark = prompt('Ingresa la marca de tu auto')
   var IngreOfmodel = prompt('Ingresa el modelo de tu auto')
   var IngreOfannio = prompt('Ingresa el año de tu auto')
   auto.push(new templateAuto(IngreOfmark,IngreOfmodel,IngreOfannio ))
}
//loop que itera segun las arrays ingresada por el push
for (let i = 0; i < auto.length; i++) {
   console.log(auto[i]);
   
}
*/
var enterTest = prompt('Ingresa prueba');

let saveVariable = [];
saveVariable.unshift(enterTest); 

console.log(saveVariable);
