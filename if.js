//mostrar si el sujeto en mayor para que pueda votar..!
var nom_Subjec = prompt('Hola , como te llamas')   
var edad_of_subjec = prompt(`Hola, ${nom_Subjec} ingresa tu edad porfavor.`)
if (edad_of_subjec >= 18){
   alert('Felicitaciones..! Puedes votar...! ')
}else{
   alert('Lo sentimos aún no puedes votar')
}