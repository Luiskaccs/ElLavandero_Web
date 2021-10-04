function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const seAgenda = () =>{

    let cliente= inputNombre.value;
    let numeroCell= inputCell.value;
    let sede= selectSede.value;
    let hora= selectHora.value + ":00";
    let numeroReserva = getRandomInt(1000);
    

        while(sede != ""){

            switch(sede){

                case "1" :
            
                    console.log(  cliente + " Te esperamos en el Lavandero San Cristobal a las " + hora);

                    let arrayClienteSC = [cliente, numeroCell,"San Cristobal",hora, numeroReserva ];
        
                    console.log( "Los Datos de tu reserva son:" + "\n" + arrayClienteSC.join("\n"));

                    /* let DatosAgenSC =document.getElementById("tablaAgenda");

                    for (const reservaSC of arrayClienteSC) {
                        let contenedor = document.createElement("td");
                        contenedor.innerHTML = reservaSC;
                        DatosAgenSC.appendChild(contenedor);
                    } */

                    let [nombreResSC,numCellResSC,sedeResSC,horaResSC,numeroResSC] = arrayClienteSC;
                    document.getElementById("tablaNombre").innerHTML = nombreResSC;
                    document.getElementById("tablaCell").innerHTML = numCellResSC;
                    document.getElementById("tablaSede").innerHTML = sedeResSC;
                    document.getElementById("tablaHora").innerHTML = horaResSC;
                    document.getElementById("tablaNum").innerHTML = numeroResSC;
EG
                    

		            reservas.push(arrayClienteSC);
		            localStorage.setItem("reservas", JSON.stringify(arrayClienteSC));

		            inputNombre.value= "";
		            inputCell.value = "";
                    selectHora.value ="";
                    selectSede.value = "";

                    sede = "";
                        break

                case "2":
            
                    console.log(  cliente +  " Te esperamos en el Lavandero Engativa a las " + hora);
                    
                    let arrayClienteEG = [cliente,numeroCell,"Engativa",hora,numeroReserva ];
                    
                    console.log("Los Datos de tu reserva son: "  + "\n" + arrayClienteEG.join("\n"));    

                    /* let DatosAgenEG =document.getElementById("tablaAgenda");

                    for (const reservaEG of arrayClienteEG) {
                        let contenedor = document.createElement("td");
                        contenedor.innerHTML = reservaEG;
                        DatosAgenEG.appendChild(contenedor);
                    } */

                [nombreResEG,numCellResEG,sedeResEG,horaResEG,numeroResEG] = arrayClienteEG;
                    document.getElementById("tablaNombre").innerHTML = nombreResEG;
                    document.getElementById("tablaCell").innerHTML = numCellResEG;
                    document.getElementById("tablaSede").innerHTML = sedeResEG;
                    document.getElementById("tablaHora").innerHTML = horaResEG;
                    document.getElementById("tablaNum").innerHTML = numeroResEG;

                    reservas.push(arrayClienteEG);
		            localStorage.setItem("reservas", JSON.stringify(arrayClienteEG));

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

        e.preventDefault()
        seAgenda()
    
    }

