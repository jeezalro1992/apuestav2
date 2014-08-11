function aleatorio(minimo,maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}
var banco = 1000;
var ufichas = 100;
var sfichas = 100;
while(ufichas>=5 && sfichas>=5){

var cincoFichas = 0;
var veinteFichas = 1;
var cincuentaFichas = 2;
 
var uno = 0;
var dos = 1;
var tres = 2;
var cuatro = 3; 
var cinco = 4;
var seis = 5;

if(sfichas>=50){

var opcionMaquina = aleatorio(0,5);
var apuestaMaquina = aleatorio(0,2);
}
else if(sfichas>=25){
var opcionMaquina = aleatorio(0,5);
var apuestaMaquina = aleatorio(0,1);

}
else if(sfichas>=5){
var opcionMaquina = aleatorio(0,5);
var apuestaMaquina = 0;
}

var opciones = ["Uno","Dos","Tres","Cuatro","Cinco","Seis"];
var apuesta = [05,25,50]
var opcionMaquina = aleatorio(0,5);
var Resultado = aleatorio(0,5);
 
var apuestaUsuario;
alert("Tienes: $" + ufichas);
alert("Sistema tiene: $"+sfichas);
alert("Fondo en caja: $"+banco);
opcionUsuario = prompt("¿Qué número eliges?\nUno: 0\nDos: 1\nTres: 2\nCuatro: 3\nCinco: 4\nSeis: 5", 0);
apuestaUsuario = prompt("¿Cuanto quieres apostar?\n$5: 0\n$25: 1\n$50: 2", 0);
 
alert("Apostaste $" + apuesta[apuestaUsuario] + " al numero: " + opciones[opcionUsuario]);
alert("La maquina aposto $" + apuesta[apuestaMaquina] + " al numero: " + opciones[opcionMaquina]);
ufichas= ufichas- apuesta[apuestaUsuario];
sfichas= sfichas- apuesta[apuestaMaquina];
alert("Ahora tienes: $"+ufichas);
alert("Sistema Tiene: $"+sfichas);
alert("Resultado es: "+ opciones[Resultado]);

function ejecutar(opcionUsuario,apuestaUsuario,op)
{
if(opcionUsuario== Resultado && opcionMaquina== Resultado) 
{
    alert("Empate fichas seran reembolsadas \ny ganas porcentage del banco");
    var ganaciaU = apuesta[apuestaUsuario]+ parseInt((banco*(apuesta[apuestaUsuario]/100)));
    var ganaciS =  apuesta[apuestaMaquina]+ parseInt((banco*(apuesta[apuestaMaquina]/100)));
    alert("Ganaste: $"+ganaciaU);
    alert("Sintema Gano: $"+ganaciS);
    var banco = banco-parseInt((banco*(apuesta[apuestaUsuario]/100)))-parseInt((banco*(apuesta[apuestaMaquina]/100)));
    ufichas = ufichas+ ganaciaU;
    sfichas = sfichas + ganaciS;
}
  
 if(opcionMaquina != Resultado && opcionUsuario != Resultado){
  alert("Perdieron fichas pasan a banco");
  alert("Perdistes: $"+apuesta[apuestaUsuario]);
  alert("Sistema Perdio: $"+ apuesta[apuestaMaquina]);
  var banco= banco+apuesta[apuestaUsuario]+ apuesta[apuestaMaquina];

}
 if(opcionUsuario==Resultado && opcionMaquina != Resultado)
{
  var ganaciaU = apuesta[apuestaUsuario]+apuesta[apuestaMaquina]+parseInt((banco*(apuesta[apuestaUsuario]/100)));
  alert("Ganaste: $"+ ganaciaU);
  alert("Sistema pierde: $"+ apuesta[apuestaMaquina]);
  ufichas = ufichas+ganaciaU;
  banco = banco- parseInt((banco*(apuesta[apuestaUsuario]/100)));
 
 
}
if(opcionMaquina==Resultado && opcionUsuario != Resultado){
  var ganaciS = apuesta[apuestaMaquina]+apuesta[apuestaUsuario]+parseInt((banco*(apuesta[apuestaMaquina]/100)));
  alert("Sistema Gano: $"+ ganaciS);
  alert("Perdiste: $"+apuesta[apuestaUsuario]);
  sfichas = sfichas+ganaciS;
  banco = banco - parseInt((banco*(apuesta[apuestaMaquina]/100)));
}

 alert("Ahora tinenes $"+ufichas);
 alert("Sistema tiene $"+sfichas);
}
alert("Juego terminado");
