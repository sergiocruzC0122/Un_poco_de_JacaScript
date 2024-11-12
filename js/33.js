async function obtenerEmpleados() {

    const archivo = 'empleados.json';

    fetch(archivo)
        .then( resultado => resultado.json())
        .then( datos => {
            //console.log(datos.empleados);

            const { empleados } = datos;
           console.log(empleados);

        //    empleados.forEach(empleados => {
        //         console.log(empleados.id);
        //         console.log(empleados.nombre);
        //         console.log(empleados.puesto);
        //    });
        });
    

    // const resultado = await fetch(archivo);
    // const datos = await resultado.json();
    // console.log(datos);
}
obtenerEmpleados();