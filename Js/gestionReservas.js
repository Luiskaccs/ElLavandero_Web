/* const reservas = [  {Nombre: "Luis", Horario: 1000, Sede:"San Cristobal",Servicio: "Lavada" },
                    {Nombre: "Carlos", Horario: 1600, Sede:"Engativa",Servicio: "Lavada" },
                    {Nombre: "Claudia"  , Horario: 900, Sede:"Engativa",Servicio: "Secada" },
                    {Nombre: "Juan" , Horario: 1300, Sede:"San Cristobal",Servicio: "Secada"}];


let TipoOrden=prompt(" Ingrese como desea ordenar las reservas (Horario , Sede o Servicio) ").toUpperCase();

        while(TipoOrden != ""){

            switch(TipoOrden){

                case "HORARIO" :

                    const ordenHorarios = reservas.sort((a, b) => a.Horario - b.Horario); 
                    console.log(ordenHorarios);//

                    TipoOrden = "";

                break

                case "SEDE":

                    const ordenSedes1 = reservas.filter(elemento => elemento.Sede == "San Cristobal");
                    const ordenSedes2 = reservas.filter(elemento => elemento.Sede == "Engativa"); 
                    const ordenSedesFinal = ordenSedes1.concat(ordenSedes2) ;
                    console.log(ordenSedesFinal);//

                    TipoOrden = "";

                break

                case "SERVICIO":

                    const ordenServicio = reservas.filter(elemento2 => elemento2.Servicio == "Lavada");
                    const ordenServicio2 = reservas.filter(elemento2 => elemento2.Servicio == "Secada"); 
                    const ordenServicioFinal = ordenServicio.concat(ordenServicio2) ;
                    console.log(ordenServicioFinal);//
                    TipoOrden = "";

                break
                

                default:

                    console.log(" No se puede ordenar " + TipoOrden);
                    TipoOrden=prompt(" Ingrese como desea ordenar las reservas (Horario , Sede o Servicio) ").toUpperCase();
                    break;    
            }


        } */



