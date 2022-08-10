let iifeGlobal = (() => {
    let verTodo =(url,id) => {
        id.setAttribute('src', url);
    };
    return { cargarContenido: (url,id) => verTodo(url,id),
    };
})();



class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
    }
    get url(){
        return this.getUrl();
    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`
    }
};

class Reproductor extends Multimedia {
    constructor(url,id){ 
        super(url);
        let _id = id;
        this.getId = () => _id;
    };
    playMultimedia(){
        iifeGlobal.cargarContenido(this.url,this.getId());
    };
    setInicio(tiempo) {
        this.getId().setAttribute('src',`${this.url}?star=${tiempo}`)
    };
    //funsion privada

};
// playMultimedia()ok
//setInicio()ok

//iframeok 
//setAtribute modificar set "?star=${tiempo"ok


//playMultimedia q llama a la funsion privada iife

let Musica = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY',musica);
Musica.playMultimedia();
Musica.setInicio();

let Pelicula = new Reproductor('https://www.youtube.com/embed/CH8Ymu0MHi4',peliculas);
Pelicula.playMultimedia();

let Serie = new Reproductor('https://www.youtube.com/embed/jDbk6bpgD2A',series);
Serie.playMultimedia();

