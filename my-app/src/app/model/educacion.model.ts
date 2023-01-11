export class Educacion{
    
    id?: Number;
    titulo: String;
    descripcion: String;
    url: String;

    constructor(titulo: String, descripcion: String, url: String){

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;

    }
}