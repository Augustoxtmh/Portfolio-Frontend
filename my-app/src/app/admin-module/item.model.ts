export class Item {

    titulo:string = "Titulo";
    descripcion:string = "Descripcion";
    url:string = "Url";

    constructor(){
    }

    actualizarCon(titulo:string, descripcion:string, url:string){

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url

    }
}