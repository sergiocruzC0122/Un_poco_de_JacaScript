// Metodos de propiedad

const reproductor = {
    reproducir : function (id){
        console.log(`Reproduciendo Cancion: ${id}`)
    },

    pausar : function(){
        console.log('Pausando cancion..')
    },

    crearPlaylist : function(nombre){
        console.log(`Creando playlist: ${nombre}`)
    },

    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

reproductor.borrarcancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.reproducir(3458);
reproductor.pausar();
reproductor.borrarcancion(20);
reproductor.crearPlaylist('pop del 2000');
reproductor.crearPlaylist('hip hip de los 90');