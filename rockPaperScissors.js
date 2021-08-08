var resultado;
var rock = 1;
var paper = 2;
var scissors = 3;
var jugador ;
var maquina;
var jugador = prompt(`Hola , ¿Cómo te llamas? `);
var jugador = prompt(`Hola ${jugador}  hoy jugaremos  rock , paper o scissors (jan-ken-pon en japones ) porfavor digita una de las opciones \n°Rock\n°PAPER\n°SCISSORS `);



juez();

function juez() {
   maquina = Math.floor((Math.random()*3)+1);
   alert(`La maquina sacó ${maquina}`)
   if (jugador == 3 && maquina == 2) {
      alert(`sacate tijeras , la maquina sacó papel . GANASTE...!`)     
   }
   else if (jugador == 2 && maquina == 3)
   {
      alert(`sacaste papel , y la maquina sacó tijeras asi que perdiste`)
   }
   else if(jugador == 2 && maquina == 1)
   {
      alert(`sacaste papel , la maquina sacó papel . GANASTE...!`)
   }
   else if (jugador == 1 && maquina == 2)
   {
      alert(`sacaste piedra , y la maquina sacó papel asi que perdiste`)
   }
   else if (jugador == 1 && maquina == 3)
   {
      alert(`sacaste piedra , la maquina tijeras GANASTE...!`)
   }
   else if (jugador == 3 && maquina == 1)
   {
      alert(`sacaste tijeras , la maquina sacó piedra asi que perdiste`)
   }
   
   else{
      alert(`que desastre sacate lo mismo que la maquina , quedaron empate`)
   }
   
   return juez;
}
