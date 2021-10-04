class Agenda {

    constructor(nombre,numeroCell,sede,hora,numeroReserva){
		this.cliente = nombre;
		this.numeroCell = numeroCell;
		this.sede= sede;
		this.hora = hora;
        this.numeroReserva = numeroReserva /* + getRandomInt(100) */;
	}
}

const reservas = JSON.parse(localStorage.getItem("reservas")) || [];