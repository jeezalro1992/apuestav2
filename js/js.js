
function aleatorio(minimo,maximo)
{
	var numero = Math.floor(Math.random()*(maximo- minimo +1 )+ minimo);
	return numero;
}
var banco = 1000;
var Ufichas = 100;
var Sfichas = 100;



function ejecutar(apuestaUsuario,opcionUsuario)
{
	


	if ( Sfichas>=50)
	{
		var opocionSistema = aleatorio(0,5);
		var apuestaSistema = aleatorio(0,3);
	}
	if(Sfichas<50)
	{
		var opocionSistema = aleatorio(0,5);
		var apuestaSistema = aleatorio(0,2);
	}
	if(Sfichas<20)
	{
		var opocionSistema = aleatorio(0,5);
		var apuestaSistema = aleatorio(0,1);
	}
	if(Sfichas<10)
	{
		var opocionSistema = aleatorio(0,5);
		var apuestaSistema = 0;
	}
	if(Sfichas<5){
		var apuestaSistema = 4;
		var opocionSistema = 6;

	}
	var fichas = [5,10,20,50,0];
	var opciones = ["uno","dos","tres","cuatro","cinco","seis","No apuesta"];
	var opcionMaquina = opciones[aleatorio(0,5)];
	Ufichas = Ufichas-fichas[apuestaUsuario];
	Sfichas = Sfichas-fichas[apuestaSistema];
	var textfs = "Sistema Tiene disponible<br>$"+Sfichas;

	var textfc = "Fondo en caja diponible $"+banco;
	
	var textap = "Apostaste $"+fichas[apuestaUsuario]+" al numero: "+opciones[opcionUsuario]+"<br>Sitema Aposto $"+fichas[apuestaSistema]+" al numero: "+opciones[opocionSistema];
	document.getElementById('fu').innerHTML=textfu;
	document.getElementById('fs').innerHTML=textfs;
	document.getElementById('fc').innerHTML=textfc;
	document.getElementById('respuesta').innerHTML = textap;
	document.getElementById('m1').style.display="none";
	document.getElementById('m2').style.display="none";
	document.getElementById('m3').style.display="none";
	document.getElementById('m4').style.display="none";
	document.getElementById('m5').style.display="none";
	document.getElementById('m6').style.display="none";

	if(opcionMaquina=="uno"){
		document.getElementById('m1').style.display="block";

	}else if(opcionMaquina=="dos"){
		document.getElementById('m2').style.display="block";
	}else if(opcionMaquina=="tres"){
		document.getElementById('m3').style.display="block";
	}else if(opcionMaquina=="cuatro"){
		document.getElementById('m4').style.display="block";
	}else if(opcionMaquina=="cinco"){
		document.getElementById('m5').style.display="block";
	}else if(opcionMaquina=="seis"){
		document.getElementById('m6').style.display="block";
	}

	if (opciones[opcionUsuario]==opcionMaquina &&opciones[opocionSistema]== opcionMaquina)
	{
		if(banco<=0){
			banco=0;
   			var perdidaC = 0;
   			var gananciaU = fichas[apuestaUsuario];
   			var gananciaS = fichas[apuestaSistema];
   			Ufichas=Ufichas+gananciaU;
   			Sfichas=Sfichas+gananciaS;
   		}
   		else if(banco>0){
		var gananciaU = Math.round(fichas[apuestaUsuario]+ (banco*(fichas[apuestaUsuario]/100)));
   		var gananciaS = Math.round(fichas[apuestaSistema]+ (banco*(fichas[apuestaSistema]/100)));
   		Ufichas=Ufichas+gananciaU;
   		Sfichas=Sfichas+gananciaS;
   		var perdidaC = Math.round(banco*(fichas[apuestaUsuario]/100))+Math.round((banco*(fichas[apuestaSistema]/100)));
  		banco= banco- perdidaC;

	} 
		var textfu = "Tienes diponible <br>$"+Ufichas;
		var textfs = "Sistema Tiene disponible<br>$"+Sfichas;
		var textfc = "Fondo en caja diponible <br>$"+banco;
   		var ganoU = "<br>Has ganado $"+gananciaU;
       	var ganoS = "<br>Sistema gano $"+gananciaS;
       	var perdioC="<br>Casino perdio $"+perdidaC;
    	document.getElementById('fu').innerHTML= textfu+ganoU;
    	document.getElementById('fs').innerHTML= textfs+ganoS;
    	document.getElementById('fc').innerHTML= textfc+perdioC;
}
	else if (opciones[opcionUsuario]==opcionMaquina &&opciones[opocionSistema]!= opcionMaquina)
	{
		if(banco<=0){
			banco=0;
   			var perdidaC = 0;
   			var gananciaU = fichas[apuestaUsuario];
   			var gananciaS = fichas[apuestaSistema];
   			Ufichas=Ufichas+gananciaU;
   			Sfichas=Sfichas+gananciaS;
   		}
		else if(banco>0){
		var perdidaS = Math.round(fichas[apuestaSistema]);
		var gananciaU = Math.round( perdidaS+fichas[apuestaUsuario]+ (banco*(fichas[apuestaUsuario]/100)));
   		var perdidaS = Math.round(fichas[apuestaSistema]);
   		Ufichas=Ufichas+gananciaU;
   		var perdidaC = Math.round(banco*(fichas[apuestaUsuario]/100));
   		banco= banco- perdidaC;
   		var textfu = "Tienes diponible <br>$"+Ufichas;
		var textfs = "Sistema Tiene disponible<br>$"+Sfichas;
		var textfc = "Fondo en caja diponible <br>$"+banco;
   		var ganoU = "<br>Has ganado $"+gananciaU;
       	var perdioS = "<br>Sistema perdio $"+perdidaS;
       	var perdioC="<br>Casino perdio $"+perdidaC;
    	document.getElementById('fu').innerHTML= textfu+ganoU;
    	document.getElementById('fs').innerHTML= textfs+perdioS;
    	document.getElementById('fc').innerHTML= textfc+perdioC;

	} 
	}
	else if (opciones[opcionUsuario]!=opcionMaquina &&opciones[opocionSistema]== opcionMaquina)
	{if(banco<=0){
			banco=0;
   			var perdidaC = 0;
   			var gananciaU = fichas[apuestaUsuario];
   			var gananciaS = fichas[apuestaSistema];
   			Ufichas=Ufichas+gananciaU;
   			Sfichas=Sfichas+gananciaS;
   		}
		else if(banco>0){
		var perdidaU = Math.round(fichas[apuestaUsuario]);
   		var gananciaS = Math.round( perdidaU+fichas[apuestaSistema]+ (banco*(fichas[apuestaSistema]/100)));
   		Sfichas=Sfichas+gananciaS;
   		var perdidaC = Math.round((banco*(fichas[apuestaSistema]/100)));
   		banco= banco- perdidaC;
   		var textfu = "Tienes diponible <br>$"+Ufichas;
		var textfs = "Sistema Tiene disponible<br>$"+Sfichas;
		var textfc = "Fondo en caja diponible <br>$"+banco;
   		var perdioU = "<br>Has perdido $"+perdidaU;
       	var ganoS = "<br>Sistema gano $"+gananciaS;
       	var perdioC="<br>Casino perdio $"+perdidaC;
    	document.getElementById('fu').innerHTML= textfu+perdioU;
    	document.getElementById('fs').innerHTML= textfs+ganoS;
    	document.getElementById('fc').innerHTML= textfc+perdioC;

	}
}

	else if (opciones[opcionUsuario]!=opcionMaquina &&opciones[opocionSistema]!= opcionMaquina)
	{
		if(banco>=0){
		var perdidaU = Math.round(fichas[apuestaUsuario]);
   		var perdidaS = Math.round(fichas[apuestaSistema]);
   		var ganaciaC = perdidaU+perdidaS;
   		banco= banco+ganaciaC;
   		var textfu = "Tienes diponible <br>$"+Ufichas;
		var textfs = "Sistema Tiene disponible<br>$"+Sfichas;
		var textfc = "Fondo en caja diponible <br>$"+banco;
   		var perdioU = "<br>Has perdido $"+perdidaU;
       	var perdioS = "<br>Sistema perdio $"+perdidaS;
       	var ganoC="<br>Casino gano $"+ganaciaC;
    	document.getElementById('fu').innerHTML= textfu+perdioU;
    	document.getElementById('fs').innerHTML= textfs+perdioS;
    	document.getElementById('fc').innerHTML= textfc+ganoC;

	}
}

	else if (opciones[opcionUsuario]!=opcionMaquina && opciones[opocionSistema]=="No apuesta")
	{
		
		var perdidaU = Math.round(fichas[apuestaUsuario]);
   		var ganaciaC = perdidaU;
   		banco= banco+ganaciaC;
   		var textfu = "Tienes diponible <br>$"+Ufichas;
		var textfc = "Fondo en caja diponible <br>$"+banco;
   		var perdioU = "<br>Has perdido $"+perdidaU;
       	var ganoC="<br>Casino gano $"+ganaciaC;
       		var textfs = "Sistema ha finalizado <br>$"+Sficha;
	 	var textap = "Apostaste $"+fichas[apuestaUsuario]+" al numero: "+opciones[opcionUsuario]+"<br>Sitema ya no dispone de fichas ";
	 	document.getElementById('fs').innerHTML=textfs;
	 	document.getElementById('respuesta').innerHTML = textap;
    	document.getElementById('fu').innerHTML= textfu+perdioU;
    	document.getElementById('fc').innerHTML= textfc+ganoC;

	}
	else if (opciones[opcionUsuario]==opcionMaquina && opciones[opocionSistema]=="No apuesta")
	{
		
		var gananciaU = Math.round(fichas[apuestaUsuario]+ (banco*(fichas[apuestaUsuario]/100)));
   		Ufichas=Ufichas+gananciaU;
   		var perdidaC = Math.round(banco*(fichas[apuestaUsuario]/100));
   		banco= banco- perdidaC;
   		var textfu = "Tienes diponible <br>$"+Ufichas;
		var textfc = "Fondo en caja diponible <br>$"+banco;
   		var ganoU = "<br>Has ganado $"+gananciaU;
       	var perdioC="<br>Casino perdio $"+perdidaC;
       	var textfs = "Sistema ha finalizado <br>$"+Sficha;
	 	var textap = "Apostaste $"+fichas[apuestaUsuario]+" al numero: "+opciones[opcionUsuario]+"<br>Sitema ya no dispone de fichas ";
	 	document.getElementById('fs').innerHTML=textfs;
	 	document.getElementById('respuesta').innerHTML = textap;
    	document.getElementById('fu').innerHTML= textfu+ganoU;
    	document.getElementById('fc').innerHTML= textfc+perdioC;

	} 
	

	if (Ufichas>=50)
	{
		document.getElementById('u50').style.display = "block";
		document.getElementById('u20').style.display ="block";
		document.getElementById('u10').style.display ="block";
		document.getElementById('u5').style.display ="block";
	}
	if(Ufichas<50)
	{
		document.getElementById('u50').style.display ="none";
	
	}
	if(Ufichas<20)
	{

		document.getElementById('u20').style.display ="none";
		
	}
	if(Ufichas<10)
	{
	
		document.getElementById('u10').style.display ="none";
	
	}
	if(Ufichas<5){

		document.getElementById('u5').style.display ="none";
		document.getElementById('perdiste').style.display ="block";
	} 
	if(Sfichas<5 && banco==0){
		document.getElementById('ganaste').style.display ="block";


	}

	

}
		
