//Evento para que se pueda ejecutar el código cuando cargue el contenido
document.addEventListener("DOMContentLoaded", () => {

    //Variables: boton, párrafo cita y párrafo autor
    const boton = document.querySelector("#boton");
    const cita = document.querySelector("#cita");
    const autor = document.querySelector("#autor");

    //Eventos: 
    boton.addEventListener("click", cambiarCita);

    //Funciones:
    function recorrerCitas(min, max) {
        //el min hasta el max y * mas el min: retornar numero entero aleatorio.
        return Math.floor(Math.random() * (max - min) + min)
    }

    function cambiarCita() {
        //agg el numero resultado de la fnc en esta variable.
        let indiceCita = recorrerCitas(0, citas.length);

        //agg el texto que se encuentra en la posición del num del indice
        cita.textContent = `"${citas[indiceCita].texto}"`;
        autor.textContent = citas[indiceCita].autor
    }

    //llamar fnc para que se ejecute al iniciar la página.
    cambiarCita();
})

