var carro = {
   marca:"Toyota",//propiedad
   modelo:"Corolla",
   annio:2020,
   detelleDelCarro: function(){//se le llama metodo a la funcion dentro de un objeto
      console.log(`auto ${this.modelo} ${this.annio}`)//
   }
} ;
alert(carro.modelo);//se manda a llamar mediante la palbra clave