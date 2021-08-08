var rock;
var paper;
var scissors;
var jugador;
var maquina;
var maquinaDE_random;
var juez;
var jugador = prompt(`Hola , ¿Cómo te llamas?`);
var jugador = prompt(`${jugador} , hoy jugaremos Rock , Papper o scissors ( jan-ken-pon en japones) porfavor digita tu opcion :\n*rock\n*paper\n*scissors `);

maquinaDE_random();
juez();

function maquinaDE_random() {
   maquina = Math.floor((Math.random()*3)+1)
   alert(maquina)
   switch (true) {
      case maquina == 1:
         maquina = "rock";
         break;
      case maquina == 2:
         maquina = "paper";
         break;
      case maquina == 3:
         maquina = "scissors"
         break;
      default:
         alert(`ABORTAR MISIÓN...!`)
         break;
   }
   alert(`La maquina escogió ${maquina}`)
   
}



function juez() {
   switch (true) {
      case (jugador == "rock" && maquina == "paper"):
         alert(`la maquina sacó paper y tú rock \n       PERDISTE..!\n   PRUEBA DE NUEVO`)
         break;
      case (jugador == "paper" && maquina == "rock"):
         alert(`la maquina sacó rock y tu paper \n       GANASTE...!`)
         break;
      case (jugador == "paper" && maquina == "scissors"):
         alert(`La maquina sacó scissors y tú paper \n      PERDISTE...!\n   PRUEBA DE NUEVO`) 
         break;
      case (jugador == "scissors" && maquina == "paper"):
         alert(`La máquina sacó paper y tú scissors \n      GANASTE...!`)
         break;
      case (jugador == "scissors" && maquina == "rock"):
         alert(`La máquina sacó rock y tú scissors \n       PERDISTE...!\n    PRUEBA DE NUEVO`)
         break;
      case (jugador == "rock" && maquina == "scissors"):
         alert(`La máquina sacó scissors y tú rock \n       GANASTE...!`)        
         break;
      default:
         alert(`Empate\n    PRUEBA DE NUEVO`)
         break;
   }
   
}
