$(()=>{
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



DatosAgendamiento.style.display = "none";


const seAgenda = () =>{

    let cliente= inputNombre.value;
    let numeroCell= inputCell.value;
    let sede= selectSede.value;
    let dia= selectDia.value;
    let hora= selectHora.value + ":00";
    let numeroReserva = getRandomInt(1000);

        while(sede != ""){

            switch(sede){

                case "1" :

                    console.log(  cliente + " Te esperamos en el Lavandero San Cristobal a las " + hora);

                    let arrayClienteSC = [cliente, numeroCell,"San Cristobal",dia,hora, numeroReserva ];
                    console.log( "Los Datos de tu reserva son:" + "\n" + arrayClienteSC.join("\n"));
                    let [nombreResSC,numCellResSC,sedeResSC,diaResSC,horaResSC,numeroResSC] = arrayClienteSC;

                    var fila="<tr><td>"+nombreResSC+"</td><td>"+numCellResSC +"</td><td>"+ sedeResSC +"</td><td>"+ diaResSC +"</td><td>"+ horaResSC +"</td><td>"+ numeroResSC +"</td></tr>";

                    var btn = document.createElement("TR");
                    btn.innerHTML=fila;
                    document.getElementById("DatosTable").appendChild(btn);

		            reservas.push(arrayClienteSC);
		            localStorage.setItem("reservas", JSON.stringify(arrayClienteSC));


                   
                    const infoPostSC =arrayClienteSC;
                    $("#btn2").click(() => { 
                        $.post(URLJSON, infoPostSC);
                    });

		            inputNombre.value= "";
		            inputCell.value = "";
                    selectHora.value ="";
                    selectSede.value = "";

                    sede = "";
                        break

                case "2":
            
                    console.log(  cliente +  " Te esperamos en el Lavandero Engativa a las " + hora);
                    
                    let arrayClienteEG = [cliente,numeroCell,"Engativa",dia,hora,numeroReserva ];
                    
                    console.log("Los Datos de tu reserva son: "  + "\n" + arrayClienteEG.join("\n"));    


                    [nombreResEG,numCellResEG,sedeResEG,diaResEG,horaResEG,numeroResEG] = arrayClienteEG;

                    var fila="<tr><td>"+nombreResEG+"</td><td>"+numCellResEG +"</td><td>"+ sedeResEG +"</td><td>"+ diaResEG +"</td><td>"+ horaResEG +"</td><td>"+ numeroResEG +"</td></tr>";

                    var btn = document.createElement("TR");
                    btn.innerHTML=fila;
                    document.getElementById("DatosTable").appendChild(btn);


                    reservas.push(arrayClienteEG);
		            localStorage.setItem("reservas", JSON.stringify(arrayClienteEG));

                   const infoPostEG =arrayClienteEG;
                    $("#btn2").click(() => { 
                        $.post(URLJSON, infoPostEG);
                    });

		            inputNombre.value= "";
		            inputCell.value = "";
                    selectHora.value ="";
                    selectSede.value = "";

                    sede = "";
                    break;        
                                
                default:            
                    console.log(" No nos encontramos en esa ubicación " + sede);

                    sede = "";
                    break;    
                }

                
        }
    }


btnAgendar.onclick = (e) => {

        $("#btn1").remove();
        e.preventDefault()
        seAgenda()
        DatosAgendamiento.style.display = "block";

        $("#DatosAgendamiento").prepend('<p id="p1">Gracias por agendarte!!</p>');
        //Declaración de métodos encadenados
        $("#p1").css("color", "white")
        $("#p1").css("font-size", "30px")
        $("#p1").css("font-weight", "300")
        .slideDown(4000)
        .delay(2000)
        .slideUp(2000);

        $("#DatosAgendamiento").prepend('<button id="btn1">Ocultar</button>');
        $("#btn1").click(() => { 

            $("#DatosAgendamiento").fadeOut();
            $("#btn1").remove()

        }
        
        );
        
    }

    $(document).ready(function(){
        $("#btnAgendar").keypress(function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if(code==13){
                e.preventDefault()
                seAgenda();
                DatosAgendamiento.style.display = "block";


            }
        });
    });
});
