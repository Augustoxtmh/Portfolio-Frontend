export class Experiencia{

    id?: Number;
    titulo: String;
    descripcion: String;
    fecha: String;
    url: String;

    constructor(titulo: String, descripcion: String, url: String, fecha: String){

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.url = url;

    }

}